import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import argon from "argon2";
import { StatusCodes } from "http-status-codes";
import { validationResult } from "express-validator";
import { CustomRequest, ILoginPayload, ISignupPayload } from "../interfaces";
import { createJwtToken } from "../auth";
import { isRole } from "../utils";
import { verify } from "jsonwebtoken";
import { RolesEnum } from "../enums";

const prisma = new PrismaClient();

class UsersController {
  async getUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const isKing = !!req.header("King");
      if (!isKing) {
        throw new Error("You must be the king to manage the users");
      }
      const dbUsers = await prisma.user.findMany({
        select: {
          email: true,
          id: true,
          role: true,
        },
      });
      res.status(StatusCodes.OK).json({
        users: dbUsers,
      });
    } catch (error) {
      next(error);
    }
  }

  async deleteUser(
    req: CustomRequest<{ id: string }>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const isKing = !!req.header("King");
      if (!isKing) {
        throw new Error("You must be the king to manage the users");
      }
      if (!req.params.id) {
        throw new Error("You must provide an id to delete the user");
      }
      const dbUser = await prisma.user.findFirst({
        where: {
          id: req.params.id,
        },
      });
      if (!dbUser) {
        throw new Error(`id: ${req.params.id} not found`);
      }
      await prisma.user.delete({
        where: {
          id: req.params.id,
        },
      });
      res.status(StatusCodes.OK).json({
        id: req.params.id,
      });
    } catch (error) {
      next(error);
    }
  }

  async modifyUser(
    req: CustomRequest<{ role?: RolesEnum; email?: string; password?: string }>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const isKing = !!req.header("King");
      if (!isKing) {
        throw new Error("You must be the king to manage the users");
      }
      if (!req.params.id) {
        throw new Error("You must provide an id to modify the user");
      }
      const dbUser = await prisma.user.findFirst({
        where: {
          id: req.params.id,
        },
      });
      console.log(req.body);
      if (!dbUser) {
        throw new Error(`id: ${req.params.id} not found`);
      }
      if (!req.body.email && !req.body.role && !req.body.password) {
        throw new Error("You must provide at least an email/role/password");
      }
      if (req.body.role && !isRole(req.body.role)) {
        throw new Error(
          "The role must be one of the following: Admin, Salesman, Trainee, Operator"
        );
      }
      if (req.body.password && req.body.password.length < 6) {
        throw new Error("The password must have at least 6 characters");
      }
      const hash = await argon.hash(req.body.password!);
      const { id } = await prisma.user.update({
        where: {
          id: req.params.id,
        },
        data: {
          email: req.body.email || dbUser.email,
          role: req.body.role || dbUser.role,
          hash: hash || dbUser.hash,
        },
        select: {
          id: true,
        },
      });
      res.status(StatusCodes.OK).json({ id });
    } catch (error) {
      next(error);
    }
  }

  async createUser(
    req: CustomRequest<ISignupPayload>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        throw new Error("Must be a valid email");
      }
      if (!req.body.email || !req.body.password || !req.body.role) {
        throw new Error("You must have a email, password and a role to signup");
      }
      const userDb = await prisma.user.findFirst({
        where: {
          email: req.body.email,
        },
      });
      if (userDb) {
        throw new Error("This email has already been used");
      }
      if (req.body.password.length < 6) {
        throw new Error("The password must have at least 6 characters");
      }
      if (!isRole(req.body.role)) {
        throw new Error(
          "The role must be one of the following: Admin, Salesman, Trainee, Operator"
        );
      }
      const hash = await argon.hash(req.body.password);
      const newUser = await prisma.user.create({
        data: {
          role: req.body.role,
          email: req.body.email,
          hash,
        },
      });
      const token = await createJwtToken(newUser);
      res.status(StatusCodes.CREATED).json({
        id: newUser.id,
        token,
      });
    } catch (error) {
      next(error);
    }
  }

  async loginUser(
    req: CustomRequest<ILoginPayload>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        throw new Error("Must be a valid email");
      }
      const user = await prisma.user.findFirst({
        where: {
          email: req.body.email,
        },
      });
      if (!user) {
        throw new Error("Wrong email/password");
      }
      const isMatch = await argon.verify(user.hash, req.body.password);
      if (!isMatch) {
        throw new Error("Wrong email/password");
      }
      const token = await createJwtToken(user);
      res.status(StatusCodes.OK).json({ token });
    } catch (error) {
      next(error);
    }
  }

  async isTokenValid(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.header("Authorization")?.split(" ")[1];
      if (!token) {
        throw new Error("invalid authorization");
      }
      const tokensBL = await prisma.jwtBlackList.findMany();
      if (tokensBL.some((tokenBL) => tokenBL.token === token)) {
        throw new Error("invalid token");
      }
      verify(token, process.env.JWT_SECRET!);
      res.status(StatusCodes.OK).json({
        success: true,
        status: 200,
        message: "valid token",
      });
    } catch (error) {
      next(error);
    }
  }

  async logout(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.header("Authorization")?.split(" ")[1];
      if (!token) {
        throw new Error("Invalid authorization");
      }
      await prisma.jwtBlackList.create({
        data: {
          token,
        },
      });
      const tokensBL = await prisma.jwtBlackList.findMany();
      for (let tokenBL of tokensBL) {
        if (Date.now() - new Date(+tokenBL.created).getTime() > 7200000) {
          await prisma.jwtBlackList.delete({
            where: {
              id: tokenBL.id,
            },
          });
        }
      }
      res.status(StatusCodes.OK).send();
    } catch (error) {
      next(error);
    }
  }
}

export default UsersController;

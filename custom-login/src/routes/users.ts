import express from "express";
import { body } from "express-validator";
import UsersController from "../controllers/users";

export const UserRouter = express.Router();

const usersController = new UsersController();

UserRouter.route("/login").post(
  body("email").isEmail(),
  usersController.loginUser
);
UserRouter.route("/signup").post(
  body("email").isEmail(),
  usersController.createUser
);

UserRouter.route("/").get(usersController.isTokenValid);
UserRouter.route("/logout").get(usersController.logout);

UserRouter.route("/users").get(usersController.getUsers);
UserRouter.route("/user").get(usersController.getUserByToken);
UserRouter.route("/users/:id").delete(usersController.deleteUser);
UserRouter.route("/users/:id").patch(usersController.modifyUser);

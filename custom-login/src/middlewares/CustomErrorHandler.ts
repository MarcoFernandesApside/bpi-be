import { NextFunction, Request, Response } from "express";

export const CustomErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errStatus = (err as any)?.statusCode || 500;
  const errMsg = err?.message || "Something went wrong";
  res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMsg,
  });
};

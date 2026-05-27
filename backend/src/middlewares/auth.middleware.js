import { verifyToken } from "../utils/jwt.js";

import AppError from "../utils/AppError.js";

export const authenticate = (
  req,
  res,
  next
) => {
  try {
    const authHeader =
      req.headers.authorization;

    if (!authHeader) {
      throw new AppError(
        "Authorization header missing",
        401
      );
    }

    const token =
      authHeader.split(" ")[1];

    if (!token) {
      throw new AppError(
        "Token missing",
        401
      );
    }

    const decoded =
      verifyToken(token);

    req.user = decoded;

    next();
  } catch (error) {
    next(
      new AppError(
        "Invalid or expired token",
        401
      )
    );
  }
};
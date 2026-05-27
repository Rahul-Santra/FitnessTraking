import crypto from "crypto";

import {
  createUser,
  findUserByEmail,
  saveResetToken,
  findUserByResetToken,
  updatePassword,
} from "../models/user.model.js";

import {
  hashPassword,
  comparePassword,
} from "../utils/hash.js";

import { generateToken } from "../utils/jwt.js";

import AppError from "../utils/AppError.js";

export const registerUser = async (
  email,
  password
) => {
  const existingUser =
    await findUserByEmail(email);

  if (existingUser) {
    throw new AppError(
      "Email already exists",
      409
    );
  }

  const hashedPassword =
    await hashPassword(password);

  const user = await createUser(
    email,
    hashedPassword
  );

  const token = generateToken({
    id: user.id,
    email: user.email,
  });

  return {
    user,
    token,
  };
};

export const loginUser = async (
  email,
  password
) => {
  const user =
    await findUserByEmail(email);

  if (!user) {
    throw new AppError(
      "Invalid credentials",
      401
    );
  }

  const isPasswordValid =
    await comparePassword(
      password,
      user.password
    );

  if (!isPasswordValid) {
    throw new AppError(
      "Invalid credentials",
      401
    );
  }

  const token = generateToken({
    id: user.id,
    email: user.email,
  });

  return {
    user,
    token,
  };
};

export const forgotPasswordService =
  async (email) => {
    const user =
      await findUserByEmail(email);

    if (!user) {
      throw new AppError(
        "User not found",
        404
      );
    }

    const resetToken =
      crypto.randomBytes(32).toString(
        "hex"
      );

    const expiry = new Date(
      Date.now() + 1000 * 60 * 15
    );

    await saveResetToken(
      email,
      resetToken,
      expiry
    );

    return resetToken;
  };

export const resetPasswordService =
  async (
    token,
    newPassword
  ) => {
    const user =
      await findUserByResetToken(
        token
      );

    if (!user) {
      throw new AppError(
        "Invalid or expired token",
        401
      );
    }

    const hashedPassword =
      await hashPassword(
        newPassword
      );

    await updatePassword(
      user.id,
      hashedPassword
    );

    return true;
  };
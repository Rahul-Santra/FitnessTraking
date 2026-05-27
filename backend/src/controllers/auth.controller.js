import {
  registerUser,
  loginUser,
  forgotPasswordService,
  resetPasswordService,
} from "../services/auth.service.js";

import asyncHandler from "../utils/asyncHandler.js";

import { sendResponse } from "../utils/response.js";

export const register =
  asyncHandler(
    async (req, res) => {
      const {
        email,
        password,
      } = req.body;

      const result =
        await registerUser(
          email,
          password
        );

      return sendResponse({
        res,
        statusCode: 201,
        message:
          "User registered successfully",
        data: result,
      });
    }
  );

export const login =
  asyncHandler(
    async (req, res) => {
      const {
        email,
        password,
      } = req.body;

      const result =
        await loginUser(
          email,
          password
        );

      return sendResponse({
        res,
        statusCode: 200,
        message:
          "Login successful",
        data: result,
      });
    }
  );

export const forgotPassword =
  asyncHandler(
    async (req, res) => {
      const { email } =
        req.body;

      const resetToken =
        await forgotPasswordService(
          email
        );

      return sendResponse({
        res,
        statusCode: 200,
        message:
          "Reset token generated successfully",
        data: {
          resetToken,
        },
      });
    }
  );

export const resetPassword =
  asyncHandler(
    async (req, res) => {
      const { token } =
        req.params;

      const {
        password,
      } = req.body;

      await resetPasswordService(
        token,
        password
      );

      return sendResponse({
        res,
        statusCode: 200,
        message:
          "Password reset successful",
      });
    }
  );
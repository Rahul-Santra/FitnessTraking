import {
  createUserProfile,
  getUserProfile,
  updateUserProfile,
} from "../services/profile.service.js";

import asyncHandler from "../utils/asyncHandler.js";

import { sendResponse } from "../utils/response.js";

export const createProfile =
  asyncHandler(
    async (req, res) => {
      const profile =
        await createUserProfile(
          req.user.id,
          req.body
        );

      return sendResponse({
        res,
        statusCode: 201,
        message:
          "Profile created successfully",
        data: profile,
      });
    }
  );

export const getProfile =
  asyncHandler(
    async (req, res) => {
      const profile =
        await getUserProfile(
          req.user.id
        );

      return sendResponse({
        res,
        statusCode: 200,
        message:
          "Profile fetched successfully",
        data: profile,
      });
    }
  );

export const updateProfile =
  asyncHandler(
    async (req, res) => {
      const updatedProfile =
        await updateUserProfile(
          req.user.id,
          req.body
        );

      return sendResponse({
        res,
        statusCode: 200,
        message:
          "Profile updated successfully",
        data: updatedProfile,
      });
    }
  );
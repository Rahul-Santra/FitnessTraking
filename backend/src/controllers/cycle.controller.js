import {
  createUserCycle,
  getUserCycle,
  updateUserCycle,
} from "../services/cycle.service.js";

import asyncHandler from "../utils/asyncHandler.js";

import { sendResponse } from "../utils/response.js";

export const createCycle =
  asyncHandler(
    async (req, res) => {
      const cycle =
        await createUserCycle(
          req.user.id,
          req.body
        );

      return sendResponse({
        res,
        statusCode: 201,
        message:
          "Cycle data created successfully",
        data: cycle,
      });
    }
  );

export const getCycle =
  asyncHandler(
    async (req, res) => {
      const cycle =
        await getUserCycle(
          req.user.id
        );

      return sendResponse({
        res,
        statusCode: 200,
        message:
          "Cycle data fetched successfully",
        data: cycle,
      });
    }
  );

export const updateCycle =
  asyncHandler(
    async (req, res) => {
      const updatedCycle =
        await updateUserCycle(
          req.user.id,
          req.body
        );

      return sendResponse({
        res,
        statusCode: 200,
        message:
          "Cycle updated successfully",
        data: updatedCycle,
      });
    }
  );
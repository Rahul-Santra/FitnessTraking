import {
  generateTodayWorkout,
  completeWorkout,
  getUserWorkoutHistory,
} from "../services/workout.service.js";

import asyncHandler from "../utils/asyncHandler.js";

import { sendResponse } from "../utils/response.js";

export const getTodayWorkout =
  asyncHandler(
    async (req, res) => {
      const workout =
        await generateTodayWorkout(
          req.user.id
        );

      return sendResponse({
        res,
        statusCode: 200,
        message:
          "Workout fetched successfully",
        data: workout,
      });
    }
  );

export const completeUserWorkout =
  asyncHandler(
    async (req, res) => {
      const {
        workoutId,
      } = req.body;

      const log =
        await completeWorkout(
          req.user.id,
          workoutId
        );

      return sendResponse({
        res,
        statusCode: 200,
        message:
          "Workout completed successfully",
        data: log,
      });
    }
  );

export const getWorkoutHistory =
  asyncHandler(
    async (req, res) => {
      const history =
        await getUserWorkoutHistory(
          req.user.id
        );

      return sendResponse({
        res,
        statusCode: 200,
        message:
          "Workout history fetched successfully",
        data: history,
      });
    }
  );
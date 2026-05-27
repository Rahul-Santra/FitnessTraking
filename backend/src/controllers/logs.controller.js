import {
  createUserDailyLog,
  getUserDailyLogs,
} from "../services/logs.service.js";

import asyncHandler from "../utils/asyncHandler.js";

import { sendResponse } from "../utils/response.js";

export const createLog =
  asyncHandler(
    async (req, res) => {
      const log =
        await createUserDailyLog(
          req.user.id,
          req.body
        );

      return sendResponse({
        res,
        statusCode: 201,
        message:
          "Daily log created successfully",
        data: log,
      });
    }
  );

export const getLogs =
  asyncHandler(
    async (req, res) => {
      const logs =
        await getUserDailyLogs(
          req.user.id
        );

      return sendResponse({
        res,
        statusCode: 200,
        message:
          "Daily logs fetched successfully",
        data: logs,
      });
    }
  );
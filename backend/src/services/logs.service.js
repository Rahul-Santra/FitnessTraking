import {
  createDailyLog,
  getDailyLogs,
  getTodayLog,
} from "../models/dailyLog.model.js";

import { validateDailyLog } from "../validators/log.validator.js";

import AppError from "../utils/AppError.js";

export const createUserDailyLog =
  async (
    userId,
    logData
  ) => {
    validateDailyLog(
      logData
    );

    const today =
      new Date()
        .toISOString()
        .split("T")[0];

    const existingLog =
      await getTodayLog(
        userId,
        today
      );

    if (existingLog) {
      throw new AppError(
        "Today's log already exists",
        409
      );
    }

    const log =
      await createDailyLog({
        userId,
        logDate: today,
        ...logData,
      });

    return log;
  };

export const getUserDailyLogs =
  async (userId) => {
    const logs =
      await getDailyLogs(
        userId
      );

    return logs;
  };
import {
  createCycle,
  getCycleByUserId,
  updateCycle,
} from "../models/cycle.model.js";

import { detectCyclePhase } from "./decisionEngine/phaseDetector.js";

import AppError from "../utils/AppError.js";

export const createUserCycle =
  async (
    userId,
    cycleData
  ) => {
    const existingCycle =
      await getCycleByUserId(
        userId
      );

    if (existingCycle) {
      throw new AppError(
        "Cycle data already exists",
        409
      );
    }

    const cycle =
      await createCycle({
        userId,
        ...cycleData,
      });

    return cycle;
  };

export const getUserCycle =
  async (userId) => {
    const cycle =
      await getCycleByUserId(
        userId
      );

    if (!cycle) {
      throw new AppError(
        "Cycle data not found",
        404
      );
    }

    const phaseData =
      detectCyclePhase(
        cycle.last_period_date,
        cycle.cycle_length
      );

    const nextPeriodDate =
      new Date(
        cycle.last_period_date
      );

    nextPeriodDate.setDate(
      nextPeriodDate.getDate() +
        cycle.cycle_length
    );

    return {
      ...cycle,

      currentPhase:
        phaseData.phase,

      cycleDay:
        phaseData.cycleDay,

      nextPeriodDate,
    };
  };

export const updateUserCycle =
  async (
    userId,
    cycleData
  ) => {
    const existingCycle =
      await getCycleByUserId(
        userId
      );

    if (!existingCycle) {
      throw new AppError(
        "Cycle data not found",
        404
      );
    }

    const updatedCycle =
      await updateCycle(
        userId,
        cycleData
      );

    return updatedCycle;
  };
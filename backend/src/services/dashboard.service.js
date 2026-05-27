import {
  getWorkoutCount,
} from "../models/workout.model.js";

import {
  getCompletedWorkoutCount,
  getWorkoutLogs,
} from "../models/workoutLog.model.js";

import {
  getProfileByUserId,
} from "../models/profile.model.js";

import {
  getCycleByUserId,
} from "../models/cycle.model.js";

import {
  detectCyclePhase,
} from "./decisionEngine/phaseDetector.js";

import { calculateStreak } from "../utils/streak.js";

import AppError from "../utils/AppError.js";

export const getDashboardData =
  async (userId) => {
    const profile =
      await getProfileByUserId(
        userId
      );

    if (!profile) {
      throw new AppError(
        "Profile not found",
        404
      );
    }

    const totalWorkouts =
      await getWorkoutCount(
        userId
      );

    const completedWorkouts =
      await getCompletedWorkoutCount(
        userId
      );

    const logs =
      await getWorkoutLogs(
        userId
      );

    const streak =
      calculateStreak(logs);

    const completionRate =
      totalWorkouts === 0
        ? 0
        : Math.round(
            (completedWorkouts /
              totalWorkouts) *
              100
          );

    let cycleInsights = null;

    if (
      profile.gender ===
      "female"
    ) {
      const cycle =
        await getCycleByUserId(
          userId
        );

      if (cycle) {
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

        cycleInsights = {
          currentPhase:
            phaseData.phase,

          cycleDay:
            phaseData.cycleDay,

          nextPeriodDate,
        };
      }
    }

    return {
      profile,

      analytics: {
        totalWorkouts,

        completedWorkouts,

        completionRate,

        streak,
      },

      cycleInsights,
    };
  };
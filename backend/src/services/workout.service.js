import {
  getProfileByUserId,
} from "../models/profile.model.js";

import {
  getCycleByUserId,
} from "../models/cycle.model.js";

import {
  createWorkout,
  getWorkoutByDate,
} from "../models/workout.model.js";

import {
  createWorkoutLog,
  getWorkoutHistory,
} from "../models/workoutLog.model.js";

import {
  detectCyclePhase,
} from "./decisionEngine/phaseDetector.js";

import {
  getWorkoutIntensity,
} from "./decisionEngine/intensityMapper.js";

import {
  selectWorkoutType,
} from "./decisionEngine/workoutSelector.js";

import {
  generateWorkoutPlan,
} from "./decisionEngine/workoutGenerator.js";

import AppError from "../utils/AppError.js";

export const generateTodayWorkout =
  async (userId) => {
    const today =
      new Date()
        .toISOString()
        .split("T")[0];

    const existingWorkout =
      await getWorkoutByDate(
        userId,
        today
      );

    if (existingWorkout) {
      return existingWorkout;
    }

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

    let phase = null;

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

        phase =
          phaseData.phase;
      }
    }

    const intensity =
      getWorkoutIntensity({
        gender:
          profile.gender,

        phase,

        experienceLevel:
          profile.experience_level,
      });

    const workoutType =
      selectWorkoutType({
        goal:
          profile.fitness_goal,

        intensity,
      });

    const plan =
      generateWorkoutPlan({
        workoutType,
        intensity,
      });

    const durationMinutes =
      intensity === "high"
        ? 60
        : intensity ===
            "medium"
          ? 45
          : 30;

    const workout =
      await createWorkout({
        userId,

        workoutDate:
          today,

        workoutType,

        intensity,

        durationMinutes,

        plan,
      });

    return workout;
  };

export const completeWorkout =
  async (
    userId,
    workoutId
  ) => {
    if (!workoutId) {
      throw new AppError(
        "Workout ID is required",
        400
      );
    }

    const workoutLog =
      await createWorkoutLog(
        userId,
        workoutId
      );

    return workoutLog;
  };

export const getUserWorkoutHistory =
  async (userId) => {
    const history =
      await getWorkoutHistory(
        userId
      );

    return history;
  };
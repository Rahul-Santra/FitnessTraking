import AppError from "../utils/AppError.js";

export const validateDailyLog =
  (data) => {
    const {
      mood,
      energyLevel,
    } = data;

    if (!mood) {
      throw new AppError(
        "Mood is required",
        400
      );
    }

    if (
      !energyLevel ||
      energyLevel < 1 ||
      energyLevel > 10
    ) {
      throw new AppError(
        "Energy level must be between 1 and 10",
        400
      );
    }
  };
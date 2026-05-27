import AppError from "../utils/AppError.js";

export const validateProfileData =
  (data) => {
    const {
      age,
      weight,
      height,
      gender,
      fitnessGoal,
      experienceLevel,
    } = data;

    if (
      !age ||
      !weight ||
      !height ||
      !gender ||
      !fitnessGoal ||
      !experienceLevel
    ) {
      throw new AppError(
        "All profile fields are required",
        400
      );
    }

    if (
      age < 10 ||
      age > 100
    ) {
      throw new AppError(
        "Invalid age",
        400
      );
    }

    if (weight <= 0) {
      throw new AppError(
        "Invalid weight",
        400
      );
    }

    if (height <= 0) {
      throw new AppError(
        "Invalid height",
        400
      );
    }

    const validGenders = [
      "male",
      "female",
    ];

    if (
      !validGenders.includes(
        gender
      )
    ) {
      throw new AppError(
        "Invalid gender",
        400
      );
    }

    const validGoals = [
      "lose_weight",
      "gain_muscle",
      "maintain_fitness",
    ];

    if (
      !validGoals.includes(
        fitnessGoal
      )
    ) {
      throw new AppError(
        "Invalid fitness goal",
        400
      );
    }

    const validLevels = [
      "beginner",
      "intermediate",
      "advanced",
    ];

    if (
      !validLevels.includes(
        experienceLevel
      )
    ) {
      throw new AppError(
        "Invalid experience level",
        400
      );
    }
  };
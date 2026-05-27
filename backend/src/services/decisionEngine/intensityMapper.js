export const getWorkoutIntensity = ({
  gender,
  phase,
  experienceLevel,
}) => {
  if (gender === "female") {
    if (phase === "menstrual") {
      return "low";
    }

    if (phase === "follicular") {
      return "medium";
    }

    if (phase === "ovulation") {
      return "high";
    }

    if (phase === "luteal") {
      return "medium";
    }
  }

  if (experienceLevel === "beginner") {
    return "low";
  }

  if (
    experienceLevel === "intermediate"
  ) {
    return "medium";
  } 

  return "high";
};
export const selectWorkoutType = ({
  goal,
  intensity,
}) => {
  if (
    goal === "lose_weight"
  ) {
    if (intensity === "high") {
      return "gym";
    }

    return "home";
  }

  if (
    goal === "gain_muscle"
  ) {
    return "gym";
  }

  if (
    goal === "maintain_fitness"
  ) {
    return "yoga";
  }

  return "home";
};
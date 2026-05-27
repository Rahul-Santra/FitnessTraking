export const generateWorkoutPlan = ({
  workoutType,
  intensity,
}) => {
  const workouts = {
    gym: {
      low: {
        warmup: [
          "Light treadmill walk",
        ],
        mainWorkout: [
          "Bodyweight squats",
          "Push-ups",
          "Dumbbell rows",
        ],
        cooldown: [
          "Stretching",
        ],
      },

      medium: {
        warmup: [
          "Jogging",
        ],
        mainWorkout: [
          "Bench press",
          "Deadlifts",
          "Pull-ups",
        ],
        cooldown: [
          "Foam rolling",
        ],
      },

      high: {
        warmup: [
          "Dynamic stretches",
        ],
        mainWorkout: [
          "Heavy squats",
          "Burpees",
          "HIIT sprints",
        ],
        cooldown: [
          "Mobility stretches",
        ],
      },
    },

    yoga: {
      low: {
        warmup: [
          "Breathing exercises",
        ],
        mainWorkout: [
          "Child pose",
          "Cat-cow stretch",
        ],
        cooldown: [
          "Meditation",
        ],
      },

      medium: {
        warmup: [
          "Sun salutation",
        ],
        mainWorkout: [
          "Warrior pose",
          "Tree pose",
        ],
        cooldown: [
          "Deep breathing",
        ],
      },

      high: {
        warmup: [
          "Dynamic yoga flow",
        ],
        mainWorkout: [
          "Power yoga",
          "Core yoga",
        ],
        cooldown: [
          "Relaxation pose",
        ],
      },
    },

    home: {
      low: {
        warmup: [
          "March in place",
        ],
        mainWorkout: [
          "Wall push-ups",
          "Chair squats",
        ],
        cooldown: [
          "Stretching",
        ],
      },

      medium: {
        warmup: [
          "Jumping jacks",
        ],
        mainWorkout: [
          "Push-ups",
          "Lunges",
          "Planks",
        ],
        cooldown: [
          "Yoga stretches",
        ],
      },

      high: {
        warmup: [
          "High knees",
        ],
        mainWorkout: [
          "Burpees",
          "Mountain climbers",
          "Jump squats",
        ],
        cooldown: [
          "Mobility work",
        ],
      },
    },
  };

  return workouts[
    workoutType
  ][intensity];
};
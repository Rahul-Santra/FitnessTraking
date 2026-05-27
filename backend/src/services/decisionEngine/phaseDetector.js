export const detectCyclePhase = (
  lastPeriodDate,
  cycleLength = 28
) => {
  const today = new Date();

  const lastDate = new Date(
    lastPeriodDate
  );

  const diffTime =
    today - lastDate;

  const diffDays = Math.floor(
    diffTime / (1000 * 60 * 60 * 24)
  );

  const cycleDay =
    (diffDays % cycleLength) + 1;

  let phase = "";

  if (cycleDay >= 1 && cycleDay <= 5) {
    phase = "menstrual";
  } else if (
    cycleDay >= 6 &&
    cycleDay <= 13
  ) {
    phase = "follicular";
  } else if (
    cycleDay >= 14 &&
    cycleDay <= 16
  ) {
    phase = "ovulation";
  } else {
    phase = "luteal";
  }

  return {
    cycleDay,
    phase,
  };
};
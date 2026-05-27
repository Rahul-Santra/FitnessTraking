export const calculateStreak = (
  logs
) => {
  if (!logs.length) {
    return 0;
  }

  let streak = 0;

  const today = new Date();

  for (let i = 0; i < logs.length; i++) {
    const logDate = new Date(
      logs[i].completed_at
    );

    const diffDays = Math.floor(
      (today - logDate) /
        (1000 * 60 * 60 * 24)
    );

    if (diffDays === streak) {
      streak++;
    } else {
      break;
    }
  }

  return streak;
};
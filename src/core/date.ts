const utcStart = Date.UTC(2024, 7, 29);  // 2024-08-29

export const daysSinceStartDate = (): number => {
  const today = new Date();
  const utcToday = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate());

  const diffTime = utcToday - utcStart;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

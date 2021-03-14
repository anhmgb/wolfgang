export const diffDays = (timeStart, timeEnd) => {
  const oneDay = 24 * 60 * 60 * 1000;
  return Math.ceil((timeEnd - timeStart) / oneDay);
};

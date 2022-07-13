export const getLastDayOfMonth = () => {
  const today = new Date();
  const month = today.getMonth();
  const year = today.getFullYear();
  const lastDay = new Date(year, month, 0).setHours(23, 59, 59, 999);

  return new Date(lastDay);
};

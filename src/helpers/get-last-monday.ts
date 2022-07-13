export const getLastMonday = () => {
  const today = new Date();

  today.setDate(today.getDate() - ((today.getDay() + 6) % 7));
  today.setHours(0, 0, 0, 0);

  return today;
};

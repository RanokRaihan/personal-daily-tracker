export const genGreeting = () => {
  const myDate = new Date();
  const currentHour = myDate.getHours();

  if (currentHour >= 4 && currentHour <= 11) return "Good Morning";
  else if (currentHour >= 12 && currentHour <= 17) return "Good Afternoon";
  else return "Good Evening";
};

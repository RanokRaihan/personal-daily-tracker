export default function monthYearGen() {
  const monthArray = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];
  return `${monthArray[new Date().getMonth()]}-${new Date().getFullYear()}`;
}

export const nameMaker = (name) => {
  return name
    ? name
        .trim()
        .split(" ")
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" ")
    : "User";
};

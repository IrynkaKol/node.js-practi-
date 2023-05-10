const isLeapYear = (year) => {
  if (year === undefined) {
    throw new Error("Year must be exist");
  }
  if (typeof year !== "number") {
    throw new Error("Year must be number");
  }

  if (!Number.isInteger(year)) {
    throw new Error("Year must be integral");
  }

  const data = new Date(year, 2, 0); // отримуєм нульовий день березня
  const days = data.getDate();
  return 29 === days;
};

module.exports = isLeapYear;

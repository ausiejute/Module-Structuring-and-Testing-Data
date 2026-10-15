export function getOrdinalNumber(num) {
  if (num === null || num === undefined || num === "" || num < 0) {
    throw new Error("Invalid input!");
  }

  if (typeof num !== "number" || !isFinite(num)) {
    throw new Error("Invalid input!");
  }

  const lastDigit = num % 10;
  const lastTwoDigits = num % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return `${num}th`;
  }

  if (lastDigit === 1) {
    return `${num}st`;
  } else if (lastDigit === 2) {
    return `${num}nd`;
  } else if (lastDigit === 3) {
    return `${num}rd`;
  }
  return `${num}th`;
}

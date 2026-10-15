import { getOrdinalNumber } from "./get-ordinal-number.js";
// In this week's prep, we started implementing getOrdinalNumber.

// Continue testing and implementing getOrdinalNumber for additional cases.
// Write your tests using Jest — remember to run your tests often for continual feedback.

// To ensure thorough testing, we need broad scenarios that cover all possible cases.
// Listing individual values, however, can quickly lead to an unmanageable number of test cases.
// Instead of writing tests for individual numbers, consider grouping all possible input values
// into meaningful categories. Then, select representative samples from each category to test.
// This approach improves coverage and makes our tests easier to maintain.

// Case 1: Numbers ending with 1 (but not 11)
// When the number ends with 1, except those ending with 11,
// Then the function should return a string by appending "st" to the number.
test("should append 'st' for numbers ending with 1, except those ending with 11", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
  expect(getOrdinalNumber(21)).toEqual("21st");
  expect(getOrdinalNumber(131)).toEqual("131st");
});

test("should append 'nd' for numbers ending with 2, except those ending with 12", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
  expect(getOrdinalNumber(32)).toEqual("32nd");
  expect(getOrdinalNumber(102)).toEqual("102nd");
});

test("should append 'rd' for numbers ending with 3, except those ending with 13", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
  expect(getOrdinalNumber(53)).toEqual("53rd");
  expect(getOrdinalNumber(123)).toEqual("123rd");
});

test("should append 'th' for the rest of the numbers", () => {
  expect(getOrdinalNumber(9)).toEqual("9th");
  expect(getOrdinalNumber(20)).toEqual("20th");
  expect(getOrdinalNumber(108)).toEqual("108th");
});

test("should throw an error if the input is invalid", () => {
  expect(() => getOrdinalNumber("")).toThrow("Invalid input!");
  expect(() => getOrdinalNumber("fifty two")).toThrow("Invalid input!");
  expect(() => getOrdinalNumber(-3)).toThrow("Invalid input!");
  expect(() => getOrdinalNumber(null)).toThrow("Invalid input!");
  expect(() => getOrdinalNumber(undefined)).toThrow("Invalid input!");
});

import { getCardValue } from "../implement/3-get-card-value.js";

// TODO: Write tests in Jest syntax to cover all possible outcomes.

// Case 1: Ace (A)
test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11);
});

// Suggestion: Group the remaining test data into these categories:
//   Number Cards (2-10)
//   Face Cards (J, Q, K)
//   Invalid Cards

// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror
// -----number cards------
test(`Should return 2 when given a 2 card`, () => {
  expect(getCardValue("2♥")).toEqual(2);
});

test(`Should return 3 when given a 3 card`, () => {
  expect(getCardValue("3♣")).toEqual(3);
});
test(`Should return 4 when given a 4 card`, () => {
  expect(getCardValue("4♦")).toEqual(4);
});
test(`Should return 5 when given a 5 card`, () => {
  expect(getCardValue("5♠")).toEqual(5);
});
test(`Should return 6 when given a 6 card`, () => {
  expect(getCardValue("6♦")).toEqual(6);
});
test(`Should return 7 when given a 7 card`, () => {
  expect(getCardValue("7♥")).toEqual(7);
});
test(`Should return 8 when given a 8 card`, () => {
  expect(getCardValue("8♠")).toEqual(8);
});
test(`Should return 9 when given a 9 card`, () => {
  expect(getCardValue("9♥")).toEqual(9);
});
test(`Should return 10 when given a 10 card`, () => {
  expect(getCardValue("10♣")).toEqual(10);
});
// -----remaining face cards-----
test(`Should return 10 when given a jack card`, () => {
  expect(getCardValue("J♥")).toEqual(10);
});
test(`Should return 10 when given a king card`, () => {
  expect(getCardValue("K♣")).toEqual(10);
});
test(`Should return 10 when given a queen card`, () => {
  expect(getCardValue("Q♥")).toEqual(10);
});
// -----invalid cards-----
test("Should throw an error for card without suit", () => {
  expect(() => getCardValue("A")).toThrow("Missing a specific suit symbol");
});

test("Should throw an error for card with invalid number", () => {
  expect(() => getCardValue("0♥")).toThrow(
    "Missing a specific number and specific suit symbol"
  );
});

test("Should throw an error for empty input", () => {
  expect(() => getCardValue("")).toThrow(
    "Missing a specific number and specific suit symbol"
  );
});

test("Should throw an error for an invalid input", () => {
  expect(() => getCardValue("J♥♥")).toThrow(
    "Missing a specific number and specific suit symbol"
  );
});

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
test.each([
  { card: "2♥", value: 2 },
  { card: "3♣", value: 3 },
  { card: "4♦", value: 4 },
  { card: "5♠", value: 5 },
  { card: "6♦", value: 6 },
  { card: "7♥", value: 7 },
  { card: "8♠", value: 8 },
  { card: "9♥", value: 9 },
  { card: "10♣", value: 10 },
])("Should return $value when given a $card card", ({ card, value }) => {
  expect(getCardValue(card)).toEqual(value);
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

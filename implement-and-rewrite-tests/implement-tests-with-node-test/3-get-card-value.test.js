import assert from "node:assert";
import test from "node:test";

import { getCardValue } from "../implement/3-get-card-value.js";

// TODO: Write tests to cover all outcomes, including throwing errors for invalid cards.

// test("Valid single-digit card", () => {
//   assert.equal(getCardValue("9♠"), 9);
// });

// test("Arbitrary non-card string", () => {
//   assert.throws(
//     () => getCardValue("invalid"),
//     /Expected a number followed by a suit, but got "invalid"/
//   );
// });

test("Valid single-digit card", () => {
  assert.equal(getCardValue("2♠"), 2);
});
test("Valid double-digit card", () => {
  assert.equal(getCardValue("10♥"), 10);
});
test("Valid king card", () => {
  assert.equal(getCardValue("Q♣"), 10);
});
test("Valid queen card", () => {
  assert.equal(getCardValue("K♠"), 10);
});
test("Valid jack card", () => {
  assert.equal(getCardValue("J♦"), 10);
});
test("Valid ace card", () => {
  assert.equal(getCardValue("A♠"), 11);
});

// TODO: What other invalid card cases can you think of?

test("No suit symbol", () => {
  assert.throws(
    () => getCardValue("A"),
    Error,
    "Should throw an error for card without suit"
  );
});

test("Invalid number", () => {
  assert.throws(
    () => getCardValue("0"),
    Error,
    "Should throw an error for card with invalid number"
  );
});
test("Empty input", () => {
  assert.throws(
    () => getCardValue(""),
    Error,
    "Should throw an error for empty input"
  );
});
test("Any other invalid input", () => {
  assert.throws(
    () => getCardValue("10♥♥"),
    Error,
    "Should throw an error for an invalid input"
  );
});

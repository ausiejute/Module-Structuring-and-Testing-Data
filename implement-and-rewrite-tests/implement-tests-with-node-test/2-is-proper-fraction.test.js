import assert from "node:assert";
import test from "node:test";

import { isProperFraction } from "../implement/2-is-proper-fraction.js";

// TODO: Write tests to cover all cases.
// What combinations of numerators and denominators should you test?

test("Basic proper fraction", () => {
  // Example: 1/2 is a proper fraction
  assert.equal(isProperFraction(1, 2), true);
});

test("Improper fraction where numerator is bigger than denominator", () => {
  assert.equal(isProperFraction(3, 2), false);
});

test("Proper fraction with negative denominator", () => {
  assert.equal(isProperFraction(1, -2), true);
});

test("Proper fraction with negative numerator", () => {
  assert.equal(isProperFraction(-2, 4), true);
});

test("Proper fraction with both negatives where numerator is smaller", () => {
  assert.equal(isProperFraction(-2, -4), true);
});

test("Proper fraction with both negatives where numerator is bigger", () => {
  assert.equal(isProperFraction(-3, -2), false);
});

test("Improper fraction with equal values", () => {
  assert.equal(isProperFraction(2, 2), false);
});

test("Proper fraction with zero numerator", () => {
  assert.equal(isProperFraction(0, 4), true);
});

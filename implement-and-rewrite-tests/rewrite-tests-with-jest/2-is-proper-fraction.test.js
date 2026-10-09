import { isProperFraction } from "../implement/2-is-proper-fraction.js";

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

test(`should return true when numerator is less than denominator`, () => {
  expect(isProperFraction(1, 2)).toEqual(true);
});

test(`should return false when numerator is more than denominator`, () => {
  expect(isProperFraction(3, 2)).toEqual(false);
});

test(`should return true when denominator is negative`, () => {
  expect(isProperFraction(1, -2)).toEqual(true);
});

test(`should return true when nominator is negative`, () => {
  expect(isProperFraction(-2, 4)).toEqual(true);
});

test(`should return true with both negatives where numerator is smaller`, () => {
  expect(isProperFraction(-2, -4)).toEqual(true);
});

test(`should return false with both negatives where numerator is bigger`, () => {
  expect(isProperFraction(-3, -2)).toEqual(false);
});

test(`should return false with equal values`, () => {
  expect(isProperFraction(2, 2)).toEqual(false);
});

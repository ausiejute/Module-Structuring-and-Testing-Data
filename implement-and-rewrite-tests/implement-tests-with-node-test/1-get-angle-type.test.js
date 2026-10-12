import assert from "node:assert";
import test from "node:test";

import { getAngleType } from "../implement/1-get-angle-type.js";

// TODO: Write tests to cover all cases, including boundary and invalid cases.
// Example: Identify Right Angles

test("Classifies right angles", () => {
  const right = getAngleType(90);
  assert.equal(right, "Right angle");
});

test("Classifies acute angles", () => {
  const acute = getAngleType(45);
  assert.equal(acute, "Acute angle");
});

test("Classifies obtuse angles", () => {
  const obtuse = getAngleType(120);
  assert.equal(obtuse, "Obtuse angle");
});

test("Classifies straight angles", () => {
  const straight = getAngleType(180);
  assert.equal(straight, "Straight angle");
});

test("Classifies reflex angles", () => {
  const reflex = getAngleType(270);
  assert.equal(reflex, "Reflex angle");
});

test("Rejects out-of-range angles - too large", () => {
  const tooLarge = getAngleType(400);
  assert.equal(tooLarge, "Out of range");
});

test("Rejects out-of-range angles - negative", () => {
  const negative = getAngleType(-50);
  assert.equal(negative, "Out of range");
});
//
test("Rejects invalid inputs correctly - empty string", () => {
  const emptyString = getAngleType("");
  assert.equal(emptyString, "Invalid Input");
});

test("Rejects invalid inputs correctly - NaN value", () => {
  const nanValue = getAngleType(NaN);
  assert.equal(nanValue, "Invalid Input");
});

test("Rejects invalid inputs correctly - undefined ", () => {
  const undefinedValue = getAngleType(undefined);
  assert.equal(undefinedValue, "Invalid Input");
});

test("Rejects invalid inputs correctly - null ", () => {
  const nullValue = getAngleType(null);
  assert.equal(nullValue, "Invalid Input");
});

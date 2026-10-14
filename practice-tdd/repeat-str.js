// Your implementation of this function must *not* call String.prototype.repeat (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat).
// The goal is to re-implement that function, not to use it.#
export function repeatStr(str, count) {
  if (Number.isInteger(count) && count < 0) {
    throw new Error(`Invalid input`);
  }
  if (count === 0) {
    return "";
  }

  if (Number.isInteger(count) && count > 0) {
    let result = "";
    for (let i = 0; i < count; i++) {
      result += str;
    }
    return result;
  }
}

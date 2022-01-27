const _ = {
  clamp(number, lower, upper) {
    if (number > upper) {
      return upper;
    }
    if (number < lower) {
      return lower;
    } else {
      return number;
    }
  },
  inRange(number, end, start) {
    let temp = 0
    if (start > end || end === undefined) {
      temp = end;
      end = start;
      start = temp;
    }
    if (number < start) {
      return false;
    }
    if (number >= end) {
      return false;
    } else {
      return true;
    }
  },
};

// Do not write or modify code below this line.
module.exports = _;

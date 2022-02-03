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
    let temp = 0;
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
  words(string) {
    return string.split(" ");
  },
  pad(string, length) {
    if (string.length >= length) {
      return string;
    }
    let startPaddingLength = Math.floor((length - string.length) / 2);
    let endPaddingLength = length - string.length - startPaddingLength;
    let paddedString =
      " ".repeat(startPaddingLength) + string + " ".repeat(endPaddingLength);
    return paddedString;
  },
  has(object, key) {
    if (key === undefined) {
      return false;
    }
    let hasValue = Object.keys(object).includes(key);
    return hasValue;
  },
  invert(object) {
    let invertedObject = {};
    for (const key in object) {
      invertedObject[object[key]] = key
    }
    return invertedObject
  },
  findKey(object, predicate){
    for(const key in object){
      let value = object[key]
      let predicateReturnValue = predicate(value)
      if(predicateReturnValue){
        return key
      }
    }
    return undefined
  },
  drop(array, n){
    if(n === undefined){
      n = 1
    }
    let droppedArray = array.slice(n, array.length)
    return droppedArray
  },
  dropWhile(array, predicate){
    const cb = (element, index) => {
      return !predicate(element,index,array);
    };
    let dropNumber = array.findIndex(cb)
    let droppedArray = this.drop(array, dropNumber)
    return droppedArray;
  },
  chunk(array, size=1){
    let arrayChunks = [];
    for(let i = 0; i < array.length; i += size){
      let arrayChunk= array.slice(i, i+size)
      arrayChunks.push(arrayChunk)
    }
    return arrayChunks
  }
};

// Do not write or modify code below this line.
module.exports = _;

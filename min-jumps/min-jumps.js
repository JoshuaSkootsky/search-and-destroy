"use strict";

// Complete this algo
const minJumps = arr => {
  const result = [0];
  let picked = arr[0];
  while (result.length < arr.length) {
    let count = result[result.length - 1];
    for (let i = 0; i < picked; i++) {
      result.push(count);
    }
    const idx = result.length - 1;
    let currMax = arr[idx];
    for (let i = 0; i > 0 - picked; i--) {
      const elem = arr[idx + i];
      if (elem + i > currMax) {
        currMax = elem + i;
      }
    }
    picked = currMax;
  }
  return result[result.length - 1];
};

module.exports = minJumps;

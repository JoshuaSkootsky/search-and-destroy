'use strict';
// Dynamic Programming solution to min jumps
const minJumps = arr => {
  const result = [0];
  // pick first element of array
  let picked = arr[0];
  // build up solution array, result
  // which is like a lookup table for minimum jumps
  // to reach each corresponding element in arr
  while (result.length < arr.length) {
    let count = 1 + result[result.length - 1];
    for (let i = 0; i < picked; i++) {
      result.push(count);
    }
    // pick index at end of result array, being built up
    const idx = result.length - 1;
    // currMax is current value of array
    let currMax = arr[idx];
    // look back picked number of times for max number of jumps
    for (let i = 0; i > 0 - picked; i--) {
      const elem = arr[idx + i];
      if (elem + i > currMax) {
        currMax = elem + i;
      }
    }
    // assign max to new value of pick going forward into next
    // iteration of the while loop
    picked = currMax;
  }
  // return the last value in the solution array
  return result[result.length - 1];
};

module.exports = minJumps;

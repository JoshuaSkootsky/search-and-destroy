'use strict';

// Complete this algo
const binarySearch = (array, target) => {
  let left = 0;
  let right = array.length - 1;
  let mid = ((left + right) / 2) | 0;
  let midVal = array[mid];

  while (left <= right) {
    if (midVal === target) return true;
    if (midVal < target) {
      left = mid + 1;
      mid = ((left + right) / 2) | 0;
      midVal = array[mid];
    }
    if (midVal > target) {
      right = mid - 1;
      mid = ((left + right) / 2) | 0;
      midVal = array[mid];
    }
  }
  // console.log('value not found!');
  return false;
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;

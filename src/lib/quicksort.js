'use strict';

function basicQuickSort() {
  // set up a sample array of integers
  const array = [25, 50, 34, 44, 21, 18, 12, 4, 58, 38];
  // if the length of our array is less than 2 integers, return the array; nothing more is needed
  if (array.length < 2) {
    return array;
  }
  // define variables for the function; pivot is the integer we will determine that will split the array into two subarrays
  const pivot = array[0];
  const lesser = [];
  const greater = [];
  // iterate through the length of the array seeking the number which is the pivot point
  // for integers less than the pivot number, push into the lesser subarray
  // for integers greater than the pivot number, push into the greater subarray
  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      lesser.push(array[i]);
    }
    greater.push(array[i]);
  }
  // call the function and concatenate the greater integers to the lesser integers to return the sorted array
  return basicQuickSort(lesser).concat(pivot, basicQuickSort(greater));
}

console.log(basicQuickSort(array.slice())); // eslint-disable-line

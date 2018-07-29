
// sample array of integers to sort
const array = [25, 50, 34, 44, 21, 18, 12, 4, 58, 38];

// gaps are the sequence used to perform the sort; this is Marcel Ciura's experimental sequence, developed in 2001.
// we do a gapped insertion sort drill down until we get to the gap of 1.
const gaps = [701, 301, 132, 57, 23, 10, 4, 1];

// this is our function. It takes in one argument, which is an array that we pass in.
function shellSort() {
  // This begins the work of sorting using our gap sequence. We continue adding one more element until the array is gap sorted.
  for (let g = 0; g < gaps.length; g++) {
    const gap = gaps[g];
    
    for (let i = gap; i < array.length; i++) {
      // we iterate through the length of our array, adding array[i] to the already sorted array, saving array[i] into a temp variable
      // making a new space at position i
      const temp = array[i];

      // shift the earlier gap-sorted elements up until the correct position for array[i] has been found
      for (let j = i; j >= gap && array[j - gap] > temp; j -= gap) {
        array[j] = array[j - gap];
      }
      // put temp in the correct location
      array[j] = temp;
    }
  }
  // return the sorted array
  return array;
}
// call the function
shellSort();
// console log the newly sorted array
console.log(array); // eslint-disable-line
// should return [4, 12, 18, 21, 25, 34, 38, 44, 50, 58]  

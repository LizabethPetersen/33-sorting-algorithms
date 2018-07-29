// set up a sample array of integers
const array = [25, 50, 34, 44, 21, 18, 12, 4, 58, 38];

// this is our function to sort a given array
function mergeSortArray() {
  // this checks the length of the array to ensure we have more than 1 element in the array
  if (array.length < 2) {
    return array;
  } 
  // this sets midpoint values and creates new arrays for the left and right (lower and higher) integers in the initial array
  const midpoint = Math.floor(array.length / 2);
  const left = array.slice(0, midpoint);
  const right = array.slice(midpoint);

  // this returns the initially sorted array
  return array(mergeSortArray(left), mergeSortArray(right));
}
// this continues the logic by comparing the left and right values and pushing values into the next left or right side of the array
function mergeSort(left, right) {
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      array.push(left.shift());
    }
    array.push(right.shift());
  }
  // the below we "stitch" the left and right side values together into the array
  return array.concat(left.slice(), right.slice());
}
// calling the function and console logging the ordered version of the initial array
mergeSort();
console.log(mergeSortArray.slice()); // eslint-disable-line

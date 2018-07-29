# LAB 34 SORTING ALGORITHMS

[![Build Status](https://travis-ci.org/LizabethPetersen/33-sorting-algorithms.svg?branch=master)](https://travis-ci.org/LizabethPetersen/33-sorting-algorithms)

## DOCUMENTATION
I chose these particular sorting algorithms because they either intrigued me to dig in further or because we did not look at them in class.

## Primary Source
http://blog.benoitvallon.com/category/sorting-algorithms-in-javascript/

### Shellsort Algorithm
http://blog.benoitvallon.com/sorting-algorithms-in-javascript/the-shellsort-algorithm/
https://en.wikipedia.org/wiki/Shellsort
https://hbfs.wordpress.com/2011/03/01/shellsort/

Based on the name of this algorithm, I wanted to see if this had anything to do with the classic "shell game". Instead, I learned it is named after Donald Shell, who published this sorting method in 1959. By definition, this is more of a generalized way to do an insertion sort or bubble sort. 

Shellsort is an in-place sorting method that replaces values based on gaps in the sequence. Gaps are what determine how the sort will be determined. The math on these sequences are more than I can grasp, having not gone beyond algebra in college (and basic geometry in high school, a long time ago). Shellsort is an unstable sorting method, and one that performs best when data is already somewhat sorted. 

###### Time Complexity: 
  - Worst case: O(n^2). Best of worse case: O(n log^2 n). Dependent upon the gap sequence.
  - Best case: O(n log n)

###### Space Complexity: 
  - Worst case: O(n). total (I am unsure why) 
  - Best case: O(1). In-place sorting method


### Quicksort Algorithm
http://blog.benoitvallon.com/sorting-algorithms-in-javascript/the-quicksort-algorithm/
https://en.wikipedia.org/wiki/Quicksort

Quicksort seems straightforward: it is a "divide and conquer" method for sorting. It takes the elements in an array and divides them into smallest and largest numbers (similar to how a binary search tree utilizes methods for sorting based on what is contained in the left and right nodes). This is not a stable sort form. It is, however, one of the faster implementations in time and space complexity. We can use recursion methods for implementing quicksort. 

Fun fact: **qsort** in Java is a reference to quicksort, because it is a subroutine in the C language library.

###### Time Complexity:
- Worst case: O(n^2)
- Best case: O(n)

###### Space Complexity:
- Worst case: O(n)
- Best case:  O(log n)

### Merge Sort
http://blog.benoitvallon.com/sorting-algorithms-in-javascript/the-merge-sort-algorithm/
https://medium.com/basecs/making-sense-of-merge-sort-part-1-49649a143478
https://en.wikipedia.org/wiki/Merge_sort

Merge sorts are another form of divide and conquer sorting. They can be implemented recursively, using a top down or bottom up method. There are variants on mergesort which attempt to reduce the space complexity; we will not be working with these today.

###### Time Complexity:
- Typical/average case: O(n log n)

###### Space Complexity:
- Worst case: O(n) with O(n) auxilliary
- Best case: O(n) with O(1) using auxilliary linked lists

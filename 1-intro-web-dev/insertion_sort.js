/*
  Insertion sort!
  
  Be sure to call your function insertionSort.
  
  The idea here is that the beginning of your list is sorted and the everything else is assumed to be an unsorted mess.
  The outer loop goes over the whole list, the index of which signifies where the "sorted" part of the list is. The inner
  loop goes over the sorted part of the list and inserts it into the correct position in the array.
  
  Like bubble sort, there's a visualization mechanism available to you. Just call snapshot(myArray) at the beginning of
  your inner loop and it should handle the rest for you!
  
  And you put xdescribe instead of describe if you want to suspend running the unit tests.  
*/

var arr = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
var count = 0;

var displayArray = arr => {
  console.log(arr.toString());
};

var insertionSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      displayArray(arr);
      if (arr[i] < arr[j]) {
        const spliced = arr.splice(i, 1);
        arr.splice(j, 0, spliced[0]);
      }
      count++;
    }
  }
  displayArray(arr);
};

console.log('insertion_sort');
insertionSort(arr);
console.log('count', count);

/*
  Insertion sort!
  
  The idea here is that the beginning of your list is sorted and the everything else is assumed to be an unsorted mess.
  The outer loop goes over the whole list, the index of which signifies where the "sorted" part of the list is. The inner
  loop goes over the sorted part of the list and inserts it into the correct position in the array.
  
*/

var arr = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
var counter = 0;

var displayArray = arr => {
  console.log(arr.toString());
};

var bubbleSort = arr => {
  do {
    var swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;

        swapped = true;
      }
      counter++;
      displayArray(arr);
    }
  } while (swapped);
};

console.log('bubble_sort');
bubbleSort(arr);
console.log('counter', counter);

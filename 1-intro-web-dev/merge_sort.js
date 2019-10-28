// /*
//   Write a function that performs mergesort
//   Name the function mergeSort
//   It will take in a array of numbers and return a sorted array numbers

//   To read the approach, refer to the class materials at
//   https://btholt.github.io/four-semesters-of-cs/

//   There is no visualization mechanism for this algorithm. Use your own
//   preferred method of introspection like console.log().
// */

var arr = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];

var count = 0;

var displayArray = arr => {
  console.log(arr.toString());
};

const mergeSort = arr => {
  if (arr.length < 2) {
    return arr;
  }
  const length = arr.length;
  const middle = Math.floor(length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return stitch(mergeSort(left), mergeSort(right));
};

const stitch = (left, right) => {
  const results = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
    count++;
  }

  return results.concat(left, right);
};

console.log('merge_sort');
displayArray(mergeSort(arr));
console.log('count', count);

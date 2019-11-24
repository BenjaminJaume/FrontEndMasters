var increment = n => n + 1;

var square = n => n * n;

var doTheMathDoIDontHaveTo = (n, callback) => callback(n);

console.log(doTheMathDoIDontHaveTo(5, square));
console.log(doTheMathDoIDontHaveTo(4, increment));

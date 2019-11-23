const _ = {};

// Teacher's answer
// _.from = pseudoArray => {
//   return Array.prototype.slice.call(pseudoArray);
// };

// My answer
_.from = pseudoArray => {
  const argumentsArray = [];
  for (let item in pseudoArray) {
    argumentsArray.push(pseudoArray[item]);
  }
  return argumentsArray;
};

const displayArguments = function() {
  console.log(_.from(arguments).join(" "));
};

displayArguments("This", "is", "not", "a", "drill");

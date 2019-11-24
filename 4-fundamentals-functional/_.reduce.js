const _ = {};

const collection = [2, 3, 5];

_.reduce = (collection, callback, initial) => {
  let result = initial;

  for (let i = 0; i < collection.length; i++) {
    if (i === 0 && !result) {
      result = collection[0];
    } else {
      result = callback(result, collection[i]);
    }
  }
  return result;
};

const reduce = _.reduce(collection, (a, b) => a + b, 5);
const reduce2 = _.reduce(collection, (c, d) => c + d);

console.log(reduce);
console.log(reduce2);

const _ = {};

_.each = function(list, callback) {
  // check if it's an array or an object
  if (Array.isArray(list)) {
    // loop through the list
    for (let i = 0; i < list.length; i++) {
      // call the callback with a list item
      callback(list[i], i, list);
    }
  } else if (typeof list === "object") {
    // loop through the list
    for (let key in list) {
      // call the callback with a list item
      callback(list[key], key, list);
    }
  } else {
    console.log("Wrong type");
  }
};

_.each(["Martin", "Salma", "Beranger"], function(name, i, list) {
  if (list[i + 1]) {
    console.log(`${name} is younger than ${list[i + 1]}`);
  } else {
    console.log(`${name} is the oldest`);
  }
});

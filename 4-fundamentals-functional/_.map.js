function createSuspectObj(name) {
  return {
    name: name,
    color: name.split(" ")[1],
    speak() {
      console.log(`My name is ${name}`);
    }
  };
}

var suspects = ["Miss Scarlet", "Colonel Mustard", "Mr. White", "Dr Magenta"];

const _ = {};

_.map = function(list, callback) {
  // check if it's an array or an object
  if (Array.isArray(list)) {
    // Create an empty array to store
    var storage = [];
    // Looping
    for (let i = 0; i < list.length; i++) {
      // Callback(element) & put it to our array
      storage.push(callback(list[i], i, list));
    }
    // Return []
    return storage;
  } else if (typeof list === "object") {
    // something
  } else {
    console.log("Wrong type");
  }
};

var suspectsList = _.map(suspects, function(suspect) {
  return createSuspectObj(suspect);
});

suspectsList;

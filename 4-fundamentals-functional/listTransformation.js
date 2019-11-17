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

// forEach method

// var suspectsList = [];
// suspects.forEach(suspect => {
//   suspectsList.push(createSuspectObj(suspect));
// });

// map method

var suspectsList = suspects.map(suspect => {
  return createSuspectObj(suspect);
});

suspectsList.forEach(suspect => {
  suspect.speak();
});

// suspectsList[2].speak();

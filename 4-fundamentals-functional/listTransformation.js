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

var suspectsList = [];

suspects.forEach(suspect => {
  suspectsList.push(createSuspectObj(suspect));
});

suspectsList[2].speak();

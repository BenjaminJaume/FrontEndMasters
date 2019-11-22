const _ = {};

const videoData = [
  {
    name: "Miss Scarlet",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false }
    ]
  },
  {
    name: "Mrs. White",
    present: false,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false }
    ]
  },
  {
    name: "Reverend Green",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false }
    ]
  },
  {
    name: "Rusty",
    present: false,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false }
    ]
  },
  {
    name: "Colonel Mustard",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false }
    ]
  },
  {
    name: "Professor Plum",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false }
    ]
  }
];

_.filter = function(array, callback) {
  let storage = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) storage.push(array[i]);
  }
  return storage;
};

_.map = function(array, callback) {
  var storage = [];
  for (let i = 0; i < array.length; i++) {
    storage.push(callback(array[i], i, array));
  }
  return storage;
};

const presentSuspectsObj = _.filter(videoData, function(suspectObj) {
  return suspectObj.present;
});

const presentSuspectsList = _.map(presentSuspectsObj, function(suspectObj) {
  return suspectObj.name;
});

console.log(presentSuspectsList);

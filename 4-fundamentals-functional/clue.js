var game = {};

game.murderer = "?";

game["weapons"] = [
  { type: "lasers", location: "lab" },
  { type: "angry cats", location: "carpet" },
  { type: "dish soap", location: "sink" },
  { type: "blossom", location: "flower pot" }
];

game.character = [];
// game.character[0] = "Mrs Scarlet";
game.character.push("Mr Green");

game;

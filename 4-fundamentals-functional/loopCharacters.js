const game = {
  suspects: [
    {
      name: "Rusty",
      color: "orange",
      guilty: false
    },
    {
      name: "Mrs Scarlet",
      color: "red",
      guilty: false
    }
  ]
};

const guilty = "Mrs Scarlet";

function displayCharacters(suspects) {
  suspects.forEach(character => {
    console.log(`Name: ${character.name}, color: ${character.color}`);
  });
}

function findGuilty(suspects) {
  suspects.forEach(character => {
    if (character.name === guilty) {
      character.guilty = true;
    }
  });
}

function displayGuilty(suspects) {
  suspects.forEach(character => {
    if (character.guilty === true) {
      console.log(`${character.name} is guilty!`);
    }
  });
}

function getColor(suspects) {
  let colors = [];
  suspects.forEach(character => {
    colors.push(character.color);
  });
  colors.forEach(color => {
    console.log(color);
  });
}

// displayCharacters(game.suspects);
// findGuilty(game.suspects);
// displayGuilty(game.suspects);
getColor(game.suspects);

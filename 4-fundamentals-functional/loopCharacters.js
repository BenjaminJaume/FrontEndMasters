const game = {
  suspects: [
    {
      name: "Rusty",
      color: "orange"
    },
    {
      name: "Miss Scarlet",
      color: "red"
    }
  ]
};

function getSuspects({ suspects }) {
  suspects.forEach(character => {
    // console.log(`Name: ${character.name}, color: ${character.color}`);
    console.log(character);
  });
}

getSuspects(game);

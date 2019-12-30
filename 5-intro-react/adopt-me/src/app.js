const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Baboon ",
      animal: "dog",
      breed: "Freud"
    }),
    React.createElement(Pet, {
      name: "Bertrand ",
      animal: "magpie",
      breed: "millenial"
    }),
    React.createElement(Pet, {
      name: "Beatrice ",
      animal: "parrot",
      breed: "furet"
    })
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));

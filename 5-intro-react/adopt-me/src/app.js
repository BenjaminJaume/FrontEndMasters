import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

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

render(React.createElement(App), document.getElementById("root"));

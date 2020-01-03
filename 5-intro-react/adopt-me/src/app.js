import React from "react";
import { render } from "react-dom";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      {/* <Pet name="Baboon" animal="cat" breed="Freud" />
      <Pet name="Bertrand" animal="magpie" breed="millenial" />
      <Pet name="Beatrice" animal="parrot" breed="furet" /> */}

      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));

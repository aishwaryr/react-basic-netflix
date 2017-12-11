import React from "react";
import { render } from "react-dom";

const TvShow = function(props) {
  //   return ce("p", { style: { color: props.color } }, props.name);
  const style = { color: props.color };
  return (
    <div>
      <h1 style={style}>{props.name}</h1>
    </div>
  );
};

const MyFirstComponent = function() {
  return (
    <div id="my-first-component">
      <TvShow name="Game of Thrones" color="YellowGreen" />
      <TvShow name="Rick and Morty" color="GreenYellow" />
      <TvShow name="Mr Robot" color="peru" />
      <TvShow name="Stranger Things" color="LimeGreen" />
    </div>
  );
};

render(<MyFirstComponent />, document.getElementById("app"));

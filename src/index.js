import React from "react";
import ReactDOM from "react-dom";

let headerStyling = {
  fontFamily: "sans-serif",
  color: "green",
  fontStyle: "italic",
  fontStretch: "expanded"
};

headerStyling.color = "lime";

ReactDOM.render(
  <h1 style={headerStyling}>Hello World!</h1>,
  document.getElementById("root")
);

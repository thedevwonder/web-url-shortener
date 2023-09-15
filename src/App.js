import "semantic-ui-css/semantic.min.css";
import "./App.css";

import React from "react";
import { UrlShortener } from "./page";

function App() {
  return (
    <div
      style={{
        width: "100%",
        height: "1000px",
        backgroundColor: "#161b22",
        position: "fixed",
      }}
    >
      <UrlShortener />
    </div>
  );
}

export default App;
//

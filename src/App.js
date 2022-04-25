import React from "react";
import { GlobalStyled } from "./Globalstyle";
import AboutUS from "./pages/AboutUs";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <GlobalStyled />
      <AboutUS />
      <Helmet>
        <title>Portfilo</title>
      </Helmet>
    </div>
  );
}

export default App;

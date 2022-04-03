import React from "react";
import "./App.css";
import Carousel from "./Components/Carousel/Carousel";
import CardOne from "./Components/CardOne/CardOne";
import CardTwo from "./Components/CardTwo/CardTwo";
import CardThree from "./Components/CardThree/CardThree";
import CardFour from "./Components/CardFour/CardFour";
import CardFive from "./Components/CardFive/CardFive";

function App() {
  return (
    <div className="App">
      <Carousel
        cards={[
          <CardOne />,
          <CardTwo />,
          <CardThree />,
          <CardFour />,
          <CardFive />,
        ]}
      />
    </div>
  );
}

export default App;

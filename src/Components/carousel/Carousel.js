import React from "react";
import "./Carousel.css";
import CardOne from "../CardOne/CardOne";
import CardTwo from "../CardTwo/CardTwo";
import CardThree from "../CardThree/CardThree";
import CardFour from "../CardFour/CardFour";
import CardFive from "../CardFive/CardFive";
import ProgressBar from "../ProgressBar/ProgressBar";

function Carousel() {
  return (
    <div className="carousel">
      <CardOne />
      <CardTwo />
      <CardThree />
      <CardFour />
      <CardFive />
      <ProgressBar />
    </div>
  );
}

export default Carousel;

import React from "react";
import "./carousel.css";
import Card from "../card/Card";
import ProgressBar from "../progress-bar/ProgressBar";

function Carousel() {
  return (
    <div className="carousel">
      <Card />
      <ProgressBar />
    </div>
  );
}

export default Carousel;

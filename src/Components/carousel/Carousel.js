import React, { useEffect, useState } from "react";
import "./Carousel.css";
import CardOne from "../CardOne/CardOne";
import CardTwo from "../CardTwo/CardTwo";
import CardThree from "../CardThree/CardThree";
import CardFour from "../CardFour/CardFour";
import CardFive from "../CardFive/CardFive";
import ProgressBar from "../ProgressBar/ProgressBar";

const cards = [
  <CardOne />,
  <CardTwo />,
  <CardThree />,
  <CardFour />,
  <CardFive />,
];

function Carousel() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
    const nextIndex = (currentCardIndex + 1) % cards.length;
    const id = setTimeout(() => setCurrentCardIndex(nextIndex), 3000);
    return () => clearTimeout(id);
  }, [currentCardIndex]);

  return (
    <div className="carousel">
      <>{cards[currentCardIndex]}</>
      <ProgressBar />
    </div>
  );
}

export default Carousel;

import React, { useEffect, useState } from "react";
import "./Carousel.css";

import ProgressBar from "../ProgressBar/ProgressBar";

function Carousel({ cards }) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
    const nextIndex = (currentCardIndex + 1) % cards.length;
    const id = setTimeout(() => setCurrentCardIndex(nextIndex), 3000);
    return () => clearTimeout(id);
  }, [currentCardIndex]);

  return (
    <div className="carousel">
      <div
        className="card-container"
        style={{ "--offset": currentCardIndex * -100 + "%" }}
      >
        {cards.map((card) => {
          return <div className="card">{card}</div>;
        })}
      </div>
      <ProgressBar />
    </div>
  );
}

export default Carousel;

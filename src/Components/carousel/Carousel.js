import React, { useEffect, useState } from "react";
import "./Carousel.css";

function Carousel({ cards }) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
    const nextIndex = (currentCardIndex + 1) % cards.length;
    const id = setTimeout(() => setCurrentCardIndex(nextIndex), 3000);
    return () => clearTimeout(id);
  }, [currentCardIndex, cards.length]);

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
      <div className="progress-bar">
        {cards.map((card, index) => {
          return (
            <button
              className="progress-button"
              onClick={() => {
                setCurrentCardIndex(index);
              }}
            ></button>
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;

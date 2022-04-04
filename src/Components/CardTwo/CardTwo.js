import React from "react";
import "./CardTwo.css";
import image3 from "../../images/image3.svg";
import image4 from "../../images/image4.svg";

function CardTwo() {
  return (
    <>
      <img className="speech-marks" src={image3} alt="Closing speech marks" />
      <h2 className="statement">
        An experience that makes us feel like we're
        <br />
        covered in maple syrup -{" "}
        <span className="pink-text">It's a good thing</span>.
      </h2>
      <img
        className="image4"
        src={image4}
        alt="A stack of pancakes with syrup and butter"
      />
      <span className="image4-title">The whole team @</span>
      <span className="image4-subtext">The Pancake Collective&trade;</span>
    </>
  );
}

export default CardTwo;

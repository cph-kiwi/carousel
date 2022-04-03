import React from "react";
import "./CardFour.css";
import image3 from "../../images/image3.svg";
import image4 from "../../images/image4.svg";

function CardFour() {
  return (
    <div className="card">
      <img className="speech-marks" src={image3} alt="Closing speech marks" />
      <h2 className="statement">
        Computers themselves, and software yet to be
        <br />
        developed, will revolutionize the{" "}
        <span className="pink-text">way we learn</span>.
      </h2>
      <img
        className="image8"
        src={image4}
        alt="A stack of pancakes with syrup and butter"
      />
      <span className="image8-title">Steve Jobs</span>
      <span className="image8-subtext">Founder of Apple</span>
    </div>
  );
}

export default CardFour;

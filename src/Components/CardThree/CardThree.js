import React from "react";
import "./CardThree.css";
import image1 from "../../images/image1.svg";
import image2 from "../../images/image2.svg";

function CardThree() {
  return (
    <>
      <img className="speech-marks" src={image1} alt="Closing speech marks" />
      <h2 className="statement">
        Software is a great{" "}
        <span className="green-text" style={{ fontStyle: "italic" }}>
          combination
        </span>
        <br />
        between artistry and engineering.
      </h2>
      <img className="image6" src={image2} alt="Mr Face emoji" />
      <span className="image6-title">Bill Gates</span>
      <span className="image6-subtext">Formerly of Microsoft</span>
    </>
  );
}

export default CardThree;

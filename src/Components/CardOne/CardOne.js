import React from "react";
import "./CardOne.css";
import image1 from "../../images/image1.svg";
import image2 from "../../images/image2.svg";

function CardOne() {
  return (
    <div className="card">
      <img className="speech-marks" src={image1} alt="Closing speech marks" />
      <h2 className="statement">
        This piece of software is{" "}
        <span className="green-text" style={{ fontStyle: "italic" }}>
          the shit
        </span>
        ,
        <br />
        I've never tried anything like it.
      </h2>
      <img className="image2" src={image2} alt="Mr Face emoji" />
      <span className="image2-title">Mr. Face</span>
      <span className="image2-subtext">Karma Guru @ Face Co&trade;</span>
    </div>
  );
}

export default CardOne;

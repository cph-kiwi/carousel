import React from "react";
import "./CardFive.css";
import image1 from "../../images/image1.svg";
import image2 from "../../images/image2.svg";

function CardFive() {
  return (
    <div className="card">
      <img className="speech-marks" src={image1} alt="Closing speech marks" />
      <h2 className="statement">
        It has become appallingly obvious that our
        <br />
        technology has{" "}
        <span className="green-text" style={{ fontStyle: "italic" }}>
          exceeded our humanity
        </span>
        .
      </h2>
      <img className="image10" src={image2} alt="Mr Face emoji" />
      <span className="image10-title">Albert Einstein</span>
      <span className="image10-subtext">Scientist</span>
    </div>
  );
}

export default CardFive;

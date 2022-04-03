import React from "react";
import "./ProgressBar.css";

function ProgressBar() {
  return (
    <div className="container">
      <div className="progress-bar">
        <button id="bar-1" className="bar"></button>
        <button id="bar-2" className="bar"></button>
        <button id="bar-3" className="bar"></button>
        <button id="bar-4" className="bar"></button>
        <button id="bar-5" className="bar"></button>
      </div>
    </div>
  );
}

export default ProgressBar;

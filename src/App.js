import image1 from "./image1.svg";
import image2 from "./image2.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
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
      <div className="progress-bar"></div>
    </div>
  );
}

export default App;

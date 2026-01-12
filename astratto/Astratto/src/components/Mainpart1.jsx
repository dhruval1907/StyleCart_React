import React from "react";
import "../styles/mainpart1.scss";
import video from "../assets/hero.mp4";
const Mainpart1 = () => {
  return (
    <div className="mainpart1">
      <div className="inside-main">
        <div className="inside-part1">
          <video src={video} loop autoPlay muted></video>
        </div>
        <div className="inside-part2">
          <h3>Igniting  the spark of Inspiration</h3>
          <h1>
            Unleash Your <br /> Brand With Our{" "}
          </h1>
          <div className="text">
            <span className="span"> Magico</span>
            <h2>Design</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainpart1;

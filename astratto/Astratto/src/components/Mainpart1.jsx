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

        </div>
      </div>
    </div>
  );
};

export default Mainpart1;

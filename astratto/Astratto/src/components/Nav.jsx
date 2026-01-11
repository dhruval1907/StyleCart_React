import React from "react";
import "../styles/nav.scss";
import { LiaStarOfLifeSolid } from "react-icons/lia";

import { MdOutlineArrowOutward } from "react-icons/md";

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav2">
        <div className="nav-part">
          <a href="">service</a>
          <a href="">work</a>
          <a href="">about</a>
        </div>
        <div className="nav-part1">
          <div className="icon-main">
            <LiaStarOfLifeSolid className="icon" />
          </div>
          <h1>Astratto</h1>
        </div>
        <div className="nav-part2">
          <h4>Careers</h4>
          <a href="">
            Contact us 
          <MdOutlineArrowOutward className="icon"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;

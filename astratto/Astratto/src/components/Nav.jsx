import React from "react";
import "../styles/nav.scss";
import { FaStarOfLife } from "react-icons/fa6";
import { MdOutlineArrowOutward } from "react-icons/md";

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav2">
        <div className="nav-part1">
          <div className="icon-main">
            <FaStarOfLife className="icon" />
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

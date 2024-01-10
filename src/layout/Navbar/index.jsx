import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss"

function Navbar() {
  return (
    <div className="navigation">
      <div className="navbar">
        <div className="left">
          <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/logo/logo.png.webp" />
        </div>
        <div className="right">
          <ul className="pages">
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"addPages"}>AddPages</NavLink></li>
            <li><NavLink>About  </NavLink></li>
            <li><NavLink>Blog</NavLink></li>
            <li><NavLink>Contact</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

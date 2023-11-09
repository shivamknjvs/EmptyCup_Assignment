import React from "react";
import "./Navbar.css";
import logo from "../public/C_logo.svg";
import man from "../public/Man.png";
import arrow from "../public/arrow.png"
import operator from "../public/Operator.png"
import kebab from "../public/kebabMenu.svg"


const  Navbar = () => {
  return (
    <div className="main">
<div className="box">
  <div className="nav-bar">

    <div className="Logo">  
      <img className="logo-small" alt="Logo small" src={logo} />
      <h1 className="text">EmptyCup</h1>
    </div>

    <div className="menus">
      <div className="div">HOME</div>
      <div className="div">OUR WORKS</div>
      <div className="div">PRICING</div>
      <div className="div">ABOUT US</div>
    </div>
    <div className="user-contact">
    <div className="user">
      <img className="man" alt="Man" src={man} />
      <img className="arrow-down-sign-to" alt="Arrow down sign to" src={arrow} />
      </div>
      <img className="operator" alt="Operator" src={operator} />
    </div>
      <img className="kebab" alt="Operator" src={kebab} />
    </div>
  </div>
</div>    
// </div>
  );
};
export default Navbar;
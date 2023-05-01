import React from "react";
import Logo from "../assets/Logo.png";
import Search from "../assets/Vector (1).png";
import L1 from "../assets/dashbord (1).png";
import L2 from "../assets/dashbord (2).png";
import L3 from "../assets/dashbord (3).png";
import L4 from "../assets/Line 50.png";
import L5 from "../assets/message-circle.png";
import L6 from "../assets/Group 1.png";
import L7 from "../assets/profile pic.png";
import L8 from "../assets/arrow-down-fill.png";
import "./nav.css";
function Nav() {
  return (
    <div>
      <div className="nav">
        <img className="logo" src={Logo} alt="logo" />
        <div className="search">
          <input className="input" type="text" placeholder="Search Jobs..." />
          <img className="search1" src={Search} alt="search" />
        </div>
        <div className="label">
          <img src={L1} alt="l1" />
          <p className="dash">Dashboard</p>
        </div>
        <div className="label">
          <img src={L2} alt="l2" />
          <p>Find Jobs</p>
        </div>
        <div className="label">
          <img src={L3} alt="l3" />
          <p>Applied Jobs</p>
        </div>
        <img src={L4} alt="l4" />
        <img src={L5} alt="l5" />
        <img src={L6} alt="l6" />
        <div className="profile">
             <img src={L7} alt="l7" /> 
             <p>Nitesh</p>
             <img src={L8} alt="l8" />
              </div>
      </div>
    </div>
  );
}

export default Nav;

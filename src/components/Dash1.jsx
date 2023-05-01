import React from "react";
import "./Dash1.css";
import D1 from "../assets/Company image(by employer).png"
import D2 from "../assets/View Application.png"

function Dash1() {
  return (
    <div className="dash1">
      <h1>Dashboard</h1>
      <div className="das-main">
        <div className="das">
            <div className="das-up">
                <h5>Applied Jobs</h5>
                <p>View All</p>
            </div>
            <div className="das-mid">
                <div className="das-mid1">
                    <img src={D1} alt="d1" />
                    <div className="das-mid2">
                        <p>Application Engineer</p>
                        <p>Starbucks Corporation</p>
                        <button>Assessment Phase</button>
                    </div>
                    <img src={D2} alt="d2" />
                </div>
            </div>
        </div>
        <div className="das1"></div>
      </div>
    </div>
  );
}

export default Dash1;

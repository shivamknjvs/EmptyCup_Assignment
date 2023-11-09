import React from "react";
import "./UserCard.css";
import Star1 from "../public/Star1.png";
import Star2 from "../public/Star2.png";
import Star3 from "../public/Star3.png";
import Star4 from "../public/Star4.png";
import Star5 from "../public/Star5.png";
import line from '../public/Line.png'
import Detail from '../public/Detail-Arrow.svg'
import Hide from '../public/Hide-Eye.svg'
import Shortlist from '../public/Shortlistc.svg'
import Report from '../public/Report.svg'


const UserCard = (props) => {
  return (
    <div>
      <div className="User-box">
        <div className="rectangle" style={props.style}>
          <div className="Left-Side-Element">
            <div className="Epicdesign">
              <div className="Pro-heading">{props.cont}</div>
            <div className="Stars">
              <img src={Star1} alt="Star" />
              <img src={Star2} alt="Star" />
              <img src={Star3} alt="Star" />
              <img src={Star4} alt="Star" />
              <img src={Star5} alt="Star" />
            </div>
              <p className="para">
                Passionate team of 4 designers working out of Bangalore with an experience of 4 years.
              </p>
            </div>
            <div className="Numbers">
              <p className="FiftySeven">
                <span className="f57">{props.valp}</span>
                <span className="Proj">Projects</span>
              </p>
              <p className="eight">
                <span className="e8">{props.valp}</span>
                <span className="years">Years</span>
              </p>
              <p className="dollar">
                <span className="text-wrapper">$$</span>
                <span className="price">Price</span>
              </p>
            </div>
            <div className="mob-number">
              <div className="text-wrapper-2">+91 - 984532853</div>
              <div className="text-wrapper-3">+91 - 984532854</div>
            </div>
          </div>
          <div className="Right-Side-Element">
          <div className="Line-main">
            <img className="line" alt="Line" src={line} />
          </div>
          <div className="User-frame">
            <div className="User-Detail">
                <img className="arrow-right-short" alt="Arrow right short" src={Detail} />
                <div className="Detail">Details</div>
            </div>
            <div className="User-hide">
                <img className="eye-slash" alt="Eye slash" src={Hide} />
                <div className="Hide">Hide</div>
            </div>
            <div className="User-Shortlisted">
                <img className="Svector" alt="Vector" src={Shortlist} />
                <div className="Shortlist">Shortlist</div>
            </div>
            <div className="User-Report">
                <img className="Rgroup" alt="Group" src={Report} />
                <div className="Report">Report</div>
            </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;


        
    

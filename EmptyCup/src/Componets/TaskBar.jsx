import React from "react";
import "./TaskBar.css";
import contact from "../public/contact.png";
import Gallary from "../public/Gallary.svg";
import Map from "../public/Map.svg";
import Shortlist from "../public/Shortlist.svg";
import Sort from "../public/Sort.svg";

const TaskBar = ({ handleShortlisted }) => {
  return (
    <div className="Task-main">
      <div className="Task-box">
        <div className="All-Task">
          <div className="frame">
            <div className="First-Frame">
              <div className="Task-contact">
                <div className="Contact-Logo">
                  <img className="img" alt="Vector" src={contact} />
                </div>
                <div className="contact">Contacts</div>
              </div>
              <div className="Task-Gallary">
                <div className="Gallary-Logo">
                  <img className="vector-2" alt="Vector" src={Gallary} />
                </div>
                <div className="Gallary">Gallery</div>
              </div>
              <div className="Task-Map">
                <img className="vector-4" alt="Vector" src={Map} />
                <div className="Map">Map</div>
              </div>
            </div>
            <div className="Second-Frame">
              <div className="Task-Shortlist" onClick={handleShortlisted}>
                <img
                  className="clipboard-heart" alt="Clipboard heart" src={Shortlist} />
                <div className="Shortlisted">Shortlisted</div>
              </div>
              <div className="Task-Sort">
                <img className="vector" alt="Vector" src={Sort} />
                <div className="Sort">Sort</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskBar;

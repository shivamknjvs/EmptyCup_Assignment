import React, { useState } from 'react';
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
import Unshortlisted from "../public/Unshortlisted.svg";
import Report from '../public/Report.svg';
import Bookmarked from '../public/bookmarked.png';

const UserCard = ({ user }) => {
  const [isShortlisted, setIsShortlisted] = useState(user.shortlisted);

  const getStarImage = (rating) => {
    const starImages = [Star1, Star2, Star3, Star4, Star5];
    return starImages.slice(0, Math.round(rating)).map((star, index) => (
      <img key={index} src={star} alt={`Star ${index + 1}`} />
    ));
  };

  const handleShortlistClick = async () => {
    console.log("change is requested");
    try {
      const response = await fetch(`http://127.0.0.1:5000/api/users/${user._id}/shortlist`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ shortlisted: !isShortlisted }),
      });

      if (response.ok) {
        setIsShortlisted(!isShortlisted);
      } else {
        console.error('Failed to update shortlist status');
      }
    } catch (error) {
      console.error('Error updating shortlist status:', error);
    }
  };

  return (
    <div className="User-box">
      <div className="rectangle" style={{ backgroundColor: isShortlisted ? "#fffcf2" : "white" }}>
        <div className="Left-Side-Element">
          <div className="Epicdesign">
            <div className="Pro-heading">{user.name}</div>
            <div className="Stars">{getStarImage(user.rating)}</div>
            <p className="para">
              Passionate team of 4 designers working out of Bangalore with an experience of 4 years.
            </p>
          </div>
          <div className="Numbers">
            <p className="FiftySeven">
              <span className="f57">{user.num_projects}</span>
              <span className="Proj">Projects</span>
            </p>
            <p className="eight">
              <span className="e8">{user.years_experience}</span>
              <span className="years">Years</span>
            </p>
            <p className="dollar">
              <span className="text-wrapper">{user.price}</span>
              <span className="price">Price</span>
            </p>
          </div>
          <div className="mob-number">
            <div className="text-wrapper-2">{user.contacts}</div>
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
            <div className="User-Shortlisted" onClick={handleShortlistClick}>
            <div className='bookmark'>
              {isShortlisted ? <img className="Svector " alt="Vector" src={Shortlist} /> : <img className="Svector" alt="Vector" src={Unshortlisted} />}
              </div>
              <div className="Shortlist">{isShortlisted ? 'shortlist' : 'Shortlist'}</div>
            </div>
            <div className="User-Report">
              <img className="Rgroup" alt="Group" src={Report} />
              <div className="Report">Report</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;

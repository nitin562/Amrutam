import React from "react";
import "./Review.style.css";
import StarImg from "../../Images/star.svg";
export default function ReviewTile({
  name,
  img,
  position,
  date,
  description,
  stars,
}) {
  const GetStars = (starNumber) => {
    const arrElement = [];
    for (let count = 0; count < starNumber; count++) {
      let element = <img key={count} src={StarImg} alt="icon" />;
      arrElement.push(element);
    }
    return arrElement;
  };
  return (
    <div className="ReviewTileCont">
      <div className="ReviewContentArea">
        <div className="ReviewTileHeading">
          <div className="userInfo1">
            <img src={img} alt="user" />
            <div className="userName1">
              <p>{name}</p>
              <p>{position}</p>
            </div>
          </div>
          <p id="DatePara">{date}</p>
        </div>
        <div className="Descriptions">
          <div className="starRow">{GetStars(stars).map((e) => e)}</div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

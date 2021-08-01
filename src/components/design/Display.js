import React from "react";
import "./Display.css";

const Display = ({ display }) => {
  return (
    <div className="card card-content">
      <div className="imgTshirt text-center">
        <img
          className="img-responsive"
          src={`https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/${display.tshirtColor}.png`}
          alt="img-Tshirt"
        />
      </div>
      <div className="memeText text-center">
        <div className="upperText">
          <p
            style={{
              fontSize: parseInt(display.textSize),
              color: display.textColor,
            }}
          >
            {display.upperText}
          </p>
        </div>
        <img src={display.url} alt="meme-text" />
        <div className="lowerText">
          <p
            style={{
              fontSize: parseInt(display.textSize),
              color: display.textColor,
            }}
          >
            {display.lowerText}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Display;

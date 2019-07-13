import React from "react";
import "./postcard.scss";

const Postcard = () => {
  return (
    <div className="postcard-container">
      <div className="mail">
        <div className="cover" />
        <div className="letter">
          {/* <input type="text" />
           */}
          <h1>@</h1>
        </div>
      </div>
    </div>
  );
};

export default Postcard;

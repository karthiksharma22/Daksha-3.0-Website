import React from "react";
import s1 from "../assets/sponsors/title.png";

import "../styles/sslider.css";

const Sponsorslider = () => {
  return (
    <div>
      <h1>Daksha 3.0 Sponsors</h1>
      <div className="titlespo">
        <div className="titlemain">
          <img
            src={require("../assets/logo.png")}
            alt="img"
            className="daklogo"
          />

          <hr className="hrspo" />

          <img src={s1} alt="img" className="titlelogo" />
        </div>
        <div className="titlnam">
          <h2>TITLE SPONSOR</h2>
          <p>Daksha 3.O</p>
        </div>
      </div>
    </div>
  );
};

export default Sponsorslider;

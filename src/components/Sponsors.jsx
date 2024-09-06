import React from "react";
import "../styles/sponsors.css";
import sponsors from "../assets/sponsors.pdf";
import s1 from "../assets/sponsors/title.png";
import s2 from "../assets/sponsors/s2.png";
import s3 from "../assets/sponsors/s3.PNG";
import s4 from "../assets/sponsors/s4.PNG";
import s5 from "../assets/sponsors/s5.png";
import s6 from "../assets/sponsors/s6.png";
import s7 from "../assets/sponsors/s7.PNG";
import s8 from "../assets/sponsors/s8.jpg";
import s9 from "../assets/sponsors/s9.PNG";
import s10 from "../assets/sponsors/s10.PNG";
import a1 from "../assets/sponsors/a1.PNG";
import a2 from "../assets/sponsors/a2.jpg";
import a3 from "../assets/sponsors/a3.PNG";
import h1 from "../assets/sponsors/h1.png";
import nss from "../assets/sponsors/NSS_logo.png";

function Sponsors() {
  return (
    <div className="sponsors">
      <h1>Daksha 3.0 Sponsors</h1>
      <div className="spmaindiv">
        <div className="sponsors-div">
          <h1>Title Sponsors</h1>
          <div>
            <img src={s1} alt="" className="img" />
          </div>
        </div>
        <div className="sponsors-div">
          <h1>Silver Sponsors</h1>
          <div>
            <img src={s2} alt="" className="img" />
            <img src={s3} alt="" className="img" />
            <img src={s4} alt="" className="img" />
            <img src={s5} alt="" className="img" />
            <img src={s6} alt="" className="img" />
            <img src={s7} alt="" className="img" />
            <img src={s8} alt="" className="img" />
            <img src={s9} alt="" className="img" />
          </div>
        </div>

        <div className="sponsors-div">
          <h1>Sponsors</h1>
          <div>
            <img src={a1} alt="" className="img" />
            <img src={a2} alt="" className="img" />
            <img
              src={a3}
              alt=""
              className="img"
              style={{ height: "100px", width: "100px", borderRadius: "50%" }}
            />
          </div>
        </div>

        <div className="sponsors-div">
          <h1>Hospitality Partner</h1>
          <div>
            <img
              src={h1}
              alt=""
              className="img"
              style={{ height: "150px", width: "300px" }}
            />
          </div>
        </div>

        <div className="sponsors-div">
          <h1>Volunteering Partner</h1>
          <div>
            <img
              src={nss}
              alt=""
              className="img"
              style={{ height: "200px", width: "200px" }}
            />
          </div>
        </div>

        {/* <div className="sponsors-div">
          <h1>Gold Sponsors</h1>
          <div className="gold-sponsors">
            <div>
              <img src="" alt="" className="img" />
            </div>
            <div>
              <img src="" alt="" className="img" />
            </div>
            <div>
              <img src="" alt="" className="img" />
            </div>
            <div>
              <img src="" alt="" className="img" />
            </div>
            <div>
              <img src="" alt="" className="img" />
            </div>
          </div>
        </div> */}
      </div>
      <div className="propsal">
        <h3>Want to Be part of Daksha3.O ?</h3>
        <a href={sponsors} download>
          Look into Sponsorship Proposal
        </a>
      </div>
    </div>
  );
}

export default Sponsors;

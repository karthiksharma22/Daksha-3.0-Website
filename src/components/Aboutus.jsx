import React, { useRef, useEffect } from "react";
import "../styles/About.css";
// import d3 from "../assets/gallery/d3.JPG";
import about from "../assets/gallery/about.JPG";
import karthik from "../assets/designteam/karthik.jpeg";
import nandu from "../assets/designteam/tuvvai.jpeg";
import harini from "../assets/designteam/harini.jpeg";
import sisira from "../assets/designteam/sisira.jpeg";
import c1 from "../assets/overallc/poojitha.jfif";
import c2 from "../assets/overallc/sahitha.jpg";
import c3 from "../assets/overallc/subranshu.jpg";
import c4 from "../assets/overallc/chaitanya.jpg";

const About = () => {
  const parallaxRef = useRef(null);
  const handleParallax = () => {
    const scrollValue = window.scrollY;
    if (parallaxRef.current) {
      parallaxRef.current.style.transform = `translateY(-${
        scrollValue * 0.5
      }px)`;
    }
  };
  const handleParallax1 = () => {
    const scrollValue = window.scrollY;
    if (parallaxRef.current) {
      parallaxRef.current.style.transform = `translateY(-${
        scrollValue * 0.5
      }px)`;
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleParallax1);
    return () => {
      window.removeEventListener("scroll", handleParallax1);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleParallax);
    return () => {
      window.removeEventListener("scroll", handleParallax);
    };
  }, []);

  return (
    <div className="about-us-container">
      {/* Upper Section */}
      <h1 className="h1">About Us</h1>
      <div className="upper-section">
        {/* Left Half - Photo */}
        <div className="left-half" ref={parallaxRef}>
          <img
            src={about}
            alt="Lower Section - apple"
            className="img"
            style={{ objectFit: "cover" }}
          />
        </div>
        {/* Right Half - Information */}
        <div className="right-half">
          <div className="para">
            <h2>DAKSHA'S VISION</h2>
            <p> ------------------ </p>
            <p style={{ marginBottom: "50px" }}>
              DAKSHA-3.0, an annual Techno-Cultural Fest orchestrated by the
              Department of Computer Science and Engineering, commenced its
              journey in the academic year 2021-22. In its third edition, DAKSHA
              stands as a beacon, bringing together undergraduate talents from
              over 120 colleges and universities nationwide.
            </p>
          </div>
        </div>
      </div>
      {/* Lower Section */}
      <div className="lower-section" ref={parallaxRef}>
        {/* Left Half - Information (Reversed) */}
        <div className="right-half">
          <div className="para">
            <h2>DAKSHA'S AIM</h2>
            <p> ------------------ </p>
            <p>
              The objective of the Anurag University’s Techno-Cultural Fest
              DAKSHA-3.0 is to create a bond with students of different
              Colleges/Universities and to test their skills and abilities in
              different fields.
            </p>
          </div>
        </div>
        {/* Right Half - Photo (Reversed) */}
        <div className="left-half">
          <img
            src="https://images.shiksha.com/mediadata/images/1681816263phpD7AaRY.jpeg"
            alt="Lower Section - apple"
            className="img"
          />
        </div>
      </div>
      <div className="team">
        <h1 className="h1">Our Team</h1>
        <hr className="hrtag" />
        <div className="conveners">
          <div className="sir">
            <img
              src="https://anurag.edu.in/wp-content/uploads/2023/05/21.jpg"
              alt=""
              className="photo"
            />
            <h2 style={{ fontWeight: "600" }}>Mr. P. RAJA SEKHAR REDDY</h2>
            <h3
              style={{
                fontWeight: "500",
                fontStyle: "italic",
                marginTop: "-10px",
              }}
            >
              Convener
            </h3>
          </div>
          <div className="sir">
            <img
              src="https://anurag.edu.in/wp-content/uploads/2023/05/13.jpg"
              alt=""
              className="photo"
            />
            <h2 style={{ fontWeight: "600" }}>Mr. B. RAVINDER REDDY</h2>
            <h3
              style={{
                fontWeight: "500",
                fontStyle: "italic",
                marginTop: "-10px",
              }}
            >
              Co - Convener
            </h3>
          </div>
          <div className="sir">
            <img
              src="https://anurag.edu.in/wp-content/uploads/2023/05/12.jpg"
              alt=""
              className="photo"
            />
            <h2 style={{ fontWeight: "600" }}>Dr. N. SWAPNA GOUD</h2>
            <h3
              style={{
                fontWeight: "500",
                fontStyle: "italic",
                marginTop: "-10px",
              }}
            >
              Co - Convener
            </h3>
          </div>
        </div>

        <div className="students">
          <h1 className="h1">Daksha 3.0 Coordinators</h1>
          <hr className="hrtag" />

          <div className="stus">
            <div className="stu">
              <img src={c1} alt="" className="photo" />
              <h2>Mukku Poojitha</h2>
              <p>Student Coordinator</p>
            </div>
            <div className="stu">
              <img src={c2} alt="" className="photo" />
              <h2>Resoju Sahitha</h2>
              <p>Student Coordinator</p>
            </div>
            <div className="stu">
              <img src={c3} alt="" className="photo" />
              <h2>Subranshu Ranjan Dash</h2>
              <p>Student Coordinator</p>
            </div>
            <div className="stu">
              <img src={c4} alt="" className="photo" />
              <h2>I. Chaitanya Sai</h2>
              <p>Student Coordinator</p>
            </div>
          </div>
        </div>

        <div className="students">
          <h1 className="h1">Designed By</h1>
          <hr className="hrtag" />

          <div className="stus">
            <div className="stu">
              <img src={sisira} alt="" className="photo" />
              <h2>Samaya Sisira</h2>
              <p>samaya.sisira@gmail.com</p>
              <p style={{ fontStyle: "italic" }}>Website Coordinator</p>
            </div>
            <div className="stu">
              <img src={karthik} alt="" className="photo" />
              <h2>G Kartik Sarma</h2>
              <p>gkartiksharma22@gmail.com</p>
              <p style={{ fontStyle: "italic" }}>Design Team</p>
            </div>
            <div className="stu">
              <img src={harini} alt="" className="photo" />
              <h2>D Sri Harini Reddy</h2>
              <p>harinireddydakuri@gmail.com</p>
              <p style={{ fontStyle: "italic" }}>Design Team</p>
            </div>
            <div className="stu">
              <img src={nandu} alt="" className="photo" />
              <h2>Ch Bahugun Sai</h2>
              <p>nandusportie@gmail.com</p>
              <p style={{ fontStyle: "italic" }}>Design Team</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

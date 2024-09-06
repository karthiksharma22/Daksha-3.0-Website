import React, { useState, useEffect } from "react";
import "../styles/home.css";
import dakshasc from "../assets/dakshasc.JPG";
import dakshasc2 from "../assets/dakshasc2.JPG";
import logo from "../assets/logobig.png";
import mobile_logo from "../assets/logo-mobile.png";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { Link } from "react-router-dom";
import Timer from "../components/Timer";
import Slider from "./Posters";
import Sponsorslider from "./Sponsorslider";

const Home = (props) => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      const newDimensions = {
        width: window.innerWidth,
      };
      setDimensions(newDimensions);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial dimensions
    handleResize();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to run the effect only once

  // Determine the image source based on dimensions
  const getImageSource = () => {
    if (dimensions.width > 700) {
      return logo;
    } else {
      return mobile_logo;
    }
  };

  return (
    <div>
      <div className="mainpage">
        <div id="mainvdo"></div>
        <div className="text-wrapper">
          <img src={getImageSource()} alt="" />
        </div>
        <div className="venuecircles">
          <div className="circle">
            <p className="available">120+</p>
            <h1 className="heading">Colleges</h1>
          </div>
          <div className="circle">
            <p className="available">12K+</p>
            <h1 className="heading">FootFall</h1>
          </div>
          <div className="circle">
            <p className="available">175+</p>
            <h1 className="heading">Events</h1>
          </div>
          <div className="circle">
            <p className="available">9+</p>
            <h1 className="heading">States</h1>
          </div>
          <div className="circle">
            <p className="available">450+</p>
            <h1 className="heading">Organizers</h1>
          </div>
        </div>
        <p className="time">
          AND IT'S TIME FOR -
          <span style={{ color: "rgb(255, 55, 40)" }}> 3X BIGGER EDITION</span>
        </p>
      </div>

      <div className="sponsorslider">
        <Sponsorslider />
      </div>

      <div className="events">
        <h1 style={{ fontSize: "40px", fontWeight: "700", textAlign: "left" }}>
          All Events
        </h1>
        <hr
          style={{
            border: "1px solid black",
            width: "80%",
            marginLeft: "-5px",
            margin: "30px 30px",
          }}
        />
        <div className="cardsbox">
          <Link
            to="/events"
            onClick={() => {
              props.setevent("technical");
            }}
            style={{ textDecoration: "none" }}
            className="c"
          >
            <div className="card card1"></div>
            <h3
              style={{
                fontWeight: "400",
                textAlign: "center",
                color: "#4e3054",
              }}
            >
              Technical Events
            </h3>
          </Link>

          <Link
            to="/events"
            onClick={() => {
              props.setevent("nontechnical");
            }}
            style={{ textDecoration: "none" }}
            className="c"
          >
            <div className="card card2"></div>
            <h3
              style={{
                fontWeight: "400",
                textAlign: "center",
                color: "#4e3054",
              }}
            >
              Non Technical Events
            </h3>
          </Link>

          <Link
            to="/events"
            onClick={() => {
              props.setevent("club");
            }}
            style={{ textDecoration: "none" }}
            className="c"
          >
            <div className="card card3"></div>
            <h3
              style={{
                fontWeight: "400",
                textAlign: "center",
                color: "#4e3054",
              }}
            >
              Club Events
            </h3>
          </Link>
        </div>
        <p style={{ opacity: "0.6", padding: "0px 40px", textAlign: "center" }}>
          <b>NOTE : </b> All the registrations through Google Forms are now
          closed. Spot Registrations are only Open.
        </p>
      </div>

      <div className="registration">
        <h1 className="t" style={{ textAlign: "center", marginLeft: "50px" }}>
          Registration Process
        </h1>
        <div className="processes">
          <div className="process">
            <h2>01.</h2>
            <p>Choose the Technical or Non Technical</p>
          </div>
          <div className="process">
            <h2>02.</h2>
            <p>Choose the Department</p>
          </div>
          <div className="process">
            <h2>03.</h2>
            <p>Choose the Event </p>
          </div>
          <div className="process">
            <h2>04.</h2>
            <p>Register Yourself with the link</p>
          </div>
          <div className="process">
            <h2>05.</h2>
            <p>Have Fun at the event</p>
          </div>
        </div>
      </div>

      <div className="posterslider" style={{ height: "auto" }}>
        <h1>Pick your Choice</h1>
        <Slider />
      </div>

      <video
        autoPlay
        loop
        muted
        src={require("../assets/loading.mp4")}
        className="comingsoon"
      ></video>

      <div className="soon">
        <Timer />
      </div>

      <div className="contact-details">
        <h1 className="schedule">Daksha 2 Days Schedule</h1>
      </div>

      <div className="dailyschedule">
        <div className="day1">
          <div className="text">
            <div className="daily-event">
              <h1>9:30 AM</h1>
              <h3>Inaugral Ceremony</h3>
            </div>
            <div className="daily-event">
              <h1>11:00 AM</h1>
              <h3>Ceremony 2 and event</h3>
            </div>
            <div className="daily-event">
              <h1>2:00 PM</h1>
              <h3>Ice Breaker Sessions</h3>
            </div>
            <div className="daily-event">
              <h1>5:00 PM</h1>
              <h3>Day 1 concludes</h3>
            </div>
          </div>

          <ParallaxProvider>
            <div style={{ overflow: "hidden" }}>
              <Parallax speed={-30}>
                <img src={dakshasc} alt="" className="day1img" />
              </Parallax>
            </div>
          </ParallaxProvider>
        </div>

        <div className="day1 day2">
          <ParallaxProvider>
            <div style={{ overflow: "hidden" }}>
              <Parallax speed={-30}>
                <img src={dakshasc2} alt="" className="day1img" />
              </Parallax>
            </div>
          </ParallaxProvider>
          <div className="text">
            <div className="daily-event">
              <h1>9:00 AM</h1>
              <h3>Ceremony 1 and event 1</h3>
            </div>
            <div className="daily-event">
              <h1>11:00 AM</h1>
              <h3>Ceremony 2 and event</h3>
            </div>
            <div className="daily-event">
              <h1>2:00 PM</h1>
              <h3>Ice Breaker Sessions</h3>
            </div>
            <div className="daily-event">
              <h1>5:00 PM</h1>
              <h3>Day 2 concludes</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

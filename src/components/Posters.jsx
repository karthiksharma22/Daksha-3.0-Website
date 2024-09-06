import React, { useState } from "react";
import "../styles/poster.css";
import Slider from "react-slick";
import cse from "../assets/poster/cse.jpeg";
import ai from "../assets/poster/ai.jpeg";
import mech from "../assets/poster/mech.jpeg";
import ce from "../assets/poster/ce.jpeg";
import civil from "../assets/poster/civil.jpeg";
import ds from "../assets/poster/ds.jpeg";
import csit from "../assets/poster/itcs.jpeg";
import pharma from "../assets/poster/pharma.jpeg";
import eee from "../assets/poster/eee.jpeg";
import ece from "../assets/poster/ece.jpeg";
import som from "../assets/poster/som.jpeg";

const images = [cse, ai, mech, ce, civil, ds, csit, pharma, eee, ece, som];

const Posters = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    infinite: true,
    dots: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: window.innerWidth < 500 ? 1 : 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px", // Adjust the centerPadding as needed
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    },
    afterChange: (index) => {
      setCurrentSlide(index);
    },
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`custom-slide ${
              index === currentSlide ? "center-image" : ""
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{
                height: `${window.innerWidth < 500 ? "auto" : "400px"}`,
                width: `${window.innerWidth < 500 ? "65vw" : "250px"}`,
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Posters;

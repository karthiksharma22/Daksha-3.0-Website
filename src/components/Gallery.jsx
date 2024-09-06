import React from "react";
import "../styles/gallery.css";
import d1 from "../assets/gallery/d1.JPG";
import d11 from "../assets/gallery/d11.JPG";
import d3 from "../assets/gallery/d3.JPG";
import d4 from "../assets/gallery/d4.JPG";
import d5 from "../assets/gallery/d5.JPG";
import d6 from "../assets/gallery/d6.jpg";
import a2 from "../assets/gallery/a2.jpg";
import a3 from "../assets/gallery/a3.jpg";
import a4 from "../assets/gallery/a4.jpg";

import a7 from "../assets/gallery/a7.jpg";
import a8 from "../assets/gallery/a8.jpg";
import a9 from "../assets/gallery/a9.jpg";
import a10 from "../assets/gallery/a10.jpg";

import ribervideo from "../assets/dakshabg.mp4";
const Gallery = () => {
  return (
    <>
      <h1>Gallery</h1>
      <div className="background">
        <h1>Promo Video</h1>
        <video className="vdo" loop muted controls>
          <source src={ribervideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h1>Daksha in a Glimpse</h1>
        <div className="gallery">
          <div>
            <img src={d1} alt="" />
          </div>
          <div className="v-strech">
            <img src={a4} alt="" />
          </div>
          <div className="h-strech">
            <img src={d6} alt="" />
          </div>
          <div>
            <img src={d4} alt="" />
          </div>
          <div>
            <img src={d5} alt="" />
          </div>
          <div className="v-strech">
            <img src={d11} alt="" />
          </div>
          <div className="big-strech">
            <img src={d3} alt="" />
          </div>
          <div>
            <img src={a2} alt="" />
          </div>
          <div className="h-strech">
            <img src={a10} alt="" />
          </div>
          <div className="h-strech">
            <img src={a8} alt="" />
          </div>
          <div className="h-strech">
            <img src={a3} alt="" />
          </div>
          <div className="v-strech">
            <img src={a2} alt="" />
          </div>
          <div className="big-strech">
            <img src={a7} alt="" />
          </div>
          <div className="v-strech">
            <img src={a9} alt="" />
          </div>
        </div>
        <div className="slider"></div>
      </div>
    </>
  );
};

export default Gallery;

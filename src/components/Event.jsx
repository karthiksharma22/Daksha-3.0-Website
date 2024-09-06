import React from "react";
import { Link } from "react-router-dom";

const Event = (props) => {
  return (
    <div>
      <Link
        to="/eventdesc"
        style={{ textDecoration: "none" }}
        onClick={() => {
          props.setele(props.event);
        }}
      >
        <div className="event">
          <img
            src={props.event.poster}
            alt=""
            className="poster"
            style={{ objectFit: "cover" }}
          />
          <div className="desc1">
            <h2>{props.event.title}</h2>
            <p>{props.event.desc}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Event;

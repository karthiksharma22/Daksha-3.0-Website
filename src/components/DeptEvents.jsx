import React from "react";
import "../styles/deptevents.css";

import deptevents from "../assets/deptevents";
import Event from "./Event";

export default function DeptEvents({ name, setele }) {
  const eventname = (s) => {
    return s === "nontechnical"
      ? "Non Technical"
      : s === "technical"
      ? "Technical"
      : s === "club"
      ? "Club"
      : "";
  };
  return (
    <div className="depts">
      <h1>{eventname(name) + " Events"}</h1>
      <div className="deptsbox">
        {name
          ? deptevents[name].map((ele) => {
              return <Event event={ele} setele={setele} />;
            })
          : "Select Technical, Non Techincal or Club to view all available events"}
      </div>
    </div>
  );
}

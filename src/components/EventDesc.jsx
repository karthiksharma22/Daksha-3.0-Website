import React from "react";
import "../styles/eventsdesc.css";
const EventDesc = (props) => {
  return (
    <div className="mainpage">
      <img className="bg" src={props.ele.poster} alt="hii" />
      <div className="container">
        <h1>{props.ele.title}</h1>
        <hr />
        <h2 style={{ marginBottom: "60px" }}>DESCRIPTION</h2>
        {props.ele.guidelines.split("\n").map((paragraph, index) => (
          <p key={index} className="p">
            {paragraph}
          </p>
        ))}

        <div className="sfcd">
          <div>
            <h2>STUDENT COORDINATORS</h2>
            <p>
              {
                <ul style={{ listStyle: "none" }}>
                  {Object.entries(props.ele.studentc).map(([key, value]) => (
                    <li key={key} style={{ margin: "10px 0px" }}>
                      <strong>{key} : </strong> {value}
                    </li>
                  ))}
                </ul>
              }
            </p>
          </div>
          <div>
            <h2>FACULTY COORDINATORS</h2>
            <p>
              {
                <ul style={{ listStyle: "none" }}>
                  {Object.entries(props.ele.facultyc).map(([key, value]) => (
                    <li key={key} style={{ margin: "10px 0px" }}>
                      <strong>{key} : </strong> {value}
                    </li>
                  ))}
                </ul>
              }
            </p>
          </div>
        </div>

        <a
          href={props.ele.registration}
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          <button class="button">
            <p>Register</p>
          </button>
        </a>
      </div>
    </div>
  );
};

export default EventDesc;

import React, { useState, useRef, useEffect } from "react";
import "../styles/navbar.css";
import bus_route from "../assets/bus_route.pdf";
import { Link, useLocation } from "react-router-dom";
const NavBar = (props) => {
  const location = useLocation();

  const navitems = useRef(null);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleclick = () => {
    console.log(navitems.current.classList);
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav>
      <div className="nav">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link to="/">
            <img
              src={require("../assets/logo.png")}
              alt=""
              className="logo-1"
            />
          </Link>
          <a
            href="https://anurag.edu.in/"
            style={{ marginTop: "5px" }}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://anurag.edu.in/wp-content/uploads/2023/02/logo-white.png"
              alt=""
              className="logoau"
              style={{ opacity: "0.85" }}
            />
          </a>
        </div>
        <ul
          className={`nav-items${isNavOpen ? " translate" : ""}`}
          ref={navitems}
        >
          <li>
            <Link
              className={`link ${location.pathname === "/" ? "active1" : ""}`}
              to="/"
            >
              Home
              {console.log(location.pathname)}
            </Link>
          </li>
          <li>
            <Link
              className={`link ${
                location.pathname === "/about" ? "active1" : ""
              }`}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={`link ${
                location.pathname === "/events" ? "active1" : ""
              }`}
              to="/events"
            >
              <div className="select-container">
                <select
                  name=""
                  id=""
                  value={"Events"}
                  style={{
                    backgroundColor: "black",
                    color: `${
                      location.pathname === "/events" ? "#c447e7" : "white"
                    }`,
                    border: "none",
                    fontSize: "16px",
                    width: "80px",
                    cursor: "pointer",
                  }}
                  onChange={(e) => {
                    props.setevent(e.target.value);
                  }}
                >
                  <option value="" style={{ display: "none" }}>
                    Events
                  </option>
                  <option value="technical">Technical</option>
                  <option value="nontechnical">Non Technical</option>
                  <option value="club">Club</option>
                </select>
              </div>
            </Link>
          </li>

          <li>
            <a
              href={bus_route}
              className="link"
              target="_blank"
              rel="noreferrer"
            >
              Transport
            </a>
          </li>
          <li>
            <Link
              className={`link ${
                location.pathname === "/sponsors" ? "active1" : ""
              }`}
              to="/sponsors"
            >
              Sponsors
            </Link>
          </li>
          <li>
            <Link
              className={`link ${
                location.pathname === "/gallery" ? "active1" : ""
              }`}
              to="/gallery"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              className={`link ${
                location.pathname === "/contact" ? "active1" : ""
              }`}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>

        <div class="hamburger" onClick={handleclick}>
          <input type="checkbox" checked={isNavOpen} />
          <svg viewBox="0 0 32 32">
            <path
              class="line line-top-bottom"
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            ></path>
            <path class="line" d="M7 16 27 16"></path>
          </svg>
        </div>

        <div className="social-logos">
          <a
            href="https://www.instagram.com/daksha3.0.au?igsh=ZWI2YzEzYmMxYg=="
            target="_blank"
            rel="noreferrer"
            style={{
              color: "white",
            }}
          >
            <i class="fa-brands fa-instagram fa-xl"></i>
          </a>

          <a
            href="https://www.youtube.com/@DAKSHA2k24"
            rel="noreferrer"
            target="_blank"
            style={{ color: "white" }}
          >
            <i class="fa-brands fa-youtube fa-xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/daksha-au-b102442b3/"
            rel="noreferrer"
            target="_blank"
            style={{
              color: "white",
            }}
          >
            <i class="fa-brands fa-linkedin fa-xl"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

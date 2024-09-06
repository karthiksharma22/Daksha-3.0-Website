import React from "react";
import "../styles/footer.css";

import karthik from "../assets/designteam/karthik.jpeg";
import harini from "../assets/designteam/harini.jpeg";
import bahugun from "../assets/designteam/tuvvai.jpeg";

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="contact-container">
          <img
            src="https://anurag.edu.in/wp-content/uploads/2023/02/logo-white.png"
            alt=""
            style={{ height: "45px" }}
          />
          <p>Venkatapur, Ghatkesar,</p>
          <p>Medchal-Malkajgiri district,</p>
          <p>Hyderabad, Telangana, India.</p>
          <p>500 088.</p>
          <p>daksha2k24@anurag.edu.in</p>
          <p>+91 8181057057</p>
          <p>
            Email:{" "}
            <a href="mailto:daksha2k24@anurag.edu.in">
              daksha2k24@anurag.edu.in
            </a>
          </p>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.827222662666!2d78.65346587389233!3d17.420077383472695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb76730bf4dccf%3A0x2ca84b53416f0abd!2sAnurag%20University%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1704265309492!5m2!1sen!2sin"
            className="dimensions"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Anurag University, Hyderabad Location Map"
          ></iframe>
        </div>
        <div className="social-main" style={{ textAlign: "center" }}>
          <h2 style={{ color: "#e69b00", fontSize: "30px" }}>Follow Us</h2>
          <div className="social">
            <a
              href="https://www.instagram.com/daksha3.0.au?igsh=ZWI2YzEzYmMxYg=="
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              <div className="instagram">
                <i class="fa-brands fa-instagram fa-sm"></i>
              </div>
            </a>

            <a
              href="https://twitter.com/Daksha2k24_AU"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              <div className="twitter">
                <i className="fa-brands fa-x-twitter fa-sm"></i>
              </div>
            </a>

            <a
              href="https://www.youtube.com/@DAKSHA2k24"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              <div className="youtube">
                <i className="fa-brands fa-youtube fa-sm"></i>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/daksha-au-b102442b3/"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              <div className="linkedin">
                <i className="fa-brands fa-linkedin fa-sm"></i>
              </div>
            </a>
          </div>
          <h2 style={{ color: "#e69b00", fontSize: "30px" }}>Designed By</h2>
          <div className="images">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <img src={karthik} className="pic" alt="" />
              <p style={{ marginTop: "0px" }}>Kartik</p>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <img src={harini} className="pic" alt="" />
              <p style={{ marginTop: "0px" }}>Harini</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <img src={bahugun} className="pic" alt="" />
              <p style={{ marginTop: "0px" }}>Bahugun</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

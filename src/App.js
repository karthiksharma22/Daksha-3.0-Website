import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import NavBar from "./components/NavBar";

import DeptEvents from "./components/DeptEvents";
import EventDesc from "./components/EventDesc";
import React, { useState } from "react";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Contact from "./components/Contact2";
import Sponsors from "./components/Sponsors";

function App() {
  const [event, setevent] = useState("");
  const [ele, setele] = useState("");
  return (
    <div>
      <Router>
        <NavBar setevent={setevent} />
        <Routes>
          <Route exact path="/" element={<Home setevent={setevent} />} />
          <Route exact path="/about" element={<Aboutus />} />
          <Route exact path="/sponsors" element={<Sponsors />} />

          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route
            exact
            path="/events"
            element={<DeptEvents name={event} setele={setele} />}
          />
          <Route exact path="/eventdesc" element={<EventDesc ele={ele} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

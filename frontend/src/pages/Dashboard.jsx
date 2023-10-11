import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";
import { Outlet, Link } from "react-router-dom";

const Dashboard = () => {
  const [src, setSrc] = useState("");
  const [dst, setDst] = useState("");
  const [link, setLink] = useState(
    "https://www.google.com/maps/embed/v1/directions?key=AIzaSyA5nM5ssOWReenHFLOjtm-z5ovk_pMVFyo&origin=New+York,NY&destination=Atlanta,GA"
  );

  const apiCall = () => {
    setLink(
      `https://www.google.com/maps/embed/v1/directions?key=AIzaSyA5nM5ssOWReenHFLOjtm-z5ovk_pMVFyo&origin=${src}&destination=${dst}`
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    apiCall();
  }
  
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const email = user.email;
        console.log("email", email);
      } else {
        console.log("user is logged out");
        navigate("/");
      }
    });
  }, []);
  
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        alert("Signed out successfully");
        console.log("Signed out successfully");
        navigate("/");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <>
      <section className="text">
        <h3>Where are we going today?</h3>
        <div className="address">
          <form name="myForm" action="/action_page.php" onSubmit={handleSubmit} method="post">
            <br />
            <input
              id="origin-input"
              className="controls"
              type="text"
              placeholder="Enter an origin location"
              value={src}
              onChange={(e) => setSrc(e.target.value)}
            />

            <input
              id="destination-input"
              className="controls"
              type="text"
              placeholder="Enter a destination location"
              value={dst}
              onChange={(e) => setDst(e.target.value)}
            />

            <div id="mode-selector" className="controls">
              <input type="radio" name="type" id="changemode-walking" checked="checked" />
              <label htmlFor="changemode-walking">Walking</label>

              <input type="radio" name="type" id="changemode-transit" />
              <label htmlFor="changemode-transit">Transit</label>

              <input type="radio" name="type" id="changemode-driving" />
              <label htmlFor="changemode-driving">Driving</label>
            </div>
            <input type="submit" value="Submit" />
          </form>

        </div>
        <div className="carbon">
          <h3>Carbon Footprint</h3>
          <p>Transportation Method: </p>
          <p>Distance: </p>
          <p>Emission Factor: </p>
          <p>Carbon Footprint: </p>
        </div>
      </section>
      <button onClick={handleLogout}>Logout</button>
      <iframe
        width="1000"
        height="1000"
        frameBorder="0"
        referrerPolicy="no-referrer-when-downgrade"
        src={link}
        allowFullScreen
      ></iframe>
    </>
  );
};

export default Dashboard;

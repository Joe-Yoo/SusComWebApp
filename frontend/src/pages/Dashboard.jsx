import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

const Dashboard = () => {
  const [src, setSrc] = useState("");
const [dst, setDst] = useState("");
  const [dist, setDist] = useState("");
  const [commuteOpt, setOpt] = useState("");
  const [commuteOptNum, setOptNum] = useState(2);
  const [carpoolNum, setCarpool] = useState(1);
  const [carbonFP, setCFP] = useState("");
  const [emFactor, setEmFactor] = useState("");
  const [link, setLink] = useState(
    "https://www.google.com/maps/embed/v1/directions?key=AIzaSyA5nM5ssOWReenHFLOjtm-z5ovk_pMVFyo&origin=New+York,NY&destination=Atlanta,GA",
  );

  const mapApiCall = () => {
    setLink(
      `https://www.google.com/maps/embed/v1/directions?key=AIzaSyA5nM5ssOWReenHFLOjtm-z5ovk_pMVFyo&origin=${src}&destination=${dst}`,
    );
  };

  const distanceApiCall = (srcParam, dstParam) => {
    fetch(
      "http://localhost:8080/api/maps/distance?origin=" +
        srcParam +
        "&destination=" +
        dstParam +
        "&mode=driving",
    )
      .then((response) => response.json())
      .then((json) => {
        const distance = json.rows[0].elements[0].distance.inMeters;
        setDist(distance);
        cfCall(commuteOptNum, distance);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const setCarpoolCall = (commuteOptParam, carpoolNumParam) => {
    fetch(
      "http://localhost:8080/update/carpool/" +
        commuteOptParam +
        "/" +
        carpoolNumParam,
    ).catch((err) => {
      console.log(err.message);
    });
  };

  const cfCall = (commuteOptP, distP) => {
    fetch("http://localhost:8080/carbon/" + commuteOptP + "/" + distP)
      .then((response) => response.json())
      .then((data) => {
        setCFP(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const emFactorCall = (commuteOptP) => {
    fetch("http://localhost:8080/emission/" + commuteOptP)
      .then((response) => response.json())
      .then((data) => {
        setEmFactor(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    /**
     * Need to update commuteOpt and carpoolNum using:
     * setOpt for commuteOpt
     * and
     * setCarpool for carpoolNum
     *
     * All dependent on the input fields.
     */

    console.log(commuteOpt);
    console.log(commuteOptNum);
    mapApiCall();
    distanceApiCall(src, dst);
    // setCarpoolCall(carpoolNum);
    emFactorCall(commuteOptNum);
  };

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

  const setWalking = () => {
    console.log("setWalking");
    setOpt("Walking");
    setOptNum(0);
  }
  const setTransit = () => {
    console.log("setTransit");
    setOpt("Transit");
    setOptNum(4);
  }
  const setDriving = () => {
    console.log("setDriving");
    setOpt("Driving");
    setOptNum(2);
  }

  return (
    <>
      <section className="text">
        <h3>Where are we going today?</h3>
        <div className="address">
          <form
            name="myForm"
            action="/action_page.php"
            onSubmit={handleSubmit}
            method="post"
          >
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
              <input
                type="radio"
                name="type"
                id="changemode-walking"
                onChange={setWalking}
              />
              <label htmlFor="changemode-walking">Walking</label>

              <input type="radio" name="type" id="changemode-transit" onChange={setTransit}/>
              <label htmlFor="changemode-transit">Transit</label>

              <input type="radio" name="type" id="changemode-driving" onChange={setDriving}/>
              <label htmlFor="changemode-driving">Driving</label>
            </div>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div className="carbon">
          <h3>Carbon Footprint</h3>
          <p>Transportation Method: {commuteOpt}</p>
          <p>Distance: {dist}</p>
          <p>Emission Factor: {emFactor}</p>
          <p>Carbon Footprint: {carbonFP}</p>
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

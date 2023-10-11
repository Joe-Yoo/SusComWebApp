import "../styles/Dashboard.css";
import { Outlet, Link } from "react-router-dom";
const Dashboard = () => {

    const apiCall = () => {

      const src = document.forms["myForm"]["origin-input"].value;
      const dst = document.forms["myForm"]["destination-input"].value;
      link = "https://www.google.com/maps/embed/v1/directions?key=AIzaSyA5nM5ssOWReenHFLOjtm-z5ovk_pMVFyo&origin=" + src + "&destination=" + dst;
    };

    var link = "https://www.google.com/maps/embed/v1/directions?key=AIzaSyA5nM5ssOWReenHFLOjtm-z5ovk_pMVFyo&origin=New+York,NY&destination=Atlanta,GA";

    const handleSubmit = (e) => {
      e.preventDefault(); //prevent the default form submission
      apiCall();
    };

  return (
    <>
    <section class="text">
      <h3>Where are we going today?</h3>
      <div class = "address">
        <form
            name="myForm"
            action="/action_page.php"
            onSubmit={handleSubmit}
            method="post"
            >
            <br></br>
            <input
              id="origin-input"
              className="controls"
              type="text"
              placeholder="Enter an origin location"
            />

            <input
              id="destination-input"
              className="controls"
              type="text"
              placeholder="Enter a destination location"
            />
            <div id="mode-selector" class="controls">
              <input
                type="radio"
                name="type"
                id="changemode-walking"
                checked="checked"
              />
              <label htmlFor="changemode-walking">Walking</label>

              <input type="radio" name="type" id="changemode-transit" />
              <label htmlFor="changemode-transit">Transit</label>

              <input type="radio" name="type" id="changemode-driving" />
              <label htmlFor="changemode-driving">Driving</label>
            </div>
            <input type="submit" value="Submit" />
          </form>

        

      </div>
      <div class="carbon">
        <h3>Carbon Footprint</h3>
        <p>Transportation Method: </p>
        <p>Distance: </p>
        <p>Emission Factor: </p>
        <p>Carbon Footprint: </p>
      </div>
    </section>

   
    <iframe
      width="1000"
      height="1000"
      frameborder="0"
      referrerpolicy="no-referrer-when-downgrade"
      src={link}
      allowfullscreen>
    </iframe>
    </>
  );
};

export default Dashboard;

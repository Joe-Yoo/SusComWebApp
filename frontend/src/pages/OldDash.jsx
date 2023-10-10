import "../styles/Dashboard.css";

const Dashboard = () => {

  return (
  <>

  <head>
    <title>Place Autocomplete and Directions</title>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>

    <link rel="stylesheet" type="text/css" href="./style.css" />
    <script type="module" src="./index.js"></script>
  </head>
  <body>
    <section class="text">
      <h3>Where are we going today?</h3>
      <div class = "address">
        <form
            name="myForm"
            /*action="/action_page.php"
            onSubmit={handleSubmit}
            method="post"*/
            >
            <br></br>
            <div>
              <input type="text" name="fname" placeholder="From"/> <br></br>
              <input type="text" name="femail" placeholder="To" /> <br></br>
            </div>
            <div>
              <input type="submit" value="Go" />
            </div>
            <br></br>
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


    <section class="map">
    <div>
      <input
        id="origin-input"
        class="controls"
        type="text"
        placeholder="Enter an origin location"
      />

      <input
        id="destination-input"
        class="controls"
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
        <label for="changemode-walking">Walking</label>

        <input type="radio" name="type" id="changemode-transit" />
        <label for="changemode-transit">Transit</label>

        <input type="radio" name="type" id="changemode-driving" />
        <label for="changemode-driving">Driving</label>
      </div>
    </div>

    <div id="map"></div>
    <script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initMap&libraries=places&v=weekly"
      defer
    ></script>

    


    </section>
    </body>
    </>
  );
};

export default Dashboard;

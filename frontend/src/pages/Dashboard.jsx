import "../styles/Dashboard.css";

const Dashboard = () => {
  
  return (
  <>

  <head>
    <title>Place Autocomplete and Directions</title>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>

    <link rel="stylesheet" type="text/css" href="./style.css" />
    <script type="module" src="./index.ts"></script>
  </head>
  <body>
  <div style={{display: 'none'}}>
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

      <div id="mode-selector" className="controls">
        <input
          type="radio"
          name="type"
          id="changemode-walking"
        />
        
        <label htmlFor="changemode-walking">Walking</label>

        <input type="radio" name="type" id="changemode-transit" />
        <label htmlFor="changemode-transit">Transit</label>

        <input type="radio" name="type" id="changemode-driving" />
        <label htmlFor="changemode-driving">Driving</label>
      </div>
    </div>

    <div id="map">

    <script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA5nM5ssOWReenHFLOjtm-z5ovk_pMVFyo&callback=initMap&libraries=places&v=weekly"
      defer
    ></script>
    </div>
  </body>
    </>
  );
};

export default Dashboard;

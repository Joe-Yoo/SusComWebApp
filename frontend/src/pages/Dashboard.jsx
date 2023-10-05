import "../styles/Dashboard.css";
const Dashboard = () => {
  return (
    <>
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
    </>
  );
};

export default Dashboard;

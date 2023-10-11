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

    <iframe
  width="1000"
  height="1000"
  frameborder="0"
  referrerpolicy="no-referrer-when-downgrade"
  src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyDtN4t1eej-XKGBItq4zuQfY2NRnFJdEX4&origin=New+York,NY&destination=Atlanta,Georgia"
  allowfullscreen>
</iframe>
    </>
  );
};

export default Dashboard;

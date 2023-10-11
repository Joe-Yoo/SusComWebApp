import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

const Dashboard = () => {
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
    <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Dashboard;

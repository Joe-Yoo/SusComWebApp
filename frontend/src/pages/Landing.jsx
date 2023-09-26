import { Outlet, Link } from "react-router-dom";
import "../styles/Landing.css";

const Landing = () => {
  return (
    <>
      <div>
        <h1>Plan Greener Journeys</h1>
        <h3>
          We will calcuate your carbon footprint for you as you choose your
          transportation modes, so that you can be sustainable with no effort!
        </h3>
        <button type="button">
          <strong>
            <a>
              <Link to="/login">
                Login
              </Link>
            </a>
          </strong>
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button">
          <a>
            <Link to="/signup">
              Sign Up
            </Link>
          </a>
        </button>
      </div>
    </>
  );
};

export default Landing;

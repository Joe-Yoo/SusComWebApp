import { Outlet, Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <style> {`
        body {
          background-image: url('src/pages/LandingBackground.png');
          background-repeat: no-repeat;
          background-size: cover;
        }
        #textSection {
          background-color: white;
          font-family: Sans Serif;
          text-align: center;
          margin-left: 10%;
          margin-right: 50%;
          width: 100%;
          height: 100%;
          color: #3B2F07;
        }
        h1 {
          font-size: 50px;
        }
        h3 {
            font-size: 25px;
            padding-bottom: 30px;
        }
        button {
            background-color: #7C882E;
            border: none;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 22px;
        }
        button:hover {
            background-color: #3B2F07;
        }
        button:visited {
            background-color: #7C882E;
        }
        a:visited {
            color: white;
        }
      `}
      </style>
      <div id='textSection'>
        <h1><strong>Plan Greener Journeys</strong></h1>
        <h3>With us, your travels will be sustainable with no effort!</h3>
        <button type="button">
            <a>
              <Link to="/login">
                <strong>Login</strong>
              </Link>
            </a>
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button">
            <a>
              <Link to="/signup">
              <strong>Sign Up</strong>
              </Link>
            </a>
        </button>
      </div>
    </>
  );
};

export default Landing;

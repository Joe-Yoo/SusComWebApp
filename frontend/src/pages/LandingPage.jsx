import { Outlet, Link } from "react-router-dom";
const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'white',
    fontSize: '20px',
    fontWeight: 'bold'
  };
const LandingPage = () => {
    return (
        <>
            <style>{`
                body {
                    padding-left: 20%;
                    padding-right:20%;
                    text-align: center;
                    background: url(https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/px632989-image-kwvxkxlp.jpg?w=1200&h=1200&dpr=1&fit=clip&crop=default&fm=jpg&q=75&vib=3&con=3&usm=15&cs=srgb&bg=F4F4F3&ixlib=js-2.2.1&s=da45a68c4a249c6a9c8df998592dfebd); /*TODO: add actual background image*/
                    background-repeat: no-repeat;
                    background-size: 100%;
                }
                #textSection {
                    background-color: #9AB106;
                    font-family: Sans Serif;
                    text-align: center;
                    padding-left: 5%;
                    padding-right:5%;
                    padding-top: 5%;
                    padding-bottom: 5%;
                    color: #3E3E07;
                }
                div {
                    text-align: center;
                }
                #message {
                    padding-bottom: 30px;
                    font-size: 22px;
                }
                .buttons {
                    background-color: #AA7B08;
                    border: none;
                    padding: 15px 32px;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                }
                .buttons:hover {
                    background-color: #3E3E07;
                }
                .buttons:visited {
                    background-color: #AA7B08;
                }
                a:visited {
                    color: white;
                }
            `}
            </style>
            <div id="textSection">
                <h1 class="intro">Plan Greener Journeys</h1>
                <h3 class="intro" id="message">We will calcuate your carbon footprint for you as you choose your transportation modes, so that you can be sustainable with no effort!</h3>
                <button type="button" class="buttons"><strong><a><Link to={"Login/"} style={linkStyle}>Login</Link></a></strong></button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button type="button" class="buttons"><a><Link to={"SignUp/"} style={linkStyle}>Sign Up</Link></a></button>
            </div>
        </>
    );
  };
  
export default LandingPage;
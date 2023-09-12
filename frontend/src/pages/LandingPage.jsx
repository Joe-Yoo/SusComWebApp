import { Outlet, Link } from "react-router-dom";
const LandingPage = () => {
    return (
        <>
            <h1>Welcome! I guess</h1>;
            <li>
                <Link to={"Login/"}>Login Page</Link>
            </li>
            <li>
                <Link to={"SignUp/"}>SignUp Page</Link>
            </li>
        
        </>
    );
  };
  
export default LandingPage;
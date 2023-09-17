import { Outlet, Link } from "react-router-dom";
const Login = () => {
    return (
        <>
            <h1>LOGIN PAGE HERE</h1>;
            <li>
                <Link to={"/"}>Return To Landing Page</Link>
            </li>
        </>
    );
  };
  
export default Login;
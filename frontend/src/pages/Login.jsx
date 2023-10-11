import { Outlet, Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "../styles/Login.css";

const Login = () => {
  const navigate = useNavigate();
  
  const validateForm = () => {
    const a = document.forms["myForm"]["femail"].value;
    const b = document.forms["myForm"]["fpassword"].value;
    if (a == "") {
      alert("Email must be filled out");
      return false;
    } else if (b == "") {
      alert("Password must be filled out");
      return false;
    }
    return true; //form is valid
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //prevent the default form submission
    if (validateForm()) {
      //if the validation passes, you can submit the form here
      const email = document.forms["myForm"]["femail"].value;
      const password = document.forms["myForm"]["fpassword"].value;
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          alert("Signed in successfully");
          console.log(user.email);
          navigate("/dashboard");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorCode, errorMessage);
          console.log(errorCode, errorMessage);
        });
    }
  };

  return (
    <>
      <div>
        <form
          name="myForm"
          action="/action_page.php"
          onSubmit={handleSubmit}
          method="post"
        >
          Email: <input type="email" name="femail" />
          Password: <input type="password" name="fpassword" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};
export default Login;

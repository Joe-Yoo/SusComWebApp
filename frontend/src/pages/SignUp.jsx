import { Outlet, Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "../styles/SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();

  const validateForm = () => {
    const a = document.forms["myForm"]["femail"].value;
    const b = document.forms["myForm"]["fpassword"].value;
    const c = document.forms["myForm"]["fpassword1"].value;
    if (a == "") {
      alert("Email must be filled out");
      return false;
    } else if (b == "") {
      alert("Password must be filled out");
      return false;
    } else if (b != c) {
      alert("Passwords must be matching");
      return false;
    }
    return true; //form is valid
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); //prevent the default form submission
    if (validateForm()) {
      //if the validation passes, you can submit the form here
      const email = document.forms["myForm"]["femail"].value;
      const password = document.forms["myForm"]["fpassword"].value;
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          alert("Signed up successfully");
          console.log(user.email);
          navigate("/login");
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
      <div class="title">
        <h1>Sustainable Commit Web App</h1>
      </div>
      <div class="form">
        <form
          name="myForm"
          action="/action_page.php"
          onSubmit={handleSubmit}
          method="post"
        >
          <br></br>
          Email: <input type="email" name="femail" /> <br></br>
          Password: <input type="password" name="fpassword" /> <br></br>
          Confirm Password: <input type="password" name="fpassword1" />{" "}
          <br></br>
          <input type="submit" value="Submit" />
          <br></br>
          <br></br>
        </form>
      </div>
    </>
  );
};

export default SignUp;

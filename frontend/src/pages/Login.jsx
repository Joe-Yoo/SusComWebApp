import { Outlet, Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

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
      <style>
        {`
          body {
            background-image: url('src/pages/LoginBackground.png');
            background-repeat: no-repeat;
            background-size:cover;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: Sans Serif;
          }
          h1 {
            font-size: 70px;
            color: #3B2F07;
            margin-top: -5%;
          }
          form {
            text-align: left;
          }
          input {
            padding: 10px 50px;
            width: 80%;
            margin-bottom: 1%;
            border-radius: 25px;
            border-color: black;
          }
          #submit_container {
            margin-top: 5%;
            text-align: center;
          }
          #submit_button {
            padding: 10px;
            border-radius: 25px;
            border-color: black;
            background-color: #7C882E;
            color: white;
            font-size: 22px;
            font-family: Sans Serif;
            text-weight: 400;
          }
          #submit_button:hover {
            background-color: #3B2F07;
        `}
      </style>
      <section id="textSection">
        <h1>Welcome Back</h1>
        <div id="form_container">
          <form
            name="myForm"
            action="/action_page.php"
            onSubmit={handleSubmit}
            method="post"
          >
            <input type="email" placeholder="Email Address" name="femail" />
            <br></br><br></br>
            <input type="password" placeholder="Password" name="fpassword" />
            <br></br>
            <div id="submit_container">
              <input id="submit_button" type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
export default Login;

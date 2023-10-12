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
      <style>
        {`
          body {
            background-image: url('https://cdn.discordapp.com/attachments/957848619036319755/1162164669952307210/SignUpBackground.png?ex=653af131&is=65287c31&hm=b124817e070f6fc2bccd188174602e7a4b4766ba9eefa4ce2705dbde97ea2ce7&');
            background-repeat: no-repeat;
            background-size:cover;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: Sans Serif;
          }
          #title {
            text-align: center;
          }
          h1 {
            font-size: 70px;
            color: #3B2F07;
            margin-bottom: -5%;
          }
          form {
            text-align: left;
            font-size: 22px;
          }
          input {
            padding: 10px 50px;
            width: 80%;
            margin-bottom: 1%;
            border-radius: 25px;
            border-color: black;
          }
          #submit_container {
            margin-top: 10%;
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
            font-weight: bold;
          }
          #submit_button:hover {
            background-color: #3B2F07;
          }
        `}
      </style>
      <div id="title">
        <h1>Welcome</h1>
      </div>
      <div id="form_container">
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
          <div id="submit_container">
            <input id="submit_button" type="submit" value="Submit" />
          </div>
          <br></br>
          <br></br>
        </form>
      </div>
    </>
  );
};

export default SignUp;

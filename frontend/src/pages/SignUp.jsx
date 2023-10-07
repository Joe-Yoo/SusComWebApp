import { Outlet, Link } from "react-router-dom";
import "../styles/SignUp.css";

const SignUp = () => {
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
  const handleSubmit = (e) => {
    e.preventDefault(); //prevent the default form submission
    if (validateForm()) {
      //if the validation passes, you can submit the form here
      alert("Form submitted successfully");
      //add you code to submit the form data
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

import { Outlet, Link } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
  const validateForm = () => {
    const a = document.forms["myForm"]["fusername"].value;
    const b = document.forms["myForm"]["fpassword"].value;
    if (a == "") {
      alert("Username must be filled out");
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
      alert("Form submitted successfully");
      //add you code to submit the form data
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
          Username: <input type="text" name="fusername" />
          Password: <input type="password" name="fpassword" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};
export default Login;

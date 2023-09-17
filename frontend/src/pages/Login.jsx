
import { Outlet, Link } from "react-router-dom";
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
      <html>
      <head>
      <style>{`
         body
         {
           margin:0px;
           background-color:#9ab109;
           background-image:url(image/background.jpg);
           color:#f9fcf5;
           font-family:Arial, Helvetica, sans-serif;
         }
         
         #main{width:600px; height:auto; overflow:hidden; padding-bottom:20px; margin-left:auto; margin-right:auto; 
         border-radius:5px; padding-left:10px; margin-top:100px; border-top:3px double #f1f1f1; 
         border-bottom:3px double #f1f1f1; padding-top:20px;
         }
         
         #main table{font-family:"Comic Sans MS", cursive;}
         /* css code for textbox */
         #main .tb{height:28px; width:230px; border:1px solid #9ab109; color:#fd7838; font-weight:bold; border-left:5px solid #f7f7f7; opacity:0.9;}
         
         #main .tb:focus{height:28px; border:1px solid #9ab109; outline:none; border-left:5px solid #f7f7f7;}
     
         /* css code for button*/
         #main .btn{width:150px; height:32px; outline:none;  color:#f7f7f7; font-weight:bold; border:0px solid #f26724; 
         text-shadow: 0px 0.5px 0.5px #fff; border-radius: 2px; font-weight: 600; color: #9ab109; letter-spacing: 1px; 
         font-size:14px; background-color:#f1f1f1; -webkit-transition: 1s; -moz-transition: 1s; transition: 1s;}
       
         #main .btn:hover{background-color:#9ab109; outline:none;  border-radius: 2px; color:#f1f1f1; border:1px solid #f1f1f1;
         -webkit-transition: 1s; -moz-transition: 1s; transition: 1s; }
      `}</style>
      
      <title>Welcome To Registration Form</title>
      </head>
    
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
      </html>
    );
  };
export default Login;
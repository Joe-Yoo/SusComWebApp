import { Outlet, Link } from "react-router-dom";


const SignUp = () => {
    const validateForm = () => {
        const a = document.forms["myForm"]["fname"].value;
        const b = document.forms["myForm"]["femail"].value;
        const c = document.forms["myForm"]["fusername"].value;
        const d = document.forms["myForm"]["fpassword"].value;
        if (a === "") {
            alert("Name must be filled out");
            return false;
        } else if (b == "") {
            alert("Email must be filled out");
            return false;
        } else if (c == "") {
            alert("Username must be filled out");
            return false;
        } else if (d == "") {
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
                    body {
                        background-color: #9AB106;
                        text-align: center;
                    }
                `}</style>
            </head>
            <body>
                <div>
                    <form
                        name="myForm"
                        action="/action_page.php"
                        onSubmit={handleSubmit}
                        method="post"
                    >
                        Name: <input type="text" name="fname" />
                        Email: <input type="text" name="femail" />
                        Username: <input type="text" name="fusername" />
                        Password: <input type="text" name="fpassword" />
                        <input type="submit" value="Submit" />

                    </form>
                </div>
	        </body>
        </html>
        
    );
  };

export default SignUp;
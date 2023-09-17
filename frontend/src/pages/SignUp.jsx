import { Outlet, Link } from "react-router-dom";

function registration()
    {
    
        var name= document.getElementById("t1").value;
        var email= document.getElementById("t2").value;
        var uname= document.getElementById("t3").value;
        var pwd= document.getElementById("t4").value;			
        var cpwd= document.getElementById("t5").value;
        
        //email id expression code
        var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
        var letters = /^[A-Za-z]+$/;
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
        if(name=='')
        {
            alert('Please enter your name');
        }
        else if(!letters.test(name))
        {
            alert('Name field required only alphabet characters');
        }
        else if(email=='')
        {
            alert('Please enter your user email id');
        }
        else if (!filter.test(email))
        {
            alert('Invalid email');
        }
        else if(uname=='')
        {
            alert('Please enter the user name.');
        }
        else if(!letters.test(uname))
        {
            alert('User name field required only alphabet characters');
        }
        else if(pwd=='')
        {
            alert('Please enter Password');
        }
        else if(cpwd=='')
        {
            alert('Enter Confirm Password');
        }
        else if(!pwd_expression.test(pwd))
        {
            alert ('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
        }
        else if(pwd != cpwd)
        {
            alert ('Password not Matched');
        }
        else if(document.getElementById("t5").value.length < 6)
        {
            alert ('Password minimum length is 6');
        }
        else if(document.getElementById("t5").value.length > 12)
        {
            alert ('Password max length is 12');
        }
        else
        {				                            
               alert('Thank You for Login & You are Redirecting to Sustainable Commute');
               // Redirecting to other page or webste code. 
               window.location = "/"; 
        }
    }
    function clearFunc()
    {
        document.getElementById("t1").value="";
        document.getElementById("t2").value="";
        document.getElementById("t3").value="";
        document.getElementById("t4").value="";
        document.getElementById("t5").value="";
    }

const SignUp = () => {

    return (
        <html>
            <head>
            
            </head>
            <body>
	<div id="main">
	<div class="h-tag">
	<h2>Create Your Account</h2>
	</div>
	
    
	<div class="login">
	<table cellspacing="2" cellpadding="8" >
	<tr>
	<td >Enter Name :</td>
	<td><input type="text" placeholder="Enter user here" id="t1" class="tb" /></td>
	</tr>
	<tr>
	<td >Enter Email ID :</td>
	<td><input type="text" placeholder="Enter Email ID here" id="t2" class="tb" /></td>
	</tr>
	<tr>
	<td>Enter Username :</td>
	<td><input type="text" placeholder="Enter Username here" id="t3" class="tb" /></td>
	</tr>
	<tr>
	<td>Enter Password :</td>
	<td><input type="password" placeholder="Enter Password here" id="t4" class="tb" /></td>
	</tr>
	<tr>
	<td>Enter Confirm Password :</td>
	<td><input type="password" placeholder="Enter Password here" id="t5" class="tb" /></td>
	</tr>
	<tr>
	<td></td>
	<td>
	<input type="reset" value="Clear Form" onclick="clearFunc()" id="res" class="btn" />
	<input type="submit" value="Create Account" class="btn" onclick="registration()" /></td>
	</tr>
	</table>
	</div>
	
	</div>
	
	</body>
        </html>
        
    );




  };

export default SignUp;
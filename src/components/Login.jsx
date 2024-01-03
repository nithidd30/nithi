import React from 'react';
import './Login.css';
function Login() {
  return (
      <body>
    <div>
      <center>

     <h1>Effortless Maintenance, Effortless Booking!</h1>
      </center>
     
<br></br>
<center>


   <fieldset>
    <h2>   
      Welcome Back :)
    </h2>
    
    <br></br>
    
    
      <label>Name:</label><br></br>
        <input type="text" placeholder="Name"></input>
      
       <br></br>
       <br></br>
      <label>Email:</label><br></br>
      
          <input type="email" placeholder="E-mail"></input>
        
        <br></br>
        <br></br>
        
        <center>

        <button>Login</button><br></br>
        <br></br>
        </center>
        <center>
        <label>New User?</label><button>Sign up</button>
        </center>
         
   </fieldset>
 
</center>
    </div>
        </body>
   
  );
}

export default Login;
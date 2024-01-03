import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Signin.css';
 const SignInNo=() =>{
    const navigate = useNavigate();
    return(
        <div className="sin">
            <center>
                <h1>Sign up</h1>
                <h3><b>Create your account</b></h3>
                <fieldset>
                    <form>
                        <table>
                        <tr>
                            <td>
                                <b>User Name</b>
                            </td>
                            <td>
                                <input type="text" placeholder='Enter your Name'></input>
                            </td>
                        </tr>
                        <br></br>
                        <tr>
                            <td>
                                <b>E-mail (Optional)</b>
                            </td>
                            <td>
                            <input type="email" placeholder='Enter your E-mail'></input>
                            </td>
                        </tr>
                        <br></br>
                        <tr>
                            <td>
                                <b>Mobile Number</b>
                            </td>
                            <td>
                                <input type="number" placeholder='Enter your mobile number'></input>
                            </td>
                        </tr>
                        <br></br>
                        <tr>
                            <td>
                                <b>Password</b>
                            </td>
                            <td>
                                <input type="password" placeholder='Create a strong password'></input>
                            </td>
                        </tr>
                        <br></br>
                        <tr>
                            <td>
                                <b>Confirm Password</b>
                            </td>
                            <td>
                                <input type="password" placeholder='Re-Enter your password'></input>
                            </td>
                        </tr>
                        </table><br></br><br></br>
                        <button onClick={() => navigate('/Adress')}>SIGN-UP</button>
                        <br></br>
                        <p>OR</p>
                        <button>Sign up with Google</button><br></br><br></br>
                        
                        <p>Already a user?</p>
                        <button>Login</button>
                    </form>
                </fieldset>
            </center>
        </div>

    );
}
export default SignInNo;
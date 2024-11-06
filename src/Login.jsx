import React from "react";
import { useState } from "react";
import "./Login.css";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handlesuccess } from "../utils";
import { handleerror } from "../utils";

const Login = () => {
  const [focused, setFocused] = useState(false);
  const [focusedPassword, setFocusedPassword] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handlechange = (e)=>{
    const newemail= e.target.value;
    setemail(newemail)
   
  }

  const passwordhandlechange = (e)=>{
    const newpassword= e.target.value;
    setpassword(newpassword)
  }
  const navigate = useNavigate();
  const handlelogin = async (e) =>{
    e.preventDefault();
    const logindata = {email:email, password:password}
    console.log(logindata)
    
    setemail("")
    try {
        const response = await fetch("http://localhost:5000/route/login",
            {  method:"POST",
                headers: {
              "Content-Type":"application/json",
            },
            body:JSON.stringify(logindata),
          
          }); 

          let result = await response.json()

         
          console.log(response);
          console.log(result)
       

          let {msg, success,error,token,email} = result

          if (!success){
         console.log("login failed")
         handleerror(msg)
          }
          if (success){
           console.log("login succesfull")
           handlesuccess("login succesfull")
           setTimeout(() => {
            navigate("/")
            
           },1000);
           localStorage.setItem("token",token)
           localStorage.setItem("user",email)
           localStorage.setItem("user1",userExist)
          
        
        
     
          }


   
        
    } catch (error) {
        console.log(error)
        
    }

  }





  return (
    <><Navbar /><div className="auth-container">
          <div className="auth-image">
              <img
                  src="src/images/login_image1.png" // Update this with the actual path of the image you uploaded
                  alt="Login Illustration" />
          </div>
          <div className="auth-separator"></div>
          <div className="auth-form">
              <h2>Welcome!</h2>
              <form onSubmit={handlelogin}>
                  <div className={`auth-input-container ${focused ? "auth-focused" : ""}`}>
                      <input
                          type="email"
                          id="email"
                          value={ email }
                          onChange={ handlechange }
                          required
                          onFocus={() => setFocused(true)}
                          onBlur={(e) => !e.target.value && setFocused(false)} />
                      <label htmlFor="email">Email Address</label>
                      <div className="auth-underline"></div>
                  </div>

                  {/* Password Input */}
                  <div
                      className={`auth-input-container ${focusedPassword ? "auth-focused" : ""}`}
                  >
                      <input
                          type={passwordVisible ? "text" : "password"}
                          id="password"
                          value={ password}
                          onChange={ passwordhandlechange }
                          required
                          onFocus={() => setFocusedPassword(true)}
                          onBlur={(e) => !e.target.value && setFocusedPassword(false)} />
                      <label htmlFor="password">Password</label>
                      <div className="auth-underline"></div>
                      <span className="auth-toggle-password" onClick={togglePasswordVisibility}>
                          {passwordVisible ? (
                              <VisibilityOffOutlinedIcon />
                          ) : (
                              <VisibilityOutlinedIcon />
                          )}
                      </span>
                  </div>

                  <div className="auth-login-options">
                      <div>
                          <input type="checkbox" id="remember" name="remember" />
                          <label htmlFor="remember">
                              <b>Remember me</b>
                          </label>
                      </div>
                      <a href="#" className="auth-forgot-password">
                          Forgot password?
                      </a>
                  </div>
                  <button type="submit" className="auth-login-btn">
                      Sign in
                  </button>
              </form  >
              <div className="auth-signup-link">
                  Don’t have an account? <Link to="/signup"><a href="#">Sign up</a></Link>
              </div>
              <ToastContainer/>
          </div>
          
      </div></>
  );
};

export default Login;

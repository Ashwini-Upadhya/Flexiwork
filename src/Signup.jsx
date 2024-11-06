import React, { useState } from "react";
import "./Signup.css";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import Navbar from "./Navbar";
import { Link, useNavigate} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handlesuccess } from "../utils";
import { handleerror } from "../utils";




const UniqueSignup = () => {
  const [userType, setUserType] = useState("JobSeeker");
  const [focused, setFocused] = useState(false);
  const [focusedPassword, setFocusedPassword] = useState(false);
  const [focusedConfirmPassword, setFocusedConfirmPassword] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [email, setemail] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const validatePassword = (password) => {
    const errorList = [];
    if (password.length < 6) {
      errorList.push("Password must be at least 6 characters long.");
    }
    // if (!/[A-Z]/.test(password)) {
    //   errorList.push("Password must contain at least one uppercase letter.");
    // }
    // if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    //   errorList.push("Password must contain at least one special character.");
    // }
    // if (!/[0-9]/.test(password)) {
    //   errorList.push("Password must contain at least one number.");
    // }
    return errorList;
  };
  const navigate = useNavigate();
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    const validationErrors = validatePassword(newPassword);
    setErrors(validationErrors);
    const newemail= e.target.value;
    setemail(newemail)
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrors(["Passwords do not match."]);
    } else {
      setErrors(validatePassword(password));
      if (errors.length === 0) {
        // Handle signup logic
        console.log("Signup successful");
        const userdata = { email:email, password:password, role:userType}
        console.log(userdata)
        try {
             const response = await fetch("http://localhost:5000/route/signup",
            {  method:"POST",
                headers: {
              "Content-Type":"application/json",
            },
            body:JSON.stringify(userdata),
          
          }); 

        let result = await response.json()
        
  

         
         console.log(response);
         console.log(result)
           let {Msg, success,error} = result

           if (!success){
            handleerror(Msg)
           }
           if (success){


            handlesuccess("account created successfully")
            setTimeout(() => {
              navigate("/login")
              
             },1000);
         
           }
    
    

     
        } catch (error) {
          console.log("register",error);
            
        }

      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="unique-auth-container">
        <div className="unique-auth-form">
          <h2 className="CaA">Create an Account!</h2>

          {/* Buttons to select user type */}
          <div className="user-type-buttons">
            <button
              type="button"
              id="jobseeker"
              className={userType === "JobSeeker" ? "active" : ""}
              onClick={() => setUserType("JobSeeker")}
            >
              JobSeeker
            </button>
            <button
              type="button"
              className={userType === "Recruiter" ? "active" : ""}
              onClick={() => setUserType("Recruiter")}
            >
              Recruiter
            </button>
          </div>

          <form onSubmit={handleSignup}>
            <div
              className={`unique-auth-input-container ${
                focused ? "unique-auth-focused" : ""
              }`}
            >
              <input
                type="email"
                id="email"
                onChange={(e)=>setemail(e.target.value)}
                required
                onFocus={() => setFocused(true)}
                onBlur={(e) => !e.target.value && setFocused(false)}
              />
              <label htmlFor="email">
                {userType === "JobSeeker"
                  ? "Email Address"
                  : "Company Email Address"}
              </label>
              <div className="unique-auth-underline"></div>
            </div>

            {/* Password Input */}
            <div
              className={`unique-auth-input-container ${
                focusedPassword ? "unique-auth-focused" : ""
              }`}
            >
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
                onFocus={() => setFocusedPassword(true)}
                onBlur={(e) => !e.target.value && setFocusedPassword(false)}
              />
              <label htmlFor="password">Password</label>
              <div className="unique-auth-underline"></div>
              <span
                className="unique-auth-toggle-password"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? (
                  <VisibilityOffOutlinedIcon />
                ) : (
                  <VisibilityOutlinedIcon />
                )}
              </span>
            </div>

            {/* Confirm Password Input */}
            <div
              className={`unique-auth-input-container ${
                focusedConfirmPassword ? "unique-auth-focused" : ""
              }`}
            >
              <input
                type={confirmPasswordVisible ? "text" : "password"}
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                onFocus={() => setFocusedConfirmPassword(true)}
                onBlur={(e) => !e.target.value && setFocusedConfirmPassword(false)}
              />
              <label htmlFor="confirm-password">Confirm Password</label>
              <div className="unique-auth-underline"></div>
              <span
                className="unique-auth-toggle-password" 
                onClick={toggleConfirmPasswordVisibility}
              >
                {confirmPasswordVisible ? (
                  <VisibilityOffOutlinedIcon />
                ) : (
                  <VisibilityOutlinedIcon />
                )}
              </span>
            </div>

            {/* Display password validation errors */}
            {errors.length > 0 && (
              <ul className="unique-password-errors">
                {errors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            )}

            <button type="submit" className="unique-auth-login-btn">
              Sign up
            </button>
          </form>
          <div className="unique-auth-signup-link">
            Already have an account? <Link to='/login'><a href="#">Sign in</a></Link>
          </div>
        </div>

        <div className="unique-auth-separator"></div>

        <div className="unique-auth-image">
          <img src="\src\images\signup_image1.png" alt="Signup Illustration" />
        </div>
        <ToastContainer/>
      </div>
    </>
  );
};

export default UniqueSignup;

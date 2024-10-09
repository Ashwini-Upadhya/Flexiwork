import React from "react";
import { useState } from "react";
import "./Login.css";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Login = () => {
  const [focused, setFocused] = useState(false);
  const [focusedPassword, setFocusedPassword] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

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
              <form>
                  <div className={`auth-input-container ${focused ? "auth-focused" : ""}`}>
                      <input
                          type="email"
                          id="email"
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
              </form>
              <div className="auth-signup-link">
                  Don’t have an account? <Link to="/signup"><a href="#">Sign up</a></Link>
              </div>
          </div>
      </div></>
  );
};

export default Login;

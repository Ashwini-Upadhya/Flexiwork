import React from 'react';
import './Hero_Section.css';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Navbar from './Navbar';

const Hero_Section = () => {
  return (
    <><Navbar /><section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-headline">
            <span className="text-light-blue">Unlock</span> <span className="text-black">Ambition</span>
          </h1>
          <p className="hero-paragraph">
            Apply to a plethora of hiring opportunities & work with your dream company!
          </p>
          <div className="hero-buttons">
            <Link to="/findjob" className="btn btn-primary">
              Find Jobs
            </Link>
            {/* Use Link to navigate to the job post form */}
            <Link to="/post-form" className="btn btn-secondary">
              Post Jobs
            </Link>
          </div>
        </div>
        <div className="hero-image">
          {/* Replace with your image */}
          <img src="src/images/h1.png" alt="Hero" />
        </div>
      </div>
    </section></>
  );
};

export default Hero_Section;

import React from 'react';
import './Hero_section2.css'; // Ensure this file includes the updated CSS
import Footer from './Footer';
import { Link } from 'react-router-dom';
// import Hero_Slider from './Hero_Slider';

const Hero_section2_Internship = () => {
  return ( 
    <>
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-headline">
              <span className="text-light-blue">Post Your</span> <span className="text-black">Internships <br />& Internships</span>
            </h1>
            <p className="hero-paragraph">
              Find the right candidate from a diverse talent
              <br />
              pool for your role
            </p>
            <div className="hero-buttons">
              <Link to="/post-form" className="btn btn-primary">
                Post Internships Now
              </Link>
            </div>
          </div>
          <div className="hero-image">
            {/* Replace with your image */}
            <img src="src/images/h2.png" alt="Hero" />
          </div>
          {/* <Hero_Slider/> */}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Hero_section2_Internship;

import React from 'react';
import './Hero_section2.css'; // Ensure this file includes the updated CSS
// import Hero_Slider from './Hero_Slider';

const Hero_section2 = () => {
  return ( 
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-headline">
            <span className="text-light-blue">Post Your</span> <span className="text-black">Jobs <br/>& Internships</span>
          </h1>
          <p className="hero-paragraph">
          Find the right candidate from a diverse talent
          <br />
          pool for your role
          </p>
          <div className="hero-buttons">
  <a href="#find-jobs" className="btn btn-primary">
    Post Jobs Now
  </a>
  
</div>                                                                          

        </div>
        <div className="hero-image">
          {/* Replace with your image */}
          <img src="src\images\h2.png" alt="Hero" />
        </div>
        {/* <Hero_Slider/> */}
      </div>
    </section>
  );
};

export default Hero_section2;


import React from 'react';
import './CategoriesSection.css'; // We will create this CSS file

const CategoriesSection = () => {
  return (
    <section className="categories-section">
      <div className="category-card internship">
        <h2>Internship</h2>
       
        <p className='i-p'> <b>Gain</b> <br /> Practical <br />Experience</p>
        <img className='images' src="src\images\b6.png" alt="Internship" />
      </div>
      <div className="category-card learn">
        <h2>Learn</h2>
        <p className='l-p'> <b>Expand</b> <br /> Knowledge Base</p>
        <img src="src\images\b3 (1).png" alt="Learn" />
      </div>
      <div className="category-card jobs">
        <h2>Jobs</h2>
        <p className='j-p'> <b>Explore</b> <br /> Diverse Careers</p>
        <img src="src\images\b4 (1).png" alt="Jobs" />
      </div>
      <div className="category-card practice">
        <h2>Practice</h2>
        <p className='p-p'> <b>Refine</b><br /> Skills Daily</p>
        <img src="src\images\b5 (1).png" alt="Practice" />
      </div>
      <div className="category-card compete">
        <h2>Compete</h2>
        <p className='c-p'> <b>Battle</b><br /> For Excellence</p>
        <img src="src\images\b7.png" alt="Compete" />
      </div>
      <div className="category-card mentorship">
        <h2>Mentorship</h2>
        <p className='m-p'><b>Guidance</b><br /> From Top Mentors</p>
        <img src="src\images\b8 (1).png" alt="Mentorship" />
      </div>
    </section>
  );
};

export default CategoriesSection;

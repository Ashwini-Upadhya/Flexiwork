import React from 'react';
import './JobsCategory.css'; // Import the CSS file

function InternshipCategory() {
    return (
        <div className="jobs-category-container"> {/* Background image applied here */}
            <div className="category-wrapper">
                <h1 className="jobs-category-heading"><span className='job'>Internship</span><span className='category'>Category</span> </h1>
                <div className="all-btn">
                    <button className="category-btn">
                        <span className='sd' role="img" aria-label="software-development">💻</span> Software Development
                    </button>
                    <button className="category-btn">
                        <span className='ds' role="img" aria-label="data-science">📊</span> Data Science
                    </button>
                    <button className="category-btn">
                        <span className='gd' role="img" aria-label="graphic-design">🎨</span> Graphic Design
                    </button>
                    <button className="category-btn Y">
                        <span className='m' role="img" aria-label="marketing">📣</span> Marketing
                    </button>
                    <br />
                    <button className="category-btn">
                        <span className='f' role="img" aria-label="finance">💰</span> Finance
                    </button>
                    <button className="category-btn explore-all">
                    <a >  Explore all <span>→</span></a>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default InternshipCategory;

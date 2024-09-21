import React, { useState } from "react";
import JobCard from "./JobCard";
import "./BrowseJobs.css"; // Import styles
import { jobs, internships, challenges } from "./Data.json"; // Import all data

const BrowseJobs = () => {
  const [selectedCategory, setSelectedCategory] = useState('Jobs');

  // Function to determine which data to display based on selected category
  const getFilteredData = () => {
    if (selectedCategory === "Jobs") return jobs;
    if (selectedCategory === "Internships") return internships;
    if (selectedCategory === "Hiring Challenges") return challenges;
  };

  return (
    <div className="browse-jobs">
      <h1>Browse Popular {selectedCategory}</h1>
      <p>Find the job/Internship that fits your career aspirations.</p>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        <button
        id="job"
          className={selectedCategory === "Jobs" ? "active" : ""}
          onClick={() => setSelectedCategory("Jobs")}
        >
          Jobs
        </button>
        <button
        
          className={selectedCategory === "Internships" ? "active" : ""}
          onClick={() => setSelectedCategory("Internships")}
        >
          Internships
        </button>
        <button
          className={selectedCategory === "Hiring Challenges" ? "active" : ""}
          onClick={() => setSelectedCategory("Hiring Challenges")}
        >
          Hiring Challenges
        </button>
      </div>

      {/* Job Cards */}
      <div className="job-cards-container">
        {getFilteredData().map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    </div>
  );
};

export default BrowseJobs;

import React, { useState } from 'react';
import './JobPostCard.css';
import Navbar from './Navbar';
import FindJob from './FindJob';

const JobPostCard = () => {
  const [selectedJobIndex, setSelectedJobIndex] = useState(0); // Set default active index to 0

  const jobData = [
    {
      title: "HR Consultant / Recruiter",
      company: "Just Career Management",
      location: "Indore, Mumbai Suburbs",
      dateUpdated: "Oct 8, 2024",
      applied: 1,
      deadline: "14 days left",
      impressions: 260,
      experience: "Experienced Professionals",
      type: "Job",
      gender: "Female",
      logo: "https://via.placeholder.com/50", // Placeholder logo for HR Consultant
    },
    {
      title: "Site Engineer Associate",
      company: "AACSYS Engineers",
      location: "",
      dateUpdated: "",
      applied: 0,
      deadline: "2 months left",
      impressions: 585,
      experience: "Experienced Professionals",
      type: "Job",
      gender: "Male",
      logo: "https://via.placeholder.com/50", // Placeholder logo for Site Engineer
    },
    {
      title: "Guest Service Associate",
      company: "Cococart Ventures Pvt Ltd",
      location: "",
      dateUpdated: "",
      applied: 1,
      deadline: "29 days left",
      impressions: 300,
      experience: "Fresher",
      type: "Job",
      gender: "Female",
      logo: "https://via.placeholder.com/50", // Placeholder logo for Guest Service
    },
    {
        title: "Guest Service Associate",
        company: "Cococart Ventures Pvt Ltd",
        location: "",
        dateUpdated: "",
        applied: 1,
        deadline: "29 days left",
        impressions: 300,
        experience: "Fresher",
        type: "Job",
        gender: "Female",
        logo: "https://via.placeholder.com/50", // Placeholder logo for Guest Service
      },
  ];

  const handleJobClick = (index) => {
    setSelectedJobIndex(index);
  };

  return (
    <><Navbar />
    <FindJob/>
    <div className="jobpostcard__container">
          {/* Job Cards List */}
          <div className="jobpostcard__list">
              {jobData.map((job, index) => (
                  <div
                      key={index}
                      className={`jobpostcard__card ${selectedJobIndex === index ? 'active' : ''}`}
                      onClick={() => handleJobClick(index)}
                  >
                      <div className="jobpostcard__header">
                          <div className="jobpostcard__logo">
                              <img src={job.logo} alt={`${job.company} logo`} />
                          </div>
                          <div className="jobpostcard__info">
                              <div className="jobpostcard__tag">{job.type}</div>
                              <h3 className="jobpostcard__title">{job.title}</h3>
                              <p className="jobpostcard__company">{job.company}</p>
                              <div className="jobpostcard__meta">
                                  <p className="jobpostcard__applied">
                                      <span className="jobpostcard__icon">👤</span> {job.applied} Applied
                                  </p>
                                  <p className="jobpostcard__deadline">{job.deadline}</p>
                              </div>
                              <div className="jobpostcard__experience">{job.experience}</div>
                          </div>
                      </div>
                  </div>
              ))}
          </div>

          {/* Job Details Section */}
          <div className="jobpostcard__details">
              {jobData[selectedJobIndex] ? (
                  <>
                      <div className="jobpostcard__details-header">
                          <div className="jobpostcard__details-logo">
                              <img src={jobData[selectedJobIndex].logo} alt={`${jobData[selectedJobIndex].company} logo`} />
                          </div>
                          <div>
                              <h2 className="jobpostcard__details-title">{jobData[selectedJobIndex].title}</h2>
                              <p className="jobpostcard__details-company">{jobData[selectedJobIndex].company}</p>
                              <p className="jobpostcard__details-location">{jobData[selectedJobIndex].location}</p>
                              <p className="jobpostcard__details-updated">Updated On: {jobData[selectedJobIndex].dateUpdated}</p>
                          </div>
                      </div>
                      <div className="jobpostcard__details-action">
                          <button className="jobpostcard__apply-btn">Apply</button>
                      </div>
                      <div className="jobpostcard__details-info">
                          <p><span className="jobpostcard__icon">📅</span> Application Deadline: {jobData[selectedJobIndex].deadline}</p>
                          <p><span className="jobpostcard__icon">⭐</span> Impressions: {jobData[selectedJobIndex].impressions}</p>
                      </div>
                      <div className="jobpostcard__eligibility">
                          <h3>Eligibility</h3>
                          <p>{jobData[selectedJobIndex].experience}</p>
                          <p>Gender: {jobData[selectedJobIndex].gender}</p>
                      </div>
                  </>
              ) : (
                  <p className="jobpostcard__select-prompt">Select a job to view details</p>
              )}
          </div>
      </div></>
  );
};

export default JobPostCard;

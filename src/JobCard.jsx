import React from "react";
import "./JobCard.css"; // Import styles

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <div className={`job-card-header ${job.bgColor}`}>
        <img src={job.logo} alt="Company Logo" className="job-logo" />
      </div>
      <div className="job-card-body">
        <p>{job.type}</p>
        <p>{job.cost}</p>
        <h3>{job.title}</h3>
        <p className="company-name">{job.company}</p>
        <div className="job-stats">
          {/* <p>👁 {job.views} Views</p> */}
          {/* <p>🕒 {job.timeLeft}</p> */}
        </div>
      </div>
    </div>
  );
};

export default JobCard;

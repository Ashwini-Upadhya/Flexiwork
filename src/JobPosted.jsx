import React from 'react';
import './JobPosted.css';

const JobPosted = () => {
  // Example data with logos, job titles, company names, posting date, and application count
  const postedJobs = [
    {
      logo: 'company-a-logo.png',
      jobTitle: 'Software Engineer',
      companyName: 'Company A',
      postingDate: '2024-10-15',
      applicantsCount: 25 // Number of applicants for this job
    },
    {
      logo: 'company-b-logo.png',
      jobTitle: 'Data Analyst',
      companyName: 'Company B',
      postingDate: '2024-10-10',
      applicantsCount: 18
    },
    {
      logo: 'company-c-logo.png',
      jobTitle: 'Product Manager',
      companyName: 'Company C',
      postingDate: '2024-09-25',
      applicantsCount: 10
    }
  ];

  return (
    <div className="job-posted-container-unique">
      <h2 className="job-posted-title-unique">Posted Jobs</h2>
      <div className="job-posted-separator-unique"></div>
      <ul className="job-posted-list-unique">
        {postedJobs.map((job, index) => (
          <li key={index} className="job-posted-item-unique">
            <div className="job-posted-logo-unique">
              <img src={job.logo} alt={`${job.companyName} Logo`} />
            </div>
            <div className="job-posted-details-unique">
              <h4 className="job-posted-job-title-unique">{job.jobTitle}</h4>
              <p className="job-posted-company-name-unique">{job.companyName}</p>
              <p className="job-posted-date-unique">Posted on: {job.postingDate}</p>
              <p className="job-posted-applicants-count-unique">Applicants: {job.applicantsCount}</p>
            </div>
            <div className="job-posted-status-unique">
              <button className="job-posted-inquiry-button-unique">Enquire</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobPosted;

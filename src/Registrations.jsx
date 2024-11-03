import React from 'react';
import './Registrations.css';

const Registrations = () => {
  // Example data with logos, job titles, company names, posting date, and application date
  const appliedCompanies = [
    {
      logo: 'company-a-logo.png',
      jobTitle: 'Software Engineer',
      companyName: 'Company A',
      postingDate: '2024-10-15',
      applicationDate: '2024-10-20'
    },
    {
      logo: 'company-b-logo.png',
      jobTitle: 'Data Analyst',
      companyName: 'Company B',
      postingDate: '2024-10-10',
      applicationDate: '2024-10-18'
    },
    {
      logo: 'company-c-logo.png',
      jobTitle: 'Product Manager',
      companyName: 'Company C',
      postingDate: '2024-09-25',
      applicationDate: '2024-10-02'
    }
  ];

  return (
    <div className="registrations-page">
      <h2>Registrations/Application</h2>
      <div className="registration_saperter"></div>
      <ul className="company-list">
        {appliedCompanies.map((company, index) => (
          <li key={index} className="company-item">
            <div className="company-logo">
              <img src={company.logo} alt={`${company.companyName} Logo`} />
            </div>
            <div className="company-details">
              <h4 className="job-title">{company.jobTitle}</h4>
              <p className="company-name">{company.companyName}</p>
              <p className="posting-date">Posted on: {company.postingDate}</p>
              <p className="application-date">Applied on: {company.applicationDate}</p>
            </div>
            <div className="submission-status">
              <button className="submitted-btn">Submitted</button>
              {/* <span className="arrow-symbol">→</span> */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Registrations;

import React, { useState } from 'react';
import './FindJob.css'; // Import the CSS file for styling
import Navbar from './Navbar';
import JobPostCard from './JobPostCard';

const FindJob = () => {
  const [selectedJobType, setSelectedJobType] = useState([]);
  const [selectedJobTime, setSelectedJobTime] = useState([]);
  const [selectedWorkplaceType, setSelectedWorkplaceType] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);

  const [tempJobTime, setTempJobTime] = useState([]);
  const [tempWorkplaceType, setTempWorkplaceType] = useState([]);
  const [tempLocation, setTempLocation] = useState([]);
  const [tempCategory, setTempCategory] = useState([]);

  const [dropdowns, setDropdowns] = useState({
    jobs: false,
    jobTime: false,
    workplaceType: false,
    location: false,
    category: false,
  });

  const [isJobActive, setIsJobActive] = useState(true);

  const toggleDropdown = (dropdownName) => {
    setDropdowns((prevState) => {
      const newDropdowns = {
        jobs: false,
        jobTime: false,
        workplaceType: false,
        location: false,
        category: false,
      };
      newDropdowns[dropdownName] = !prevState[dropdownName]; 
      return newDropdowns;
    });
  };
  

  const handleMultipleChange = (setTempFunc, value) => {
    setTempFunc((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const applyJobTimeFilters = () => {
    setSelectedJobTime(tempJobTime);
    toggleDropdown('jobTime');
  };

  const applyGeneralFilters = () => {
    setSelectedWorkplaceType(tempWorkplaceType);
    setSelectedLocation(tempLocation);
    setSelectedCategory(tempCategory);
    
    // Close dropdowns after applying filters
    setDropdowns({
      jobs: false,
      workplaceType: false,
      location: false,
      category: false,
    });
  };

  const handleCheckboxClick = (e) => {
    e.stopPropagation(); // Prevent dropdown from closing
  };

  return (
    <div className="findjob-container">
      {/* Filter Section */}
      <div className="job-filter-section">
        {/* Job/Internship Toggle Button */}
        <button className="job-filter-btn-blue" onClick={() => toggleDropdown('jobs')}>
          {isJobActive ? 'Job' : 'Internship'} <span className="job-arrow">&#9660;</span>
          {dropdowns.jobs && (
            <div className="jobIntern-container">
              <div onClick={() => setIsJobActive((prev) => !prev)}>
                {isJobActive ? 'Internship' : 'Job'}
              </div>
            </div>
          )}
        </button>

        {/* Job Time Filter */}
        <button className="job-filter-btn" onClick={() => toggleDropdown('jobTime')}>
          Job Time <span className="job-arrow">&#9660;</span>
          {dropdowns.jobTime && (
            <div className="job-dropdown-content job-multiple-select">
              <label>
                <input
                  type="checkbox"
                  onChange={() => handleMultipleChange(setTempJobTime, 'Full Time')}
                  checked={tempJobTime.includes('Full Time')}
                  onClick={handleCheckboxClick} // Prevent closing on checkbox click
                />
                Full Time
              </label>
              <label>
                <input
                  type="checkbox"
                  onChange={() => handleMultipleChange(setTempJobTime, 'Part Time')}
                  checked={tempJobTime.includes('Part Time')}
                  onClick={handleCheckboxClick} // Prevent closing on checkbox click
                />
                Part Time
              </label>
              <button className="apply-btn" onClick={applyJobTimeFilters}>
                Apply
              </button>
            </div>
          )}
        </button>

        {/* Workplace Type Filter */}
        <button className="job-filter-btn" onClick={() => toggleDropdown('workplaceType')}>
          Workplace Type <span className="job-arrow">&#9660;</span>
          {dropdowns.workplaceType && (
            <div className="job-dropdown-content job-multiple-select">
              <label>
                <input
                  type="checkbox"
                  onChange={() => handleMultipleChange(setTempWorkplaceType, 'In Office')}
                  checked={tempWorkplaceType.includes('In Office')}
                  onClick={handleCheckboxClick} // Prevent closing on checkbox click
                />
                In Office
              </label>
              <label>
                <input
                  type="checkbox"
                  onChange={() => handleMultipleChange(setTempWorkplaceType, 'Work From Home')}
                  checked={tempWorkplaceType.includes('Work From Home')}
                  onClick={handleCheckboxClick} // Prevent closing on checkbox click
                />
                Work From Home
              </label>
              <label>
                <input
                  type="checkbox"
                  onChange={() => handleMultipleChange(setTempWorkplaceType, 'Hybrid')}
                  checked={tempWorkplaceType.includes('Hybrid')}
                  onClick={handleCheckboxClick} // Prevent closing on checkbox click
                />
                Hybrid
              </label>
              <button className="apply-btn" onClick={applyGeneralFilters}>
                Apply
              </button>
            </div>
          )}
        </button>

        {/* Location Filter with Multiple Selection */}
        <button className="job-filter-btn" onClick={() => toggleDropdown('location')}>
          Location <span className="job-arrow">&#9660;</span>
          {dropdowns.location && (
            <div className="job-dropdown-content job-multiple-select">
              <label>
                <input
                  type="checkbox"
                  onChange={() => handleMultipleChange(setTempLocation, 'Mumbai')}
                  checked={tempLocation.includes('Mumbai')}
                  onClick={handleCheckboxClick} // Prevent closing on checkbox click
                />
                Mumbai
              </label>
              <label>
                <input
                  type="checkbox"
                  onChange={() => handleMultipleChange(setTempLocation, 'Bengaluru')}
                  checked={tempLocation.includes('Bengaluru')}
                  onClick={handleCheckboxClick} // Prevent closing on checkbox click
                />
                Bengaluru
              </label>
              <label>
                <input
                  type="checkbox"
                  onChange={() => handleMultipleChange(setTempLocation, 'Delhi')}
                  checked={tempLocation.includes('Delhi')}
                  onClick={handleCheckboxClick} // Prevent closing on checkbox click
                />
                Delhi
              </label>
              <label>
                <input
                  type="checkbox"
                  onChange={() => handleMultipleChange(setTempLocation, 'Hyderabad')}
                  checked={tempLocation.includes('Hyderabad')}
                  onClick={handleCheckboxClick} // Prevent closing on checkbox click
                />
                Hyderabad
              </label>
              <label>
                <input
                  type="checkbox"
                  onChange={() => handleMultipleChange(setTempLocation, 'Pune')}
                  checked={tempLocation.includes('Pune')}
                  onClick={handleCheckboxClick} // Prevent closing on checkbox click
                />
                Pune
              </label>
              <button className="apply-btn" onClick={applyGeneralFilters}>
                Apply
              </button>
            </div>
          )}
        </button>

        {/* Category Filter */}
        <button className="job-filter-btn" onClick={() => toggleDropdown('category')}>
          Category <span className="job-arrow">&#9660;</span>
          {dropdowns.category && (
            <div className="job-dropdown-content job-multiple-select">
              <label>
                <input
                  type="checkbox"
                  onChange={() => handleMultipleChange(setTempCategory, 'Software')}
                  checked={tempCategory.includes('Software')}
                  onClick={handleCheckboxClick} // Prevent closing on checkbox click
                />
                Software
              </label>
              <label>
                <input
                  type="checkbox"
                  onChange={() => handleMultipleChange(setTempCategory, 'Marketing')}
                  checked={tempCategory.includes('Marketing')}
                  onClick={handleCheckboxClick} // Prevent closing on checkbox click
                />
                Marketing
              </label>
              <label>
                <input
                  type="checkbox"
                  onChange={() => handleMultipleChange(setTempCategory, 'Design')}
                  checked={tempCategory.includes('Design')}
                  onClick={handleCheckboxClick} // Prevent closing on checkbox click
                />
                Design
              </label>
              <label>
                <input
                  type="checkbox"
                  onChange={() => handleMultipleChange(setTempCategory, 'Sales')}
                  checked={tempCategory.includes('Sales')}
                  onClick={handleCheckboxClick} // Prevent closing on checkbox click
                />
                Sales
              </label>
              <label>
                <input
                  type="checkbox"
                  onChange={() => handleMultipleChange(setTempCategory, 'HR')}
                  checked={tempCategory.includes('HR')}
                  onClick={handleCheckboxClick} // Prevent closing on checkbox click
                />
                HR
              </label>
              <button className="apply-btn" onClick={applyGeneralFilters}>
                Apply
              </button>
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default FindJob;

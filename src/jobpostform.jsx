import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { useState } from "react";
import Select from '@mui/material/Select'; // Use MUI Select
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Chip from '@mui/material/Chip';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import './jobpostform.css';
import cities from './indianCities';
import  Category  from './jCategory';
import Skills from './skillsReq';
  
  // Multi-select styling
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  
  function getStyles(city, selectedCities, theme) {
    return {
      fontWeight: selectedCities.includes(city)
        ? theme.typography.fontWeightMedium
        : theme.typography.fontWeightRegular,
    };
  }

  function getStyles1(category, selectedCategories, theme) {
    return {
      fontWeight: selectedCategories.includes(category)
        ? theme.typography.fontWeightMedium
        : theme.typography.fontWeightRegular,
    };
  }

  function getStyles2(skill, selectedSkills, theme) {
    return {
      fontWeight: selectedSkills.includes(skill)
        ? theme.typography.fontWeightMedium
        : theme.typography.fontWeightRegular,
    };
  }

export default function Jobpostform() {
    const theme = useTheme();
    let [formdata, setFromdata] = useState({
        companyName: "",
        companyLogo: "",
        jobTitle: "",
        jobNature: "",
        jobTime: "",
        workplaceType: "",
        workLocation: [],
        jobCategory: [],
        skillsRequired: [],
        eligibility: "",
        experienceRequired: "",
        fresherPassOutYears: [],
        salaryType: "",
        salaryRange: "",
        otherBenefits: "",
        jobDescription: ""
    });

    const[allSkills , setAllSkills] = useState(Skills);

    const [allCategories , setAllCategories] = useState(Category);

    const [allCities, setAllCities] = useState(cities);

    let [JobIntern , setJobIntern ] = useState("Jobs");

    let [WorkType , setWorkType] = useState('In Office')

    let [jobTime , setJobTime] = useState("Full Time");

    let handleinput = (event) => {
        const { name, value } = event.target;
        setFromdata((currdata) => ({
            ...currdata,
            [name]: value,
        }));
    };

    let handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFromdata((currdata) => ({
                    ...currdata,
                    companyLogo: reader.result // Store the image URL
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    // Handle multi-select and adding new city
  const handleCityChange = (event) => {
    const { target: { value } } = event;
    if (value.includes("Add City")) {
      const newCity = prompt("Enter the city name:"); // Prompt for custom city
      if (newCity && !allCities.includes(newCity)) {
        setAllCities([...allCities, newCity]); // Add the custom city to the list
        setFromdata((currdata) => ({
          ...currdata,
          workLocation: [...currdata.workLocation, newCity], // Select the newly added city
        }));
      }
    } else {
      setFromdata((currdata) => ({
        ...currdata,
        workLocation: typeof value === 'string' ? value.split(',') : value
      }));
    }
  };
    
  const handleJobCategoryChange = (event) => {
    const { target: { value } } = event;
    if (value.includes("Add Category")) {
      const newCategory = prompt("Enter the category name:"); // Prompt for custom city
      if (newCategory && !allCategories.includes(newCategory)) {
        setAllCategories([...allCategories, newCategory]); // Add the custom city to the list
        setFromdata((currdata) => ({
          ...currdata,
          jobCategory: [...currdata.jobCategory, newCategory], // Select the newly added city
        }));
      }
    } else {
      setFromdata((currdata) => ({
        ...currdata,
        jobCategory: typeof value === 'string' ? value.split(',') : value
      }));
    }
  };

  const handleSkillChange = (event) => {
    const { target: { value } } = event;
    if (value.includes("Add Skill")) {
      const newSkill = prompt("Enter the skill name:"); // Prompt for custom city
      if (newSkill && !allSkills.includes(newSkill)) {
        setAllSkills([...allSkills, newSkill]); // Add the custom city to the list
        setFromdata((currdata) => ({
          ...currdata,
          skillsRequired: [...currdata.skillsRequired, newSkill], // Select the newly added city
        }));
      }
    } else {
      setFromdata((currdata) => ({
        ...currdata,
        skillsRequired: typeof value === 'string' ? value.split(',') : value
      }));
    }
  };

    let handlesubmit = (event) => {
        event.preventDefault();
        console.log(formdata);
        setFromdata({
            companyName: "",
            companyLogo: "",
            jobTitle: "",
            jobNature: "",
            jobTime: "",
            workplaceType: "",
            workLocation: [],
            jobCategory: [],
            skillsRequired: [],
            eligibility: "",
            experienceRequired: "",
            fresherPassOutYears: [],
            salaryType: "",
            salaryRange: "",
            otherBenefits: "",
            jobDescription: ""
        });
    };

    return (
    <div className="jobpostform">
        <form className="form-container" onSubmit={handlesubmit}>
            
            
                    
        <div className="form-group">
                    <label htmlFor="companyName" className="form-label">Company Logo & Company Name*</label>
                    <div className="input-container">
                        
                        {/* Updated Company Name Input with Material UI TextField */}
                        <TextField
                            required
                            id="outlined-required"
                            label="Enter Company Name"
                            
                            variant="outlined"
                            value={formdata.companyName}
                            name="companyName"
                            onChange={handleinput}
                            className="companyName"
                            fullWidth
                            style={{ width: '850px' , marginLeft : "50px" }}
                            // InputLabelProps={{
                            //     style: { paddingLeft: '65px' } 
                            // }}
                            // InputProps={{
                            //     style: { paddingLeft: '36px' } 
                            // }}
                        />

                        <input
                            type="file"
                            id="companyLogo"
                            name="companyLogo"
                            accept="image/*"
                            onChange={handleFileChange}
                            style={{ display: 'none' }} // Hide the default file input
                        />
                        <label htmlFor="companyLogo" className="logo-upload-label">
                            {formdata.companyLogo ? (
                                <img
                                    src={formdata.companyLogo}
                                    alt="Company Logo"
                                    className="logo-preview"
                                    
                                />
                            ) : (
                                <AddPhotoAlternateIcon className="upload-icon" />
                            )}
                        </label>
                    </div>
                </div>
       
               <div className="form-group">
                   <label htmlFor="jobTitle" className="form-label">Job Title/Role*</label>
                   <div className="input-container">
                        
                        {/* Updated Company Name Input with Material UI TextField */}
                        <TextField
                            required
                            id="outlined-required"
                            label="Enter Job Title"
                            
                            variant="outlined"
                            value={formdata.jobTitle}
                            name="jobTitle"
                            onChange={handleinput}
                            className="jobTitle"
                            fullWidth
                            
                        />
                        </div>
                  
               </div>

                {/* Job Nature Section */}
                <div className="form-group">
                    <label htmlFor="jobNature" className="form-label">Job Nature*</label>
                    <div className="button-group">
                        <button
                            type="button"
                            className={`nature-button ${JobIntern === "Jobs" ? "active" : ""}`}
                            onClick={() => setJobIntern("Jobs")}
                        >
                            Jobs
                        </button>
                        <button
                            type="button"
                            className={`nature-button ${JobIntern === "Internships" ? "active" : ""}`}
                            onClick={() => setJobIntern("Internships")}
                        >
                            Internships
                        </button>
                    </div>
                </div>

                <div  className="form-group">
                    <label htmlFor="jobTime" className="form-label">Job Time*</label>
                    <div className="button-group">
                        <button
                            type="button"
                            className={`nature-button ${jobTime === "Full Time" ? "active" : ""}`}
                            onClick={() => setJobTime("Full Time")}
                        >
                            Full Time
                        </button>
                        <button
                            type="button"
                            className={`nature-button ${jobTime === "Part Time" ? "active" : ""}`}
                            onClick={() => setJobTime("Part Time")}
                        >
                            Part Time
                        </button>
                    </div>
                </div>

                <div className="form-group">
                    
                    <label className="form-label">Workplace Type*</label>
                    <div className="radio-group">
                        <div>
                            <label htmlFor="inOffice">
                            <button
                            type="button"
                            className={`nature-button ${WorkType === "In Office" ? "active" : ""}`}
                            onClick={() => setWorkType("In Office")}
                            >
                            In Office
                            </button>
                            </label>
                        </div>

                        <div>
                            <label htmlFor="workFromHome">
                            <button
                            type="button"
                            className={`nature-button ${WorkType === "Work From Home" ? "active" : ""}`}
                            onClick={() => setWorkType("Work From Home")}
                            >
                            Work From Home
                            </button>
                            </label>
                        </div>

                        <div>
                            <label htmlFor="hybrid">
                            <button
                            type="button"
                            className={`nature-button ${WorkType === "Hybrid" ? "active" : ""}`}
                            onClick={() => setWorkType("Hybrid")}
                            >
                            Hybrid
                            </button>
                            </label>
                        </div>
                    </div>
                </div>

                

               {/* Work Location with multi-select */}
        <div className="form-group">
          <label htmlFor="workLocation" className="form-label">Work Location*</label>
          <FormControl sx={{ m: 0.1, width: 890 }}>
            <InputLabel id="workLocation-label">Select Cities</InputLabel>
            <Select
              labelId="workLocation-label"
              id="workLocation"
              multiple
              value={formdata.workLocation}
              onChange={handleCityChange}
              input={<OutlinedInput id="select-multiple-chip" label="Select Cities" />}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((city) => (
                    <Chip key={city} label={city} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {allCities.map((city) => (
                <MenuItem
                  key={city}
                  value={city}
                  style={getStyles(city, formdata.workLocation, theme)}
                >
                  {city}
                </MenuItem>
              ))}
              <MenuItem value="Add City" style={{ fontWeight: 'bold', color: '#007bff' }}>
                + Add City
              </MenuItem>
            </Select>
          </FormControl>
        </div>
                
                <div className="form-group">
          <label htmlFor="jobCategory" className="form-label">Job Category*</label>
          <FormControl sx={{ m: 0.1, width: 890 }}>
            <InputLabel id="jobCategory-label">Select Job Categories</InputLabel>
            <Select
              labelId="jobCategory-label"
              id="jobCategory"
              multiple
              value={formdata.jobCategory}
              onChange={handleJobCategoryChange}
              input={<OutlinedInput id="select-multiple-chip" label="Select Job Categories" />}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((category) => (
                    <Chip key={category} label={category} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {allCategories.map((category) => (
                <MenuItem
                  key={category}
                  value={category}
                  style={getStyles1(category, formdata.jobCategory, theme)}
                >
                  {category}
                </MenuItem>
              ))}
              <MenuItem value="Add Category" style={{ fontWeight: 'bold', color: '#007bff' }}>
                + Add Category
              </MenuItem>
            </Select>
          </FormControl>
        </div>



                <div className="form-group">
          <label htmlFor="skillsRequired" className="form-label">Skills Required*</label>
          <FormControl sx={{ m: 0.1, width: 890 }}>
            <InputLabel id="skillsRequired-label">Select Skills Required</InputLabel>
            <Select
              labelId="skillsRequired-label"
              id="skillsRequired"
              multiple
              value={formdata.skillsRequired}
              onChange={handleSkillChange}
              input={<OutlinedInput id="select-multiple-chip" label="Select skillsRequired" />}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((skill) => (
                    <Chip key={skill} label={skill} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {allSkills.map((skill) => (
                <MenuItem
                  key={skill}
                  value={skill}
                  style={getStyles2(skill, formdata.skillsRequired, theme)}
                >
                  {skill}
                </MenuItem>
              ))}
              <MenuItem value="Add Skill" style={{ fontWeight: 'bold', color: '#007bff' }}>
                + Add Skill
              </MenuItem>
            </Select>
          </FormControl>
        </div>

                <div className="form-group">
                    <label htmlFor="experienceRequired" className="form-label">Experience Required (in Years)</label>
                    <select
                        id="experienceRequired"
                        name="experienceRequired"
                        className="form-input"
                        value={formdata.experienceRequired}
                        onChange={handleinput}
                    >
                        <option value="Fresher">Fresher</option>
                        <option value="Experienced">Experienced</option>
                    </select>
                </div>

                <div className="form-group">
                    <label className="form-label">Fresher Pass Out Years</label>
                    <div className="checkbox-group">
                        <div>
                            <input
                                type="checkbox"
                                id="2021"
                                name="fresherPassOutYears"
                                value="2021"
                                onChange={handleinput}
                            />
                            <label htmlFor="2021">2021</label>
                        </div>

                        <div>
                            <input
                                type="checkbox"
                                id="2022"
                                name="fresherPassOutYears"
                                value="2022"
                                onChange={handleinput}
                            />
                            <label htmlFor="2022">2022</label>
                        </div>

                        <div>
                            <input
                                type="checkbox"
                                id="2023"
                                name="fresherPassOutYears"
                                value="2023"
                                onChange={handleinput}
                            />
                            <label htmlFor="2023">2023</label>
                        </div>

                        <div>
                            <input
                                type="checkbox"
                                id="2024"
                                name="fresherPassOutYears"
                                value="2024"
                                onChange={handleinput}
                            />
                            <label htmlFor="2024">2024</label>
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="salaryType" className="form-label">Salary Type</label>
                    <select
                        id="salaryType"
                        name="salaryType"
                        className="form-input"
                        value={formdata.salaryType}
                        onChange={handleinput}
                    >
                        <option value="Fixed">Fixed</option>
                        <option value="Range">Range</option>
                        <option value="Fixed + Incentive">Fixed + Incentive</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="salaryRange" className="form-label">Salary Range</label>
                    <input
                        type="text"
                        className="form-input"
                        placeholder="Enter Salary Range"
                        value={formdata.salaryRange}
                        id="salaryRange"
                        name="salaryRange"
                        onChange={handleinput}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="otherBenefits" className="form-label">Other Benefits</label>
                    <input
                        type="text"
                        className="form-input"
                        placeholder="Enter Benefits"
                        value={formdata.otherBenefits}
                        id="otherBenefits"
                        name="otherBenefits"
                        onChange={handleinput}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="jobDescription" className="form-label">Job Description</label>
                    <textarea
                        className="form-textarea"
                        placeholder="Roles, Responsibilities, Requirements"
                        value={formdata.jobDescription}
                        id="jobDescription"
                        name="jobDescription"
                        onChange={handleinput}
                    />
                </div>

                <div className="form-group">
                    <button type="submit" className="form-button">Submit</button>
                </div>

            </form>
        </div>
    );
}


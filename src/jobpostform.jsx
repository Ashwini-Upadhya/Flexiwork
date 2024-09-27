// import { useState } from "react";
// import './jobpostform.css'

// export default function Jobpostform() {

//     let [formdata, setFromdata] = useState({
//         Name: "",
//         CompanyName: "",
//         EmailId: "",
//         MobileNo: "",
//         YourDesignation: "",
//         Position: "",
//         Candidates: ""
//     })

//     let handleinput = (event) => {
//         setFromdata((currdata) => {
//             return { ...currdata, [event.target.name]: event.target.value };
//         });
//     }

//     let handlesubmit = (event) => {
//         event.preventDefault();
//         console.log(formdata);

//         // Reset form after submission
//         setFromdata({
//             Name: "",
//             CompanyName: "",
//             EmailId: "",
//             MobileNo: "",
//             YourDesignation: "",
//             Position: "",
//             Candidates: ""
//         });
//     }

//     return (
//         <div className="jobpostform">
//             <form onSubmit={handlesubmit}>
//                 <label htmlFor="Name"> Name</label>
//                 <input
//                     type="text"
//                     placeholder="Enter Name"
//                     value={formdata.Name}
//                     id="Name"
//                     name="Name"
//                     onChange={handleinput}
//                     required
//                 />

//                 <label htmlFor="CompanyName">Company Name</label>
//                 <input
//                     type="text"
//                     placeholder="Enter Company Name"
//                     value={formdata.CompanyName}
//                     id="CompanyName"
//                     name="CompanyName"
//                     onChange={handleinput}
//                     required
//                 />
//                 <br />

//                 <label htmlFor="Emailid">Email Id</label>
//                 <input
//                     type="text"
//                     placeholder="Official Email ID"
//                     value={formdata.EmailId}
//                     id="EmailId"
//                     name="EmailId"
//                     onChange={handleinput}
//                     required
//                 />

//                 <label htmlFor="MobileNo">Mobile No</label>
//                 <input
//                     type="text"
//                     placeholder="Enter Mobile No"
//                     value={formdata.MobileNo}
//                     id="MobileNo"
//                     name="MobileNo"
//                     onChange={handleinput}
//                     required
//                     maxLength={10}
//                 />
//                 <br />

//                 <label htmlFor="YourDesignation">Your Designation</label>
//                 <input
//                     type="text"
//                     placeholder="Ex: Recruiter"
//                     value={formdata.YourDesignation}
//                     id="YourDesignation"
//                     name="YourDesignation"
//                     onChange={handleinput}
//                     required
//                 />
//                 <br />

//                 <label htmlFor="Position">What position are you hiring for?</label>
//                 <input
//                     type="text"
//                     placeholder="Ex: Product Manager"
//                     value={formdata.Position}
//                     id="Position"
//                     name="Position"
//                     onChange={handleinput}
//                     required
//                 />
//                 <br />

//                 <label htmlFor="Candidates">How Many Candidates</label>
//                 <input
//                     type="text"
//                     placeholder="Ex: 4"
//                     value={formdata.Candidates}
//                     id="Candidates"
//                     name="Candidates"
//                     onChange={handleinput}
//                     required
//                 />

//                 <button>Submit</button>
//             </form>
//         </div>
//     )
// }

import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { useState } from "react";
import './jobpostform.css';

export default function Jobpostform() {

    let [formdata, setFromdata] = useState({
        companyName: "",
        companyLogo: "",
        jobTitle: "",
        jobNature: "",
        workplaceType: "",
        workLocation: "",
        jobCategory: "",
        skillsRequired: "",
        eligibility: "",
        experienceRequired: "",
        fresherPassOutYears: [],
        salaryType: "",
        salaryRange: "",
        otherBenefits: "",
        jobDescription: ""
    });

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

    let handlesubmit = (event) => {
        event.preventDefault();
        console.log(formdata);
        setFromdata({
            companyName: "",
            companyLogo: "",
            jobTitle: "",
            jobNature: "",
            workplaceType: "",
            workLocation: "",
            jobCategory: "",
            skillsRequired: "",
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
    <label htmlFor="companyName" className="form-label">Company Name*</label>
    <div className="input-container">
        <input
            type="text"
            className="form-input"
            placeholder="Enter Company Name"
            value={formdata.companyName}
            id="companyName"
            name="companyName"
            onChange={handleinput}
            required
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
                    <input
                        type="text"
                        className="form-input"
                        placeholder="Enter Job Title"
                        value={formdata.jobTitle}
                        id="jobTitle"
                        name="jobTitle"
                        onChange={handleinput}
                        required
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Job Nature*</label>
                    <div className="radio-group">
                        <div>
                            <input
                                type="radio"
                                id="job"
                                name="jobNature"
                                value="Job"
                                checked={formdata.jobNature === "Job"}
                                onChange={handleinput}
                            />
                            <label htmlFor="job">Job</label>
                        </div>

                        <div>
                            <input
                                type="radio"
                                id="internship"
                                name="jobNature"
                                value="Internship"
                                checked={formdata.jobNature === "Internship"}
                                onChange={handleinput}
                            />
                            <label htmlFor="internship">Internship</label>
                        </div>

                        <div>
                            <input
                                type="radio"
                                id="contract"
                                name="jobNature"
                                value="Contract"
                                checked={formdata.jobNature === "Contract"}
                                onChange={handleinput}
                            />
                            <label htmlFor="contract">Contract</label>
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <label className="form-label">Workplace Type*</label>
                    <div className="radio-group">
                        <div>
                            <input
                                type="radio"
                                id="inOffice"
                                name="workplaceType"
                                value="In Office"
                                checked={formdata.workplaceType === "In Office"}
                                onChange={handleinput}
                            />
                            <label htmlFor="inOffice">In Office</label>
                        </div>

                        <div>
                            <input
                                type="radio"
                                id="workFromHome"
                                name="workplaceType"
                                value="Work From Home"
                                checked={formdata.workplaceType === "Work From Home"}
                                onChange={handleinput}
                            />
                            <label htmlFor="workFromHome">Work From Home</label>
                        </div>

                        <div>
                            <input
                                type="radio"
                                id="onField"
                                name="workplaceType"
                                value="On Field"
                                checked={formdata.workplaceType === "On Field"}
                                onChange={handleinput}
                            />
                            <label htmlFor="onField">On Field</label>
                        </div>

                        <div>
                            <input
                                type="radio"
                                id="hybrid"
                                name="workplaceType"
                                value="Hybrid"
                                checked={formdata.workplaceType === "Hybrid"}
                                onChange={handleinput}
                            />
                            <label htmlFor="hybrid">Hybrid</label>
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="workLocation" className="form-label">Work Location</label>
                    <input
                        type="text"
                        className="form-input"
                        placeholder="Enter City"
                        value={formdata.workLocation}
                        id="workLocation"
                        name="workLocation"
                        onChange={handleinput}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="jobCategory" className="form-label">Job Category*</label>
                    <input
                        type="text"
                        className="form-input"
                        placeholder="Select Category"
                        value={formdata.jobCategory}
                        id="jobCategory"
                        name="jobCategory"
                        onChange={handleinput}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="skillsRequired" className="form-label">Skills Required</label>
                    <input
                        type="text"
                        className="form-input"
                        placeholder="Search Skills"
                        value={formdata.skillsRequired}
                        id="skillsRequired"
                        name="skillsRequired"
                        onChange={handleinput}
                    />
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


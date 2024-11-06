import React, { useState } from 'react';
import './JobPostCard.css';
import Navbar from './Navbar';
import FindJob from './FindJob'
import { useEffect } from 'react';

const JobPostCard = () => {
  const [selectedJobIndex, setSelectedJobIndex] = useState(0);
   // Set default active index to 0
   
   const [jobData , setjobData] = useState("")


  async function a(){
       var response = await fetch("http://localhost:5000/route/jobs",
     {  method:"GET",
         headers: {
       "Content-Type":"application/json", 
     },    
   }); 

 var result = await response.json()
  // console.log(response);
  console.log(result);
  setjobData(result) 

}

  useEffect( ()=>{
    a()
  }, [] )






  

  // const jobData =
  //  [
  //   {
  //     title: "HR Consultant / Recruiter",
  //     company: "Just Career Management",
  //     location: "Indore, Mumbai Suburbs",
  //     dateUpdated: "Oct 8, 2024",
  //     applied: 1,
  //     deadline: "14 days left",
  //     impressions: 260,
  //     experience: "Experienced Professionals",
  //     type: "Job",
  //     gender: "Female",
  //     logo: "https://via.placeholder.com/50", // Placeholder logo for HR Consultant
  //   },
  //   {
  //     title: "Site Engineer Associate",
  //     company: "AACSYS Engineers",
  //     location: "",
  //     dateUpdated: "",
  //     applied: 0,
  //     deadline: "2 months left",
  //     impressions: 585,
  //     experience: "Experienced Professionals",
  //     type: "Job",
  //     gender: "Male",
  //     logo: "https://via.placeholder.com/50", // Placeholder logo for Site Engineer
  //   },
  //   {
  //     title: "Guest Service Associate",
  //     company: "Cococart Ventures Pvt Ltd",
  //     location: "",
  //     dateUpdated: "",
  //     applied: 1,
  //     deadline: "29 days left",
  //     impressions: 300,
  //     experience: "Fresher",
  //     type: "Job",
  //     gender: "Female",
  //     logo: "https://via.placeholder.com/50", // Placeholder logo for Guest Service
  //   },
  //   {
  //       title: "Guest Service Associate",
  //       company: "Cococart Ventures Pvt Ltd",
  //       location: "",
  //       dateUpdated: "",
  //       applied: 1,
  //       deadline: "29 days left",
  //       impressions: 300,
  //       experience: "Fresher",
  //       type: "Job",
  //       gender: "Female",
  //       logo: "https://via.placeholder.com/50", // Placeholder logo for Guest Service
  //     },
  // ];

  const handleJobClick = (index) => {
    setSelectedJobIndex(index);
  };

  return (
    
    <>
    {/* <div>
       {
       jobs && jobs?.map((job)=>(
<span> {job.company}</span>

       )
       )
      }
    </div> */}
    <Navbar /> 
    <FindJob/>
    <div className="jobpostcard__container">
          {/* Job Cards List */}
       <div className="jobpostcard__container">
  {/* Job Cards List */}
  <div className="jobpostcard__list">
    {jobData && jobData .map((job, index) => (
      <div
        key={index}
        className={`jobpostcard__card ${selectedJobIndex === index ? 'active' : ''}`}
        onClick={() => handleJobClick(index)}
      >
        <div className="jobpostcard__header">
          <div className="jobpostcard__logo">
            <img src={"https://th.bing.com/th/id/OIP.arMbVZyyUDI6KzQb3PnzlAHaHa?w=188&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7"} alt={`${job.company} logo`} />
          </div>
          <div className="jobpostcard__info">
            <div className="jobpostcard__tag">{job.jobnature}</div>      
            <h3 className="jobpostcard__title">{job.jobTitle}</h3>   
            <p className="jobpostcard__company">{job.companyName}</p>  
            <div className="jobpostcard__meta">
              <p className="jobpostcard__applied">
                <span className="jobpostcard__icon">👤</span> {jobData.length} Applied
              </p>
              <p className="jobpostcard__deadline">{job.deadlinne}</p>
            </div>
            <div className="jobpostcard__experience">{job.experienceRequired}</div> 
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


          {/* Job Details Section */}
          <div className="jobpostcard__details">
              {jobData[selectedJobIndex] ? (
                  <>
                      <div className="jobpostcard__details-header">
                          <div className="jobpostcard__details-logo">
                              <img src={"https://th.bing.com/th/id/OIP.arMbVZyyUDI6KzQb3PnzlAHaHa?w=188&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7"} alt={`${jobData[selectedJobIndex].company} logo`} />
                          </div>
                          <div>
                              <h2 className="jobpostcard__details-title">{jobData[selectedJobIndex].jobTitle}</h2> 
                              <p className="jobpostcard__details-company">{jobData[selectedJobIndex].companyName}</p> 
                              <p className="jobpostcard__details-location">{jobData[selectedJobIndex].workLocation}</p> 
                              <p className="jobpostcard__details-updated">Updated On: {jobData[selectedJobIndex].updatedAt}</p> 
                          </div>
                      </div>
                      <div className="jobpostcard__details-action">
                          <button className="jobpostcard__apply-btn">Apply</button>
                      </div>
                      <div className="jobpostcard__details-info">
                          <p><span className="jobpostcard__icon"></span> Job Timing: {jobData[selectedJobIndex]. jobTime}</p>
                          <p><span className="jobpostcard__icon"></span> Job Type: {jobData[selectedJobIndex]. workplaceType}</p>
                          <p><span className="jobpostcard__icon"></span> Salary: {jobData[selectedJobIndex]. salaryRange}</p>
                      </div>
                      <div className="jobpostcard__eligibility">
                          <h3>Eligibility</h3>
                          <p>{jobData[selectedJobIndex].experienceRequired}</p> 
                          <p>Required Skills: {jobData[selectedJobIndex].skillsRequired}</p>
                          <p>jobDescription: 
What this handout is about
This handout will help you understand how paragraphs are formed, how to develop stronger paragraphs, and how to completely and clearly express your ideas.

What is a paragraph?
Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.
How do I decide what to put in a paragraph?
Before you can begin to determine what the composition of a particular paragraph will be, you must first decide on an argument and a working thesis statement for your paper. What is the most important idea that you are trying to convey to your reader? The information in each paragraph must be related to that idea. In other words, your paragraphs should remind your reader that there is a recurrent relationship between your thesis and the information in each paragraph. A working thesis functions like a seed from which your paper, and your ideas, will grow. The whole process is an organic one—a natural progression from a seed to a full-blown paper where there are direct, familial relationships between all of the ideas in the paper.

The decision about what to put into your paragraphs begins with the germination of a seed of ideas; this “germination process” is better known as brainstorming. There are many techniques for brainstorming; whichever one you choose, this stage of paragraph development cannot be skipped. Building paragraphs can be like building a skyscraper: there must be a well-planned foundation that supports what you are building. Any cracks, inconsistencies, or other corruptions of the foundation can cause your whole paper to crumble.

So, let’s suppose that you have done some brainstorming to develop your thesis. What else should you keep in mind as you begin to create paragraphs? Every paragraph in a paper should be:</p>

                          
                           
                            
                             
                           
                        
                    
                        
                       

                           
                          
                            
                          
                         
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

import React, { useState } from 'react';
import RecruiterSidebar from './RecruiterSidebar';
import './RecruiterProfile.css';
import Navbar from './Navbar';
import RecruiterHeader from './RecruiterHeader';
import RecruiterSection from './RecruiterSection';
import JobPosted from './JobPosted';

const RecruiterProfile = () => {
  const [activeSection, setActiveSection] = useState('profile');

  return (
    <><Navbar /><div className="recruiter-profile-container">
          <RecruiterSidebar activeSection={activeSection} setActiveSection={setActiveSection} />
          <div className="recruiter-profile-content">
              {activeSection === 'profile' ? (
                  <>
                  <RecruiterHeader/> 
                  <RecruiterSection/>   
                  </>
              ) : (
                  activeSection === 'job-posted' && (
                      <div className="job-posted-section">
                          {/* Job posted content goes here */}
                          <JobPosted/>
                      </div>
                  )
              )}
          </div>
      </div></>
  );
};

export default RecruiterProfile;




// import React, { useState } from 'react';
// // import Sidebar from './Sidebar';
// // import ProfileHeader from './ProfileHeader';
// // import ProfileSection from './ProfileSection';
// // import Registrations from './Registrations';
// import Navbar from './Navbar';

// import './JobseekerProfile.css';

// const JobseekerProfile = () => {
//   const [activeSection, setActiveSection] = useState('profile'); // Track active section


//   return (
//     <>
//       <Navbar />
//       <div className="profile-container">
//         <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
//         <div className="profile-content">
//           {activeSection === 'profile' ? (
//             <>
//               <ProfileHeader />
              
//             </>
//           ) : (
//             activeSection === 'registrations' && (
//                 <Registrations />
//               ) // Show Registrations when 'Registrations/Applications' is active
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default JobseekerProfile;

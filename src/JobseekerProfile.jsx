import React from 'react';
import Sidebar from './Sidebar';
import ProfileHeader from './ProfileHeader';
import ProfileSection from './ProfileSection';
import './JobseekerProfile.css'; // Main CSS file
import Navbar from './Navbar';

const JobseekerProfile = () => {
  return (
    <><Navbar /><div className="profile-container">
          <Sidebar />
          <div className="profile-content">
              <ProfileHeader />
              <div className="profile-sections">
                  <ProfileSection title="About" buttonText="Add About" icon="✏️" />
                  <ProfileSection title="Skills" buttonText="Add Skills" icon="💡" />
                  <ProfileSection title="Work Experience" buttonText="Add Work Experience" icon="💼" />
                  <ProfileSection title="Education" buttonText="Add Education" icon="🎓" />
                  <ProfileSection title="Responsibilities" buttonText="Add Responsibility" icon="🤝" />
                  <ProfileSection title="Certificates" buttonText="Add Certificate" icon="📜" />
                  <ProfileSection title="Projects" buttonText="Add Project" icon="🔨" />
                  <ProfileSection title="Achievements" buttonText="Add Achievement" icon="🏆" />
                  <ProfileSection title="Hobbies" buttonText="Add Hobby" icon="🎯" />
                  <ProfileSection title="Streaks" buttonText="" icon="🔥" streaks />
              </div>
          </div>
      </div></>
  );
};

export default JobseekerProfile;

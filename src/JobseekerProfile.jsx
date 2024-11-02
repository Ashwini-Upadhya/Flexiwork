import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ProfileHeader from './ProfileHeader';
import ProfileSection from './ProfileSection';
import Navbar from './Navbar';
import AboutModal from './AboutModal'; // Import the new AboutModal component
import SkillsModal from './SkillsModal';
import WorkExpModal from './WorkExpModal';
import EducatioModal from "./EducatioModal";
import CertificatesModal from "./CertificatesModal";
import ProjectsModal from "./ProjectsModal";
import AchievementsModal from "./AchievementsModal";
import HobbiesModal from "./HobbiesModal";
import './JobseekerProfile.css';

const JobseekerProfile = () => {
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isSkillsModalOpen, setIsSkillsModalOpen] = useState(false);
  const [isWorkExpModalOpen, setIsWorkExpModalOpen] = useState(false);
  const [isEducatioModalOpen, setIsEducationModalOpen] = useState(false);
  const [isCertificatesModalOpen, setIsCertificatesModalOpen] = useState(false);
  const [isProjectsModalOpen, setIsProjectsModalOpen] = useState(false);
  const [isAchievementsModalOpen, setIsAchievementsModalOpen] = useState(false);
  const [isHobbiesModalOpen, setIsHobbiesModalOpen] = useState(false);

  // Function to open and close the About modal
  const openAboutModal = () => {
    console.log("Opening About Modal"); // Debugging log
    setIsAboutModalOpen(true);
  };
  const closeAboutModal = () => setIsAboutModalOpen(false);

  // Function to open and close the Skills modal
  const openSkillsModal = () => {
    console.log("Opening Skills Modal"); // Debugging log
    setIsSkillsModalOpen(true);
  };
  const closeSkillstModal = () => setIsSkillsModalOpen(false);

  // Function to open and close the Work Experience modal
  const openWorkExpModal = () => {
    console.log("Opening Skills Modal"); // Debugging log
    setIsWorkExpModalOpen(true);
  };
  const closeWorkExptModal = () => setIsWorkExpModalOpen(false);

  // Function to open and close the Education modal
  const openEducationModal = () => {
    console.log("Opening Skills Modal"); // Debugging log
    setIsEducationModalOpen(true);
  };
  const closeEducationModal = () => setIsEducationModalOpen(false);

  // Function to open and close the Certificates modal
  const openCertificatesModal = () => {
    console.log("Opening Skills Modal"); // Debugging log
    setIsCertificatesModalOpen(true);
  };
  const closeCertificatesModal = () => setIsCertificatesModalOpen(false);

  // Function to open and close the Projects modal
  const openProjectsModal = () => {
    console.log("Opening Skills Modal"); // Debugging log
    setIsProjectsModalOpen(true);
  };
  const closeProjectsModal = () => setIsProjectsModalOpen(false);

  // Function to open and close the Achievements modal
  const openAchievementsModal = () => {
    console.log("Opening Skills Modal"); // Debugging log
    setIsAchievementsModalOpen(true);
  };
  const closeAchievementsModal = () => setIsAchievementsModalOpen(false);

  // Function to open and close the Hobbies modal
  const openHobbiesModal = () => {
    console.log("Opening Skills Modal"); // Debugging log
    setIsHobbiesModalOpen(true);
  };
  const closeHobbiesModal = () => setIsHobbiesModalOpen(false);

  return (
    <>
      <Navbar />
      <div className="profile-container">
        <Sidebar />
        <div className="profile-content">
          <ProfileHeader />
          <div className="profile-sections">
            <ProfileSection title="About" buttonText="Add About" icon="✏️" onClick={openAboutModal} />
            {/* Other Profile Sections */}
                <ProfileSection title="Skills" buttonText="Add Skills" icon="💡"  onClick={openSkillsModal}/>
                  <ProfileSection title="Work Experience" buttonText="Add Work Experience" icon="💼" onClick={openWorkExpModal}/>
                  <ProfileSection title="Education" buttonText="Add Education" icon="🎓" onClick={openEducationModal} />
                  {/* <ProfileSection title="Responsibilities" buttonText="Add Responsibility" icon="🤝" /> */}
                  <ProfileSection title="Certificates" buttonText="Add Certificate" icon="📜" onClick={openCertificatesModal}/>
                  <ProfileSection title="Projects" buttonText="Add Project" icon="🔨" onClick={openProjectsModal}/>
                  <ProfileSection title="Achievements" buttonText="Add Achievement" icon="🏆" onClick={openAchievementsModal}/>
                  <ProfileSection title="Hobbies" buttonText="Add Hobbie" icon="🎯" onClick={openHobbiesModal}/>
                  {/* <ProfileSection title="Streaks" buttonText="" icon="🔥" streaks /> */}
          </div>
          <br />
        </div>
      </div>

      {/* Render AboutModal when isAboutModalOpen is true */}
      {isAboutModalOpen && <AboutModal onClose={closeAboutModal} />}
      {isSkillsModalOpen && <SkillsModal onClose={closeSkillstModal} />}
      {isWorkExpModalOpen && <WorkExpModal onClose={closeWorkExptModal} />}
      {isEducatioModalOpen && <EducatioModal onClose={closeEducationModal} />}
      {isCertificatesModalOpen && <CertificatesModal onClose={closeCertificatesModal} />}
      {isProjectsModalOpen && <ProjectsModal onClose={closeProjectsModal} />}
      {isAchievementsModalOpen && <AchievementsModal onClose={closeAchievementsModal} />}
      {isHobbiesModalOpen && <HobbiesModal onClose={closeHobbiesModal} />}
    </>
  );
};

export default JobseekerProfile;

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ProfileHeader from './ProfileHeader';
import ProfileSection from './ProfileSection';
import Registrations from './Registrations';
import Navbar from './Navbar';
import AboutModal from './AboutModal';
import SkillsModal from './SkillsModal';
import WorkExpModal from './WorkExpModal';
import EducatioModal from "./EducatioModal";
import CertificatesModal from "./CertificatesModal";
import ProjectsModal from "./ProjectsModal";
import AchievementsModal from "./AchievementsModal";
import HobbiesModal from "./HobbiesModal";
import './JobseekerProfile.css';

const JobseekerProfile = () => {
  const [activeSection, setActiveSection] = useState('profile'); // Track active section
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isSkillsModalOpen, setIsSkillsModalOpen] = useState(false);
  const [isWorkExpModalOpen, setIsWorkExpModalOpen] = useState(false);
  const [isEducatioModalOpen, setIsEducationModalOpen] = useState(false);
  const [isCertificatesModalOpen, setIsCertificatesModalOpen] = useState(false);
  const [isProjectsModalOpen, setIsProjectsModalOpen] = useState(false);
  const [isAchievementsModalOpen, setIsAchievementsModalOpen] = useState(false);
  const [isHobbiesModalOpen, setIsHobbiesModalOpen] = useState(false);

  const openAboutModal = () => setIsAboutModalOpen(true);
  const closeAboutModal = () => setIsAboutModalOpen(false);
  const openSkillsModal = () => setIsSkillsModalOpen(true);
  const closeSkillsModal = () => setIsSkillsModalOpen(false);
  const openWorkExpModal = () => setIsWorkExpModalOpen(true);
  const closeWorkExpModal = () => setIsWorkExpModalOpen(false);
  const openEducationModal = () => setIsEducationModalOpen(true);
  const closeEducationModal = () => setIsEducationModalOpen(false);
  const openCertificatesModal = () => setIsCertificatesModalOpen(true);
  const closeCertificatesModal = () => setIsCertificatesModalOpen(false);
  const openProjectsModal = () => setIsProjectsModalOpen(true);
  const closeProjectsModal = () => setIsProjectsModalOpen(false);
  const openAchievementsModal = () => setIsAchievementsModalOpen(true);
  const closeAchievementsModal = () => setIsAchievementsModalOpen(false);
  const openHobbiesModal = () => setIsHobbiesModalOpen(true);
  const closeHobbiesModal = () => setIsHobbiesModalOpen(false);

  return (
    <>
      <Navbar />
      <div className="profile-container">
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        <div className="profile-content">
          {activeSection === 'profile' ? (
            <>
              <ProfileHeader />
              <div className="profile-sections">
                <ProfileSection title="About" buttonText="Add About" icon="✏️" onClick={openAboutModal} />
                <ProfileSection title="Skills" buttonText="Add Skills" icon="💡" onClick={openSkillsModal}/>
                <ProfileSection title="Work Experience" buttonText="Add Work Experience" icon="💼" onClick={openWorkExpModal}/>
                <ProfileSection title="Education" buttonText="Add Education" icon="🎓" onClick={openEducationModal} />
                <ProfileSection title="Certificates" buttonText="Add Certificate" icon="📜" onClick={openCertificatesModal}/>
                <ProfileSection title="Projects" buttonText="Add Project" icon="🔨" onClick={openProjectsModal}/>
                <ProfileSection title="Achievements" buttonText="Add Achievement" icon="🏆" onClick={openAchievementsModal}/>
                <ProfileSection title="Hobbies" buttonText="Add Hobby" icon="🎯" onClick={openHobbiesModal}/>
              </div>
            </>
          ) : (
            activeSection === 'registrations' && (
                <Registrations />
              ) // Show Registrations when 'Registrations/Applications' is active
          )}
        </div>
      </div>

      {/* Modals */}
      {isAboutModalOpen && <AboutModal onClose={closeAboutModal} />}
      {isSkillsModalOpen && <SkillsModal onClose={closeSkillsModal} />}
      {isWorkExpModalOpen && <WorkExpModal onClose={closeWorkExpModal} />}
      {isEducatioModalOpen && <EducatioModal onClose={closeEducationModal} />}
      {isCertificatesModalOpen && <CertificatesModal onClose={closeCertificatesModal} />}
      {isProjectsModalOpen && <ProjectsModal onClose={closeProjectsModal} />}
      {isAchievementsModalOpen && <AchievementsModal onClose={closeAchievementsModal} />}
      {isHobbiesModalOpen && <HobbiesModal onClose={closeHobbiesModal} />}
    </>
  );
};

export default JobseekerProfile;

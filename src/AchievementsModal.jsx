import React, { useState } from 'react';
import './CertificatesModal.css';

const AchievementsModal = ({ onClose }) => {
  const [certificates, setCertificates] = useState([
    { Title: '', skills: '', description: '', AchievementsFile: null },
  ]);

  const handleCertificatesChange = (index, field, value) => {
    const updatedCertificates = certificates.map((certificate, i) =>
      i === index ? { ...certificate, [field]: value } : certificate
    );
    setCertificates(updatedCertificates);
  };

  const handleFileChange = (index, file) => {
    const updatedCertificates = certificates.map((certificate, i) =>
      i === index ? { ...certificate, AchievementsFile: file } : certificate
    );
    setCertificates(updatedCertificates);
  };

  const handleAddCertificate = () => {
    setCertificates([
      ...certificates,
      { Title: '', skills: '', description: '', AchievementsFile: null },
    ]);
  };

  const handleRemoveCertificate = (index) => {
    const updatedCertificates = certificates.filter((_, i) => i !== index);
    setCertificates(updatedCertificates);
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log('Certificates:', certificates);
    onClose();
  };

  return (
    <div className="certificates-modal">
      <div className="modal-header">
        <h3>Add Achievement/Certificate</h3>
        <button className="close-btn" onClick={onClose}>X</button>
      </div>
      <div className="Profile_saperater_about_details"></div>
      <div className="modal-content">
        {certificates.map((certificate, index) => (
          <div key={index} className="certificate-form">
            <label>
              Title *
              <input
                type="text"
                placeholder="Enter title"
                value={certificate.Title}
                onChange={(e) => handleCertificatesChange(index, 'Title', e.target.value)}
                className="input-field"
              />
            </label>
            <label>
              Skills *
              <input
                type="text"
                placeholder="Skills acquired"
                value={certificate.skills}
                onChange={(e) => handleCertificatesChange(index, 'skills', e.target.value)}
                className="input-field"
              />
            </label>
            <label>
              Description *
              <textarea
                placeholder="Describe the achievement details"
                value={certificate.description}
                onChange={(e) => handleCertificatesChange(index, 'description', e.target.value)}
                className="description-field"
              />
            </label>
            {/* Upload Certificate/Achievement File */}
            <label className="upload-label">
              <input
                type="file"
                onChange={(e) => handleFileChange(index, e.target.files[0])}
                className="upload-field"
                accept="image/*"
                style={{ display: 'none' }}
                id={`achievement-upload-${index}`}
              />
              <button
                type="button"
                className="upload-btn"
                onClick={() => document.getElementById(`achievement-upload-${index}`).click()}
              >
                {certificate.AchievementsFile ? 'Change File' : 'Upload File'}
              </button>
              {certificate.AchievementsFile && (
                <span className="file-name">{certificate.AchievementsFile.name}</span>
              )}
            </label>
            <button className="remove-btn" onClick={() => handleRemoveCertificate(index)}>Remove</button>
            {index < certificates.length - 1 && <hr className="separator-cert-line" />}
          </div>
        ))}
        <button className="add-certificate-btn" onClick={handleAddCertificate}>Add Another Certificate</button>
        <button className="save-cert-btn" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default AchievementsModal;

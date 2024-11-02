import React, { useState } from 'react';
import './CertificatesModal.css';

const CertificatesModal = ({ onClose }) => {
  const [certificates, setCertificates] = useState([
    { certificateName: '', organizationName: '', startDate: '', endDate: '', skills: '', description: '', certificateFile: null },
  ]);

  const handleCertificatesChange = (index, field, value) => {
    const updatedCertificates = certificates.map((certificate, i) =>
      i === index ? { ...certificate, [field]: value } : certificate
    );
    setCertificates(updatedCertificates);
  };

  const handleFileChange = (index, file) => {
    const updatedCertificates = certificates.map((certificate, i) =>
      i === index ? { ...certificate, certificateFile: file } : certificate
    );
    setCertificates(updatedCertificates);
  };

  const handleAddCertificate = () => {
    setCertificates([
      ...certificates,
      { certificateName: '', organizationName: '', startDate: '', endDate: '', skills: '', description: '', certificateFile: null },
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
        <h3>Add Certificate</h3>
        <button className="close-btn" onClick={onClose}>X</button>
      </div>
      <div className="Profile_saperater_about_details"></div>
      <div className="modal-content">
        {certificates.map((certificate, index) => (
          <div key={index} className="certificate-form">
            <label>
              Certificate Name *
              <input
                type="text"
                placeholder="Enter certificate name"
                value={certificate.certificateName}
                onChange={(e) => handleCertificatesChange(index, 'certificateName', e.target.value)}
                className="input-field"
              />
            </label>
            <label>
              Organization Name *
              <input
                type="text"
                placeholder="Enter organization name"
                value={certificate.organizationName}
                onChange={(e) => handleCertificatesChange(index, 'organizationName', e.target.value)}
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
            <label className="duration-label">
              Duration *
              <div className="duration-container">
                <input
                  type="date"
                  value={certificate.startDate}
                  onChange={(e) => handleCertificatesChange(index, 'startDate', e.target.value)}
                  className="date-field"
                />
                <span>to</span>
                <input
                  type="date"
                  value={certificate.endDate}
                  onChange={(e) => handleCertificatesChange(index, 'endDate', e.target.value)}
                  className="date-field"
                />
              </div>
            </label>
            <label>
              Description *
              <textarea
                placeholder="Describe the certification details"
                value={certificate.description}
                onChange={(e) => handleCertificatesChange(index, 'description', e.target.value)}
                className="description-field"
              />
            </label>
            {/* Upload Certificate Image */}
            <label className="upload-label">
              <input
                type="file"
                onChange={(e) => handleFileChange(index, e.target.files[0])} // Update the state with the uploaded file
                className="upload-field"
                accept="image/*"
                style={{ display: 'none' }} // Hide the default file input
                id={`certificate-upload-${index}`} // Unique ID for the file input
              />
              <button
                type="button"
                className="upload-btn"
                onClick={() => document.getElementById(`certificate-upload-${index}`).click()} // Trigger file input on button click
              >
                {certificate.certificateFile ? 'Change Certificate' : 'Upload Certificate'}
              </button>
              {certificate.certificateFile && (
                <span className="file-name">{certificate.certificateFile.name}</span>
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

export default CertificatesModal;

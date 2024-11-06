import React, { useState } from 'react';
import './RecruiterHeader.css';
import defaultBanner from './images/b2.png';
import defaultAvatar from './images/profile logo 1.png';

const RecruiterHeader = ({ userData = {}, onBannerChange, onAvatarChange }) => {
  const [bannerImage, setBannerImage] = useState(userData.banner || defaultBanner);
  const [avatarImage, setAvatarImage] = useState(userData.avatar || defaultAvatar);
  const [isEditMode, setIsEditMode] = useState(false);
  const [profileData, setProfileData] = useState({
    companyName: userData.companyName || '',
    email: userData.email || '',
    currentAddressLine1: userData.currentAddressLine1 || '',
    currentPincode: userData.currentPincode || '',
    state: userData.state || '',
    country: userData.country || '',
    website: userData.website || '',
  });

  const handleBannerChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setBannerImage(URL.createObjectURL(file));
      onBannerChange && onBannerChange(file);
    }
  };

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setAvatarImage(URL.createObjectURL(file));
      onAvatarChange && onAvatarChange(file);
    }
  };

  const toggleEditMode = () => setIsEditMode(!isEditMode);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setIsEditMode(false);
  };

  return (
    <div className="profile-header">
      {/* Banner Section */}
      <div className="banner-container">
        <img src={bannerImage} alt="Banner" className="banner-image" />
        <label className="banner-upload-btn">
          Change Banner
          <input type="file" onChange={handleBannerChange} style={{ display: 'none' }} />
        </label>
      </div>

      {/* Profile Summary Section */}
      <div className="profile-summary-container">
        <label className="avatar-upload-container">
          <img src={avatarImage} alt="Avatar" className="profile-avatar-large" />
          <input type="file" onChange={handleAvatarChange} style={{ display: 'none' }} />
        </label>

        <div className="profile-summary-details">
          <h2 className="profile-name-large">
            {profileData.companyName || 'Company Name'}
          </h2>
          <p className="company-email">{profileData.email || 'company@example.com'}</p>
          <p className="company-location">
            {profileData.currentAddressLine1 || 'Location'}
          </p>
          <p className="company-location">
            {profileData.currentPincode || 'Pincode'}, {profileData.state || 'State'}, {profileData.country || 'Country'}
          </p>
          {profileData.website && (
            <a 
              href={profileData.website } 
              target="_blank" 
              rel="noopener noreferrer" 
              className="company-website"
            >
              {profileData.website }
            </a>
          )}
          <br />
          <button className="edit-details-btn" onClick={toggleEditMode}>Edit Details</button>
        </div>
      </div>

      {/* Edit Details Sidebar */}
      {isEditMode && (
        <div className="edit-details-sidebar">
          <div className="edit-details-header">
            <h2>Edit Profile</h2>
            <button className="close-edit-btn" onClick={toggleEditMode}>X</button>
          </div>
          <div className="Profile_saperater_edit_details"></div>
          <form className="edit-details-form" onSubmit={handleSave}>
            {/* Basic Details */}
            <h3>Basic Details</h3>
            <label>
              Company Name:
              <input type="text" name="companyName" value={profileData.companyName} onChange={handleInputChange} required />
            </label>
            <label>
              Email:
              <input type="email" name="email" value={profileData.email} onChange={handleInputChange} required />
            </label>

            {/* Address Section */}
            <h3>Address Details</h3>
            <label>
              Current Address Line 1:
              <input type="text" name="currentAddressLine1" value={profileData.currentAddressLine1} onChange={handleInputChange} />
            </label>
            <label>
              Pincode:
              <input type="text" name="currentPincode" value={profileData.currentPincode} onChange={handleInputChange} />
            </label>
            <label>
              State:
              <input type="text" name="state" value={profileData.state} onChange={handleInputChange} />
            </label>
            <label>
              Country:
              <input type="text" name="country" value={profileData.country} onChange={handleInputChange} />
            </label>

            {/* Company Website */}
            <label>
              Website:
              <input  type="url" name="website" value={profileData.website} onChange={handleInputChange} />
            </label>
            <button type="submit" className="save-changes-btn">Save</button>
            <br /><br />
          </form>
        </div>
      )}
    </div>
  );
};

export default RecruiterHeader;

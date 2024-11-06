import React, { useState } from 'react';
import './ProfileHeader.css';
import defaultBanner from './images/b2.png'; // Default banner image
import defaultAvatar from './images/profile logo 1.png'; // Default avatar image

const ProfileHeader = ({ userData = {}, onBannerChange, onAvatarChange }) => {
  const [bannerImage, setBannerImage] = useState(userData.banner || defaultBanner);
  const [avatarImage, setAvatarImage] = useState(userData.avatar || defaultAvatar);

  const handleBannerChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setBannerImage(URL.createObjectURL(file));
      onBannerChange && onBannerChange(file); // Check if onBannerChange is provided
    }
  };

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setAvatarImage(URL.createObjectURL(file));
      onAvatarChange && onAvatarChange(file); // Check if onAvatarChange is provided
    }
  };

  return (
    <div className="profile-header">
      <div className="banner-container">
        <img src={bannerImage} alt="Banner" className="banner-image" />
        <label className="banner-upload-btn">
          Change Banner
          <input type="file" onChange={handleBannerChange} style={{ display: 'none' }} />
        </label>
      </div>

      <div className="profile-summary-container">
        <img src={avatarImage} alt="Avatar" className="profile-avatar-large" />
        <label className="avatar-upload-btn">
          Change Avatar
          <input type="file" onChange={handleAvatarChange} style={{ display: 'none' }} />
        </label>

        <div className="profile-summary-details">
          <h2 className="profile-name-large">{userData.name || 'User Name'}</h2>
          <p>{userData.institute || 'Institute Name'}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;

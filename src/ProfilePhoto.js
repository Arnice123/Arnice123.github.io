import React from 'react';
import './ProfilePhoto.css'; 

const ProfilePhoto = () => {
  return (
    <div>
      <img
        src="/images/PP_Me_Photo.jpg"
        alt="a photo of me"        
        className='profile-photo'
      />
    </div>
  );
};

export default ProfilePhoto;
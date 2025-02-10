import React from 'react';
import './ProfilePhoto.css'; 

const ProfilePhoto = () => {
  return (
    <div className='container'>
      <img
        src="/images/PP_Me_Photo.png"
        alt="A photo of me"        
        className='profile-photo'
      />
      <div className="about-me">
        <p>Hello! My name is Arya Akhavein, I am a second year Computor Science Major at SFU, I hope to one day become a software developer.</p>
        <p>In my spare time I play video games, paint, and go hiking.</p>
      </div>
    </div>
  );
};

export default ProfilePhoto;
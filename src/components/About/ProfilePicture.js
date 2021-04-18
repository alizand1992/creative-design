import React from 'react';

const ProfilePicture = ({ alt, image, url }) => {
  return (
    <div className="image-container left-image">
      <div style={{ width: '300px', height: '300px', position: 'relative' }}>
        <a href={url}
           rel="noopener noreferrer"
           target="_blank">
          <img src={image} className="image" alt={alt} />
        </a>
        <a href={url}
           rel="noopener noreferrer"
           target="_blank">
          <img src="/linkedin_logo.png" alt={alt} style={{ width: '27px', height: '27px', position: 'absolute', bottom: 0, right: 0, display: 'inline-block'}} />
        </a>
      </div>
    </div>
  );
};

export default ProfilePicture;

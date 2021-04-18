import React from 'react';

const ServiceImage = ({ animation, image, name, notMobile }) => {
  return (
    <div className={`service-image-title-container ${animation} ${notMobile && 'not-mobile'}`}>
      <div className="service-image-container">
        <img src={image} className="service-image" alt={`${name} service`}/>
      </div>
      <div className="service-title">{name}</div>
    </div>
  );
};

export default ServiceImage;


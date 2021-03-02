import React from 'react';

import './service.css';

const Service = ({ name, image }) => {
  return (
    <div className="service-container">
      <div className="service-image-container">
        <img src={image} className="service-image" alt={`${name} service`}/>
      </div>
      <br />
      {name}
    </div>
  );
};

export default Service;

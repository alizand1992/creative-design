import React from 'react';

const Design = () => {
  const name = 'design';
  const image = `/${name}.png`;

  return (
    <div className="service-container left">
      <div style={{ width: '100%', textAlign: 'center', height: '36px' }}>
        {name.toUpperCase()}
      </div>
      <div style={{ width: '30%', textAlign: 'center' }} >
        <img src={image} className="service-image" alt={`${name} service`} />
      </div>
      <div style={{ width: '70%' }}>
        Our design will reflect your company. We use the latest UI/UX design trends
        to increase customer engagement and improve conversion.
      </div>
    </div>
  )
};

export default Design;

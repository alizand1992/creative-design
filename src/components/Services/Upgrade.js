import React from 'react';

const Upgrade = () => {
  const name = 'upgrade';
  const image = `/${name}.png`;

  const imageStyle = {
    position: 'relative',
    top: '20%',
  };

  return (
    <div className="service-container right">
      <div style={{ width: '100%', textAlign: 'center' }}>
        {name.toUpperCase()}
      </div>
      <div style={{ width: '30%', textAlign: 'center' }} >
        <img src={image} className="service-image" alt={`${name} service`} style={imageStyle} />
      </div>
      <div style={{ width: '70%' }}>
        Already have a website but need help with it? We are here to assist.
        Our services include:
        <ul>
          <li>Adding new features</li>
          <li>Updating the design</li>
          <li>Enhance User Experience</li>
          <li>Improve performance</li>
        </ul>
      </div>
    </div>
  );
};

export default Upgrade;

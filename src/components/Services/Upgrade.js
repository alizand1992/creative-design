import React from 'react';
import { Link } from 'react-router-dom';

const Upgrade = () => {
  const name = 'upgrade';
  const image = `/${name}.png`;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', flexBasis: '50%', marginLeft: '20px', backgroundColor: '#666666'  }}>
      <div style={{ width: '100%', textAlign: 'center' }}>
        {name.toUpperCase()}
      </div>
      <div style={{ width: '30%', textAlign: 'center' }} >
        <img src={image} className="service-image" alt={`${name} service`} />
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

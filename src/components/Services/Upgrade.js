import React from 'react';
import { Link } from 'react-router-dom';

const Upgrade = () => {
  const name = 'upgrade';
  const image = `/${name}.png`;

  const st = {
    display: 'flex',
    justifyContent: 'space-evenly',
  };

  return (
    <div>
      <div className="title" style={st}>
        <div>
          <Link to="/services/">
            <span className="material-icons" style={{ fontSize: '1em', paddingTop: '10px' }}>keyboard_backspace</span>
          </Link>
        </div>
        <div>{name.toUpperCase()}</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
      </div>
      <div className="content">
        <div style={{ width: '100%', textAlign: 'center', marginBottom: '50px' }} >
          <div className="service-image-container">
            <img src={image} className="service-image" alt={`${name} service`} />
          </div>
        </div>
        <div>
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
    </div>
  )
};

export default Upgrade;

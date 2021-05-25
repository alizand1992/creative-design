import React from 'react';
import { Link } from 'react-router-dom';

const Consult = () => {
  const name = 'consult';
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
          We provide consultation on existing and new projects. New project consultation
          fee will be applied to the project price if we continue our collaboration.
        </div>
      </div>
    </div>
  )
};

export default Consult;

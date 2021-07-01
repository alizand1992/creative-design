import React from 'react';

const Consult = () => {
  const name = 'consult';
  const image = `/${name}.png`;

  return (
    <div className="service-container left">
      <div style={{ width: '100%', textAlign: 'center' }}>
        {name.toUpperCase()}
      </div>
      <div style={{ width: '30%', textAlign: 'center' }} >
        <img src={image} className="service-image" alt={`${name} service`} />
      </div>
      <div style={{ width: '70%' }}>
        We provide consultation on existing and new projects. New project consultation
        fee will be applied to the project price if we continue our collaboration.
      </div>
    </div>
  );
};

export default Consult;

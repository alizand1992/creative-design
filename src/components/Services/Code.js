import React from 'react';

const Code = () => {
  const name = 'code';
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
        Our full-stack engineer will work closely with the designer to provide
        the look and feel that you had in mind. We provide web applications and
        responsive mobile web development. Our engineer will use the latest
        technology and best coding practices not only to make your idea come
        to life, but to also create a maintainable and expandable application.
      </div>
    </div>
  );
};

export default Code;

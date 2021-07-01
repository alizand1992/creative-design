import React from 'react';

const Code = () => {
  const name = 'code';
  const image = `/${name}.png`;

  const containerStyle = {
    paddingRight: '10px',
    paddingBottom: '10px'
  };

  const imageStyle = {
    position: 'relative',
    top: '35%',
  };

  const imageContainerStyle = {
    width: '30%',
    textAlign: 'center',
  };

  return (
    <div className="service-container right" style={containerStyle}>
      <div style={{ width: '100%', textAlign: 'center' }}>
        {name.toUpperCase()}
      </div>
      <div style={imageContainerStyle} >
        <img src={image} className="service-image" alt={`${name} service`} style={imageStyle} />
      </div>
      <div style={{ width: '70%', paddingLeft: '10px' }}>
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

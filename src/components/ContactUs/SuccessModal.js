import { Fragment } from 'react';

const SuccessModal = ({ closeModal }) => {
  const style = {
    borderRadius: '15px',
    backgroundColor: '#666666',
    marginLeft: '-292px',
    zIndex: 1000,
    position: 'fixed',
    left: '50vw',
    textAlign: 'center',
    padding: '10px 30px 10px 30px',
    width: '584px',
    height: '100px',
    top: '200px'
  };

  const grayOverlayStyle = {
    zIndex: 999,
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100vw',
    display: 'block',
    backgroundColor: 'black',
    opacity: '80%',
  };

  return (
    <Fragment>
      <div style={grayOverlayStyle} />
      <div style={style}>
        <span style={{ fontSize: '25px' }}>Thank you for contacting us!</span>
        <span style={{ position: 'absolute', right: '20px', cursor: 'pointer' }} onClick={closeModal}>
          X
        </span>
        <br />
        <span style={{ fontSize: '20px' }}>We will reach back to you shortly.</span>
      </div>
    </Fragment>
  )
};

export default SuccessModal;

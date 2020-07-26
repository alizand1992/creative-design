import React from 'react';

import './index.css';

class Home extends React.Component {
  render() {
    return (
      <div className="main-container">
        <div className="title-container">
          <div className="title-content title-creative">Creative</div>
          <div className="title-content title-design">Design</div>
        </div>
        <div className="slogan-container">
          You have a dream<br />
          We make it come to life
        </div>
      </div>
    );
  }
}

export default Home;

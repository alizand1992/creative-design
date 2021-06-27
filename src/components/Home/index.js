import React from 'react';

import './index.css';

class Home extends React.Component {
  render() {
    return (
      <div className="main-container" id="main">
        <div className="title-container">
          <div className="title-content title-creative">Creative</div>
          <div className="title-content title-design">Design</div>
        </div>
        <div className="slogan-container">
          YOU HAVE A DREAM<br />
          WE MAKE IT COME TO LIFE
        </div>
      </div>
    );
  }
}

export default Home;

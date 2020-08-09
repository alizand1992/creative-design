import React from 'react';

class SliderMenu extends React.Component {
  render() {
    const { closeSlideMenu, clName } = this.props
    const display = clName === 'show' ? 'block' : 'none';

    return (
      <React.Fragment>
        <div className="gray-overlay" style={{ display }}></div>
        <div className={`slider-menu ${clName}`}>
          <i className={`material-icons close close-${clName}`} onClick={closeSlideMenu}>close</i>
          <ul className="menu-container">
            <li className="menu-item">ABOUT US</li>
            <li className="menu-item">OUR WORK</li>
            <li className="menu-item">CONTACT US</li>
          </ul>
        </div>
      </React.Fragment>
    )
  }
}

export default SliderMenu;

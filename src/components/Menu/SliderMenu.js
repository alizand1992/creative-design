import React from 'react';
import { Link } from 'react-router-dom';

class SliderMenu extends React.Component {
  render() {
    const { closeSlideMenu, clName, changeMenu } = this.props
    const display = clName === 'show' ? 'block' : 'none';

    return (
      <React.Fragment>
        <div className="gray-overlay" style={{ display }}></div>
        <div className={`slider-menu ${clName}`}>
          <i className={`material-icons close close-${clName}`} onClick={closeSlideMenu}>close</i>
          <ul className="menu-container">
            <li className="menu-item" onClick={() => changeMenu('about_us')}>
              <Link className="menu-item-link" to="/about">ABOUT US</Link>
            </li>
            <li className="menu-item" onClick={() => changeMenu('our_work')}>OUR WORK</li>
            <li className="menu-item" onClick={() => changeMenu('contact_us')}>CONTACT US</li>
          </ul>
        </div>
      </React.Fragment>
    )
  }
}

export default SliderMenu;

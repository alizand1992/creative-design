import React from 'react';
import MenuItem from './MenuItem';

class SliderMenu extends React.Component {
  render() {
    const { activeMenu, closeSlideMenu, clName, changeMenu } = this.props
    const display = clName === 'show' ? 'block' : 'none';

    const menuItems = [
      {
        name: 'about',
        text: 'ABOUT US',
      },
      {
        name: 'services',
        text: 'OUR SERVICES',
      },
      {
        name: 'contact_us',
        text: 'CONTACT US',
      },
    ];

    return (
      <React.Fragment>
        <div className="gray-overlay" style={{ display }} onClick={closeSlideMenu}></div>
        <div className={`slider-menu ${clName}`} style={{ display }}>
          <i className={`material-icons close close-${clName}`} onClick={closeSlideMenu}>close</i>
          <ul className="menu-container">
            <MenuItem name="main" changeMenu={() => { changeMenu('') }}>Home</MenuItem>
            {menuItems.map((menuItem) => {
              return <MenuItem {...menuItem}
                               key={menuItem.name}
                               activeMenu={activeMenu}
                               changeMenu={(name) => { changeMenu(name) }} />
            })}
          </ul>
        </div>
      </React.Fragment>
    )
  }
}

export default SliderMenu;

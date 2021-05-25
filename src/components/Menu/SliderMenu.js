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
        top: 682,
      },
      {
        name: 'services',
        text: 'OUR SERVICES',
        top: 1258,
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
            {menuItems.map((menuItem) => {
              return <MenuItem {...menuItem}
                               key={menuItem.name}
                               activeMenu={activeMenu}
                               top={menuItem.top}
                               changeMenu={(name, top) => { changeMenu(name, top) }} />
            })}
          </ul>
        </div>
      </React.Fragment>
    )
  }
}

export default SliderMenu;

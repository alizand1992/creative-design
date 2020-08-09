import React from 'react';

import './index.css';
import SliderMenu from './SliderMenu';

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clName: '',
    };
  }

  openSlideMenu = () => {
    this.setState({ clName: 'show' });
  }

  closeSlideMenu = () => {
    this.setState({ clName: 'hide' });
  }

  render() {
    const { clName } = this.state;

    return (
      <React.Fragment>
        <i className="material-icons menu-icon" onClick={this.openSlideMenu}>menu</i>
        <SliderMenu closeSlideMenu={this.closeSlideMenu} clName={clName} />
      </React.Fragment>
    )
  }
}

export default Menu;

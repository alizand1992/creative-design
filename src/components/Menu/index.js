import React from 'react';

import './index.css';
import SliderMenu from './SliderMenu';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clName: '',
      activeMenu: '',
    };
  }

  openSlideMenu = () => {
    this.setState({ clName: 'show' });
  }

  closeSlideMenu = () => {
    this.setState({ clName: 'hide' });
  }

  changeMenu = (activeMenu) => {
    this.setState({ activeMenu })
    this.closeSlideMenu();
  }

  render() {
    const { clName, activeMenu } = this.state;

    return (
      <React.Fragment>
        <div className="top-menu-container">
          {activeMenu !== '' &&
            <Link to="/">
              <div className="title-container-menu">
                <div className="title-content-menu title-creative-menu">Creative</div>
                <div className="title-content-menu title-design-menu">Design</div>
              </div>
            </Link>
          }
          <i className="material-icons menu-icon" onClick={this.openSlideMenu}>menu</i>
        </div>
        <SliderMenu closeSlideMenu={this.closeSlideMenu}
                    clName={clName}
                    activeMenu={activeMenu}
                    changeMenu={this.changeMenu} />
      </React.Fragment>
    )
  }
}

export default withRouter(Menu);

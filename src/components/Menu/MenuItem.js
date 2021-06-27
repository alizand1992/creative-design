import React from 'react';
import { Link } from 'react-scroll';

const MenuItem = ({ activeMenu, changeMenu, name, text, top }) => {
  const getClasses = (current, menuItem) => {
    const cls = 'menu-item ';

    if (current === menuItem) {
      return cls + 'menu-item-current';
    } else {
      return cls + 'has-animation';
    }
  }

  const style = name === activeMenu ? { color: 'darkgrey !important' } : {};

  return (
    <li className={getClasses(activeMenu, name)} onClick={changeMenu}>
      <Link className="menu-item-link"
            onSetActive={() => { changeMenu(name) }}
            activeClass="menu-item-current"
            to={`${name}`}
            style={style}
            spy={true}
            smooth={true}>
        {text}
      </Link>
    </li>
  );
};

export default MenuItem;

import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({ activeMenu, changeMenu, name, text }) => {
  const getClasses = (current, menuItem) => {
    const cls = 'menu-item ';

    if (current === menuItem) {
      return cls + 'menu-item-current';
    } else {
      return cls + 'has-animation';
    }
  }

  return (
    <li className={getClasses(activeMenu, name)} onClick={() => changeMenu(name)}>
      <Link className="menu-item-link" to={`/${name}`}>
        {text}
      </Link>
    </li>
  );
};

export default MenuItem;

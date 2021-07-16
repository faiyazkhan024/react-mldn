import React from "react";

import "./Menu.css";

const Menu = ({ items }) => {
  return (
    <nav className="menu">
      <ul className="menuItems">
        {items.map((item, index) => (
          <li key={index} className="menuItem">
            {item.name}
            <ul className="subMenuItems">
              {item.children.map((item, index) => (
                <li key={index} className="subMenuItem">
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;

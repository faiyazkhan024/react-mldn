import React from "react";

import "./Menu.css";


// Component to print Dropdown Navigation bar aka Menu.
const Menu = ( { items } ) => {
  
  // This method take item as parameter item and return string arrow depending if it has children.
  const showArrow = (item) => {
    if (item.children?.length !== 0) return "arrow";
  };

  // Its a recursive function that returns nested unordered lists and list item.
  const getNestedMenuItems = (items) => {
    if (items?.length === 0) return;
    return (
      <ul className="list nestedMenuItems">
        {items.map((item, index) => (
          <li
            key={index}
            className={`listItem nestedMenuItem ${showArrow(item)}`}
          >
            {item.name}
            {getNestedMenuItems(item.children)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <nav className="menu">
      <ul className="list menuItems">
        {items.map((item, index) => (
          <li key={index} className={`listItem menuItem ${showArrow(item)}`}>
            {item.name}
            <ul className="list subMenuItems">
              {item.children.map((item, index) => (
                <li
                  key={index}
                  className={`listItem subMenuItem ${showArrow(item)}`}
                >
                  {item.name}
                  {getNestedMenuItems(item.children)}
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

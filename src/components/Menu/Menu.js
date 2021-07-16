import React, { useState } from "react";

import "./Menu.css";

const Menu = ({ items }) => {
  const [currentItemIndex, setCurrentItemIndex] = useState("");

  const showArrow = (item) => {
    if (item.children.length !== 0) return "arrow";
  };

  const getNestedMenuItems = (items) => {
    if (!items) return;
    return (
      <ul className="list nestedMenuItems">
        {items.map((item, index) => (
          <li
            key={index}
            onMouseOver={() => setCurrentItemIndex(index)}
            onMouseLeave={() => setCurrentItemIndex("")}
            className={`listItem nestedMenuItem 
              ${showArrow(item)} 
              ${currentItemIndex === index && "show"}`}
          >
            {item?.name}
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
              {item.children?.map((item, index) => (
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

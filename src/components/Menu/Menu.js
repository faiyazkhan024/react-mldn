import React, { useState } from "react";

import "./Menu.css";

const Menu = ({ items }) => {
  const [currentItemIndex, setCurrentItemIndex] = useState("");

  const hasChildItem = (item) => {
    return item.children.length !== 0;
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
              ${hasChildItem(item) && "arrow"} 
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
          <li
            key={index}
            className={`listItem menuItem ${hasChildItem(item) && "arrow"}`}
          >
            {item.name}
            <ul className="list subMenuItems">
              {item.children?.map((item, index) => (
                <li
                  key={index}
                  className={`listItem subMenuItem ${
                    hasChildItem(item) && "arrow"
                  }`}
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

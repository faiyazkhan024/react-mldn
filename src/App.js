import Form from "./components/Form/Form";
import { useState, useReducer } from "react";
import Menu from "./components/Menu/Menu";

import "./App.css";

let initialItems = [
  { name: "Left Dropdown", children: ["Item 1", "Item 2", "Item 3"] },
  { name: "Middle Dropdown 1", children: ["Item 1", "Item 2", "Item 3"] },
  { name: "Middle Dropdown 2", children: ["Item 1", "Item 2"] },
  { name: "Middle Dropdown 3", children: ["Item 1"] },
  {
    name: "Right Dropdown",
    children: ["Item 1", "Item 2", "Item 3", "Item 4"],
  },
];

const itemReducer = (items, action) => {
  console.log(action.payload.parent);
  switch (action.type) {
    case "Add":
      return items.map((item) => {
        if (item.name === action.payload.parent)
          return {
            name: item.name,
            children: [...item.children, action.payload.child],
          };
        return { name: item.name, children: [...item.children] };
      });
    default:
      throw new Error("Invalid Input ");
  }
};

const App = () => {
  const [items, dispatch] = useReducer(itemReducer, initialItems);
  const [parent, setParent] = useState("");
  const [child, setChild] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "Add", payload: { parent, child } });
    setChild("");
    setParent("");
  };

  return (
    <main className="main">
      <Form
        items={items}
        child={child}
        parent={parent}
        setParent={setParent}
        setChild={setChild}
        onSubmit={submitHandler}
      />
      <Menu items={items} />
    </main>
  );
};

export default App;

import { useState, useReducer } from "react";

import Form from "./components/Form/Form";
import Menu from "./components/Menu/Menu";

import initialItem from "./initialItem";

import "./App.css";

//* const itemSchema = { name: "String", children: [itemSchema] };

const addItem = (items, { parent, child }) => {
  if (parent === "root") return [...items, { name: child, children: [] }];
  let found = false;
  const updateItem = (items) => {
    return items.map((item) => {
      if (item.name === parent) {
        found = true;
        return {
          name: parent,
          children: [...item.children, { name: child, children: [] }],
        };
      }
      return {
        name: item.name,
        children: found
          ? [...item.children]
          : item.children.length === 0
          ? []
          : updateItem(item.children),
      };
    });
  };

  return updateItem(items);
};

const itemReducer = (items, action) => {
  switch (action.type) {
    case "Add":
      return addItem(items, action.payload);
    default:
      throw new Error("Invalid Input ");
  }
};

const App = () => {
  const [items, dispatch] = useReducer(itemReducer, initialItem);
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
        setChild={setChild}
        setParent={setParent}
        onSubmit={submitHandler}
      />
      <Menu items={items} />
    </main>
  );
};

export default App;

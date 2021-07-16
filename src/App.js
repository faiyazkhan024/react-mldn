import { useState, useReducer } from "react";

import Form from "./components/Form/Form";
import Menu from "./components/Menu/Menu";

import initialItem from "./initialItem";

import "./App.css";

//* const itemSchema = { name: "String", children: [itemSchema] };

const addItem = (items, action) => {
  const { parent, child } = action.payload;

  const findItem = (items) => {
    const foundItem = items.find((item) => item.name === parent);
    if (!foundItem)
      return items.map((item) => item.children && findItem(item.children));
    return foundItem;
  };
};

const itemReducer = (items, action) => {
  console.log(action.payload.parent);
  switch (action.type) {
    case "Add":
      return addItem(items, action);
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
        setParent={setParent}
        setChild={setChild}
        onSubmit={submitHandler}
      />
      <Menu items={items} />
    </main>
  );
};

export default App;

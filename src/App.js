import { useState, useReducer } from "react";

import Form from "./components/Form/Form";
import Menu from "./components/Menu/Menu";

import itemReducer from "./reducers/itemReducer";
import initialItem from "./data/initialItem";

import "./App.css";

//* const itemSchema = { name: "String", children: [itemSchema] };

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
    <main className="app">
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

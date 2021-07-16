import React from "react";

import "./Form.css";

const Form = ({ items, child, parent, onSubmit, setParent, setChild }) => {
  const getAllOptions = (items) => {
    if (!items) return;
    return items.map((item, index) => {
      return (
        <React.Fragment key={index}>
          <option value={item.name}>{item.name}</option>
          {getAllOptions(item.children)}
        </React.Fragment>
      );
    });
  };

  return (
    <form onSubmit={onSubmit} className="form">
      <select
        type="select"
        name="parent"
        className="select"
        placeholder="Parent Category"
        required
        value={parent}
        onChange={(e) => setParent(e.target.value)}
      >
        <option className="placeholder" value="Parent Category" hidden>
          Parent Category
        </option>
        <option className="root" value="root">
          Root
        </option>
        {getAllOptions(items)}
      </select>

      <input
        type="text"
        name="child"
        className="input"
        placeholder="New Category"
        required
        value={child}
        onChange={(e) => setChild(e.target.value)}
      />
      <button
        type="submit"
        className="btn"
        disabled={(child === "") | (parent === "")}
      >
        Submit
      </button>
    </form>
  );
};

export default Form;

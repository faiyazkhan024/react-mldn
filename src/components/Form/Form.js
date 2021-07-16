import React from "react";

import "./Form.css";

const Form = ({ items, child, parent, onSubmit, setParent, setChild }) => {
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
        {items.map((item, index) => (
          <option key={index} value={item.name}>
            {item.name}
          </option>
        ))}
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
      <button type="submit" className="btn">
        Submit
      </button>
    </form>
  );
};

export default Form;

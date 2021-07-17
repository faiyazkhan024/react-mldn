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

export default itemReducer;

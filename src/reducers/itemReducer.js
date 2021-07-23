// Method to add Item
const addItem = (items, { parent, child }) => {
  // Checking and Adding the Item if it is needed to add on root level.
  if (parent === "root") return [...items, { name: child, children: [] }];

  // Initializing a var found to check if the item needed to update is found.
  let found = false;

  // This method find and return the updated item.
  const updateItem = (items) =>
    items.map((item) => {
      // Checking if the current item object is the item to update.
      if (item.name === parent) {
        // Changing found to true if made into the check.
        found = true;

        // Returning the updated item Object.
        return {
          name: parent,
          children: [...item.children, { name: child, children: [] }],
        };
      }

      // Returning the item Object or calling the updateItem method.
      // Depending upon weather item is found or items children have items.
      return {
        name: item.name,
        children: found
          ? [...item.children]
          : item.children.length === 0
          ? []
          : updateItem(item.children),
      };
    });

  return updateItem(items);
};

// It manages the state of the menu item depending on the type of action to be perform.
// Currently it only manages Adding of items.
const itemReducer = (items, action) => {
  switch (action.type) {
    case "Add":
      return addItem(items, action.payload);
    default:
      throw new Error("Invalid Input ");
  }
};

export default itemReducer;

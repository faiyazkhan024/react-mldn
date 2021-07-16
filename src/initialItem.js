const initialItem = [
  {
    name: "Home Page",
    children: [],
  },
  {
    name: "Left Dropdown",
    children: [
      { name: "Any Left Page", children: [] },
      {
        name: "Left Second Level",
        children: [
          { name: "Sl An Page", children: [] },
          { name: "Sl Ao pPage", children: [] },
          {
            name: "Left Third Level",
            children: [
              { name: "Tl An Page", children: [] },
              {
                name: "Left Fourth Level",
                children: [
                  { name: "Fl An Page", children: [] },
                  { name: "Fl Ao Page", children: [] },
                ],
              },
            ],
          },
        ],
      },
      { name: "Another Left Page", children: [] },
    ],
  },
  { name: "Mega Menu", children: [] },
  { name: "Any Page", children: [] },
  { name: "Right Dropdown", children: [] },
];

export default initialItem;

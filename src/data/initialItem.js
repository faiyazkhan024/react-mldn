const initialItem = [
  {
    name: "Home Page",
    children: [],
  },
  {
    name: "Left Dropdown",
    children: [
      { name: "LD Page 1", children: [] },
      {
        name: "LD Second Level",
        children: [
          { name: "LD SL Page 1", children: [] },
          { name: "LD SL page 2", children: [] },
          {
            name: "LD Third Level",
            children: [
              { name: "LD TL Page 1", children: [] },
              {
                name: "LD Fourth Level",
                children: [
                  { name: "LD FL Page 1", children: [] },
                  { name: "LD FL Page 2", children: [] },
                  { name: "LD FL Page 3", children: [] },
                  { name: "LD FL Page 4", children: [] },
                  { name: "LD FL Page 5", children: [] },
                ],
              },
              { name: "LD TL Page 2", children: [] },
            ],
          },
          { name: "LD SL Page 3", children: [] },
        ],
      },
      { name: "LD Page 2", children: [] },
      { name: "LD Page 3", children: [] },
    ],
  },
  {
    name: "Mega Menu",
    children: [
      { name: "M Page 1", children: [] },
      {
        name: "M Second Level",
        children: [
          { name: "M SL Page 1", children: [] },
          { name: "M SL Page 2", children: [] },
          { name: "M SL Page 3", children: [] },
        ],
      },
    ],
  },
  { name: "Any Page", children: [] },
  {
    name: "Right Dropdown",
    children: [
      { name: "RD Page 1", children: [] },
      { name: "RD Page 2", children: [] },
      {
        name: "RD Second Level",
        children: [
          { name: "RD SL Page 1", children: [] },
          { name: "RD SL Page 2", children: [] },
          { name: "RD SL Page 3", children: [] },
          { name: "RD SL Page 4", children: [] },
          { name: "RD SL Page 5", children: [] },
          { name: "RD SL Page 6", children: [] },
        ],
      },
      { name: "RD Page 3", children: [] },
      { name: "RD Page 4", children: [] },
    ],
  },
];

export default initialItem;

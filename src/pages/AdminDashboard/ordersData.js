export const orders = [
  {
    _id: "1",
    user: {
      name: "Alice Johnson",
      email: "alice@example.com",
    },
    total: 59.99,
    status: "Pending",
    createdAt: "2024-10-15T10:30:00Z",
    items: [
      {
        bookId: "101",
        title: "JavaScript: The Good Parts",
        quantity: 1,
        price: 29.99,
      },
      {
        bookId: "102",
        title: "You Don’t Know JS",
        quantity: 1,
        price: 30.0,
      },
    ],
  },
  {
    _id: "2",
    user: {
      name: "Bob Smith",
      email: "bob@example.com",
    },
    total: 45.0,
    status: "Shipped",
    createdAt: "2024-10-18T12:00:00Z",
    items: [
      {
        bookId: "103",
        title: "Eloquent JavaScript",
        quantity: 1,
        price: 45.0,
      },
    ],
  },
  {
    _id: "3",
    user: {
      name: "Carol Williams",
      email: "carol@example.com",
    },
    total: 120.0,
    status: "Delivered",
    createdAt: "2024-10-20T15:45:00Z",
    items: [
      {
        bookId: "104",
        title: "Clean Code",
        quantity: 1,
        price: 60.0,
      },
      {
        bookId: "105",
        title: "The Pragmatic Programmer",
        quantity: 1,
        price: 60.0,
      },
    ],
  },
];

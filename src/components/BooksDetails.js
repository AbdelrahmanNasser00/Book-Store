let books = [
  {
    id: 2,
    title: "It",
    author: "Stephen King",
    language: "EN",
    price: "£12.99",
    salePrice: "£10.99",
  },
  {
    id: 3,
    title: "4:50 from Paddington",
    author: "Agatha Christie",
    language: "EN",
    price: "£8.99",
    salePrice: "£6.99",
  },
  {
    id: 4,
    title: "Daring Greatly",
    author: "Brene Brown",
    language: "EN",
    price: "£16.99",
    salePrice: "£14.99",
  },
  {
    id: 5,
    title: "Code:",
    author: "Charles Petzold",
    language: "EN",
    price: "£11.99",
    salePrice: "£---",
  },
  {
    id: 6,
    title: "The Miracle Morning",
    author: "Hal Elrod",
    language: "EN",
    price: "£9.99",
    salePrice: "£---",
  },
  {
    id: 11,
    title: "The Dome",
    author: "Stephen King",
    language: "EN",
    price: "£13.99",
    salePrice: "£11.99",
  },
  {
    id: 12,
    title: "Carrie",
    author: "Stephen King",
    language: "EN",
    price: "£6.99",
    salePrice: "£---",
  },
];

export const addBook = (newBook) => {
  books = [...books, { ...newBook, id: books.length + 1 }];
};
export const getBooks = () => books;

export default books;

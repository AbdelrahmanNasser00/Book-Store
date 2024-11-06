import { useEffect, useState } from "react";
import { fetchBooks } from "../api";
import { useDispatch } from "react-redux";
import { loadBooks } from "../store/BookSlice";

const UseFetchBooks = () => {
  const [books, setbooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const getBooks = async () => {
      setLoading(true);
      try {
        const response = await fetchBooks();
        setbooks(response.data.books);
        dispatch(loadBooks(response.data.books));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getBooks();
  }, [dispatch]);
  return { books, loading, error };
};

export default UseFetchBooks;

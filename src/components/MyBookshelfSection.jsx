import { useEffect, useState } from "react";
import { getFromLocalStorage } from "../services/storeLS";
import { BookCard } from "./BookCard";

export default function MyBookshelfSection({ loadingState }) {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    loadingState(true);
    setTimeout(() => {
      setBooks(getFromLocalStorage());
      loadingState(false);
    }, 300);
  }, []);
  useEffect(() => {
    setBooks(getFromLocalStorage());
  }, [books]);
  return (
    <section className="w-[88%] lg:w-[82%] h-full flex flex-col items-center">
      <span className="text-2xl lg:text-3xl mt-10">My Bookshelf</span>
      <div className="w-full flex flex-wrap justify-center">
        {books.map((BookData, index) => (
          <BookCard BookData={BookData} key={index} />
        ))}
        {books.length === 0 && (
          <span className="text-lg lg:text-xl mt-10 font-light">
            No books added
          </span>
        )}
      </div>
    </section>
  );
}

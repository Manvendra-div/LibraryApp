import { CiSearch } from "react-icons/ci";
import { searchBooks } from "../services/api";
import { useState } from "react";
import { BookCard } from "./BookCard";

export default function SearchSection({ loadingState }) {
  const [books, setBooks] = useState([]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      loadingState(true);
      const searchValue = event.target.value;
      setTimeout(async () => {
        setBooks(await searchBooks(searchValue));
        loadingState(false);
      }, 50);
    }
  };
  return (
    <section className="w-[88%] lg:w-[82%] h-full flex flex-col items-center">
      <span className="text-2xl lg:text-3xl mt-10">Search Books</span>
      <div className="w-[90%] lg:w-[60%] border-[1px] rounded-md border-gray-700 flex items-center my-10">
        <div className="p-3 border-r-[1px] border-gray-700 h-full">
          <CiSearch />
        </div>
        <input
          type="text"
          placeholder="enter book name"
          className="bg-transparent focus:outline-none m-2 w-full"
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="w-full flex flex-wrap justify-center">
        {books.map((BookData, index) => (
          <BookCard BookData={BookData} key={index} />
        ))}
      </div>
    </section>
  );
}

import { useState } from "react";
import {
  checkTheBook,
  removeFromBooks,
  storeToLocalStorage,
} from "../services/storeLS";

export const BookCard = ({ BookData }) => {
  const [exists, setExists] = useState(checkTheBook(BookData));
  const removeBooks = () => {
    removeFromBooks(BookData);
    setExists(checkTheBook(BookData));
  };
  const addBooks = () => {
    storeToLocalStorage(BookData);
    setExists(checkTheBook(BookData));
  };
  return (
    <div className="flex flex-col justify-between border-[1px] rounded-lg border-gray-700 m-2 p-5 w-[350px] min-h-[150px]">
      <div className="flex">
        <span className="font-bold text-nowrap mr-2">Book Title :</span>
        <p className="font-semibold text-wrap">{BookData.title}</p>
      </div>
      <div className="flex">
        <span className="font-bold text-nowrap mr-2">Edition Count :</span>
        <p className="font-semibold text-wrap">{BookData.edition_count}</p>
      </div>
      {exists ? (
        <button
          className="p-2 rounded-full bg-red-600 hover:bg-red-400 mt-4 transition duration-300 hover:scale-105"
          onClick={removeBooks}
        >
          Remove from My Bookshelf
        </button>
      ) : (
        <button
          className="p-2 rounded-full bg-green-600 hover:bg-green-400 mt-4 transition duration-300 hover:scale-105"
          onClick={addBooks}
        >
          Add to My Bookshelf
        </button>
      )}
    </div>
  );
};

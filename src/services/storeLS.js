
export const storeToLocalStorage = (object) => {
    const prevArr = JSON.parse(localStorage.getItem("books")) || [];
    if (!prevArr.some(book => JSON.stringify(book) === JSON.stringify(object))) {
      const value = [...prevArr, object];
      localStorage.setItem("books", JSON.stringify(value));
    }
  };

  export const checkTheBook = (object) => {
    const prevArr = JSON.parse(localStorage.getItem("books")) || [];
    const exists = prevArr.some(book => JSON.stringify(book) === JSON.stringify(object));
    console.log(exists);
    return exists;
  };
  
  export const removeFromBooks = (object) => {
    const prevArr = JSON.parse(localStorage.getItem("books")) || [];
    const value = prevArr.filter(book => JSON.stringify(book) !== JSON.stringify(object));
    console.log(value);
    localStorage.setItem("books", JSON.stringify(value));
  };
  export const getFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("books")) || [];
  };
  
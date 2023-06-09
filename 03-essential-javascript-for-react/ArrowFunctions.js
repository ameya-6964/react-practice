/* Arrow functions are a new feature in JavaScript that were introduced in ES6. They are a concise way to write functions, and they have some special features that make them different from regular functions. */

import { data, getBook, getBooks } from "./script";

const book = getBook(1); //Getting Book By ID

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

/* function getYear(str) {
  return str.split("-")[0];
  console.log(getYear(publicationDate)); //! 1954
} */

const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate)); // 1954

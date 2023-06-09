/*
 Template literals are a new feature in JavaScript that allow you to create strings that can span multiple lines, contain expressions, and be interpolated with variables. They are defined by using backticks (`) instead of double or single quotes. 
 */

import { data, getBook, getBooks } from "./script";

const book = getBook(1); //Getting Book By ID

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

const summary = ` ${title}, is a Book with ${pages} Number Of Pages, Was Written By ${author} and Published In Year ${
  publicationDate.split("-")[0]
} `;

/* The Lord of the Rings, is a Book with 1216 Number Of Pages, Was Written By J. R. R. Tolkien and Published In Year 1954  */

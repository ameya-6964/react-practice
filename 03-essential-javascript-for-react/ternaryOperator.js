/* The ternary operator is a conditional operator that is used to evaluate a condition and return one of two possible values, depending on whether the condition is true or false. The ternary operator is also known as the conditional expression or the inline if. */

import { data, getBook, getBooks } from "./script";

const book = getBook(1); //Getting Book By ID

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

const result = pages > 1000 ? "Over Thousands Pages " : "Below 1000 Pages";

result;

/* OUTPUT :- Over Thousands Pages */

const updatedBook = {
  ...book,
  pages: 999,
};

const updatedResult =
  pages > 1000 ? "Over Thousands Pages " : "Below 1000 Pages";

updatedResult;

/* Below 1000 Pages */

const summary = ` ${title}, is a Book with ${pages} Number Of Pages, Was Written By ${author} and Published In Year ${
  publicationDate.split("-")[0]
} and The Book Has ${hasMovieAdaptation ? "" : "Not"} been Adapted as a Movie `;

summary;

/* The Lord of the Rings, is a Book with 1216 Number Of Pages, Was Written By J. R. R. Tolkien and Published In Year 1954 , and The Book Has  been Adapted as a Movie */

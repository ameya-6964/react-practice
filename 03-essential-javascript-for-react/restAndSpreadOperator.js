/* In JavaScript, the rest operator, also known as the spread operator, is a special syntax that allows you to pass an arbitrary number of arguments to a function as an array. It is written as three dots (...) */

import { data, getBook, getBooks } from "./script";

const book = getBook(2); //Getting Book By ID

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

const [primaryGenre, secondaryGenre, ...otherGenres] = genres; // Note ... Should Always Be At Last While Destructuring Operation

console.log(primaryGenre, secondaryGenre); // science fiction,humor

console.log(otherGenres); // [ 'speculative fiction', 'short stories', 'fantasy' ]

/* 
                                                  SPREAD OPERATOR
*/

/*
 The spread operator (also known as the spread syntax) is a JavaScript feature that allows you to expand the contents of an iterable object into an array or object literal. The spread operator is denoted by three dots (...). 
 */

const newGenre = [genres, "Epic Fantasy"];

console.log(newGenre);
/* 
 
       OUTPUT
 
 [ 'science fiction',
   'humor',
   'speculative fiction',
   'short stories',
   'fantasy'],
   ['Epic Fantasy' ]
 */

// ! ADDING NEW ELEMENTS TO GENRE ARRAY WITH SPREAD OPERATOR

const newGenres = [...genres, "Epic Fantasy"];

console.log(newGenres);
/* 

      OUTPUT

[ 'science fiction',
  'humor',
  'speculative fiction',
  'short stories',
  'fantasy',
  'Epic Fantasy' ]
*/

// ! ADDING NEW PROPERTY TO BOOK OBJECT WITH SPREAD OPERATOR

const updatBook = {
  book,
  moviePublicationDAte: "2001-12-19",
};
updatBook;

/*  OUTPUT

{ book: 
   { id: 1,
     title: 'The Lord of the Rings',
     publicationDate: '1954-07-29',
     author: 'J. R. R. Tolkien',
     genres: 
      [ 'fantasy',
        'high-fantasy',
        'adventure',
        'fiction',
        'novels',
        'literature' ],
     hasMovieAdaptation: true,
     pages: 1216,
     translations: 
      { spanish: 'El señor de los anillos',
        chinese: '魔戒',
        french: 'Le Seigneur des anneaux' },
     reviews: { goodreads: [Object], librarything: [Object] } },
  moviePublicationDAte: '2001-12-19' }

*/

const updatedBook = {
  ...book,
  moviePublicationDAte: "2001-12-19",
};
updatedBook;

/*
 {
  id: 1,
  title: 'The Lord of the Rings',
  publicationDate: '1954-07-29',
  author: 'J. R. R. Tolkien',
  genres: 
   [ 'fantasy',
     'high-fantasy',
     'adventure',
     'fiction',
     'novels',
     'literature' ],
  hasMovieAdaptation: true,
  pages: 1216,
  translations: 
   { spanish: 'El señor de los anillos',
     chinese: '魔戒',
     french: 'Le Seigneur des anneaux' },
  reviews: 
   { goodreads: { rating: 4.52, ratingsCount: 630994, reviewsCount: 13417 },
     librarything: { rating: 4.53, ratingsCount: 47166, reviewsCount: 452 } },
  moviePublicationDAte: '2001-12-19' 
  
} 
  */

// ! UPDATING CURRENT VALUE OF PROPERTIES WITH SPREAD OPERATOR

const PagesupdatedBook = {
  ...book,
  pages: 1000, // here 1000 Is Overriding 1216
  moviePublicationDAte: "2001-12-19",
};
PagesupdatedBook;
//! NOTE :- Spread Operator Should Be Placed First Otherwise Current Value Will Override Updated Value

/* 
{
   id: 1,
  title: 'The Lord of the Rings',
  publicationDate: '1954-07-29',
  author: 'J. R. R. Tolkien',
  genres: 
   [ 'fantasy',
     'high-fantasy',
     'adventure',
     'fiction',
     'novels',
     'literature' ],
  hasMovieAdaptation: true,
  ? pages: 1000,
  translations: 
   { spanish: 'El señor de los anillos',
     chinese: '魔戒',
     french: 'Le Seigneur des anneaux' },
  reviews: 
   { goodreads: { rating: 4.52, ratingsCount: 630994, reviewsCount: 13417 },
     librarything: { rating: 4.53, ratingsCount: 47166, reviewsCount: 452 } },
  moviePublicationDAte: '2001-12-19' } */

const PageupdatedBook = {
  pages: 1000,
  ...book, // here 1216 is Overriding 1000
  moviePublicationDAte: "2001-12-19",
};
PageupdatedBook;

/* 
  {
     id: 1,
    title: 'The Lord of the Rings',
    publicationDate: '1954-07-29',
    author: 'J. R. R. Tolkien',
    genres: 
     [ 'fantasy',
       'high-fantasy',
       'adventure',
       'fiction',
       'novels',
       'literature' ],
    hasMovieAdaptation: true,
    ? pages: 1216,
    translations: 
     { spanish: 'El señor de los anillos',
       chinese: '魔戒',
       french: 'Le Seigneur des anneaux' },
    reviews: 
     { goodreads: { rating: 4.52, ratingsCount: 630994, reviewsCount: 13417 },
       librarything: { rating: 4.53, ratingsCount: 47166, reviewsCount: 452 } },
    moviePublicationDAte: '2001-12-19' } */

/* 
 Destructuring is a JavaScript feature that allows you to extract values from arrays or objects into variables. This can be useful for making your code more concise and easier to read.
There are two types of destructuring: array destructuring and object destructuring.
 */

import { data, getBook, getBooks } from "./script";

// Objects Destructuring

const book = getBook(2); //Getting Book By ID

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

console.log(title, author, pages, publicationDate, genres, hasMovieAdaptation);

/* OUTPUT 

The Cyberiad
 Stanislaw Lem
  295
  1965-01-01 
[ 'science fiction','humor','speculative fiction','short stories','fantasy' ] 
false 
  */

// Array Destructuring

const [primaryGenre, secondaryGenre] = genres;

console.log(primaryGenre, secondaryGenre);

/* OUTPUT 
 science fiction,humor 
*/

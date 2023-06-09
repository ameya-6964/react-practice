/*
Short-circuiting in JavaScript is a feature that allows the evaluation of an expression to be stopped early if the result is already known. This is done by using the logical operators && and ||.

The && operator evaluates the left-hand operand first. If the left-hand operand is false, the right-hand operand is not evaluated and the result of the expression is false. If the left-hand operand is true, the right-hand operand is evaluated and the result of the expression is the value of the right-hand operand.

The || operator works in the opposite way. The right-hand operand is evaluated first. If the right-hand operand is true, the left-hand operand is not evaluated and the result of the expression is true. If the right-hand operand is false, the left-hand operand is evaluated and the result of the expression is the value of the left-hand operand.

Short-circuiting can be used to improve the performance of your code by preventing unnecessary evaluations. For example, the following code will only call the getData() function if the online variable is true: 
 */

export const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

export function getBooks() {
  return data;
}

export function getBook(id) {
  return data.find((d) => d.id === id);
}

const books = getBooks();

const book = getBook(2);
book;

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

//! AND && Operator

console.log(true && "Some String"); //Some String

console.log(false && "Some String"); // false

console.log(hasMovieAdaptation && "This Book Has A Movie");

//Falsy values :- 0 , "", null, undefined

console.log("" && "Jonas"); // Empty String Because "" is Falsy Value
console.log("Something" && "Jonas"); // Jonas

//! OR || Operator

console.log(true || "some String"); //true
console.log(false || "some String"); // some String

console.log(book.translations.spanish);

const spanishTranslation = book.translations.spanish || "NOT TRANSLATE";

spanishTranslation; // NOT TRANSLATE

console.log(book.reviews.librarything.reviewsCount);

const countWrong = book.reviews.librarything.reviewsCount || "NO DATA";

countWrong; // NO DATA

// ! ?? Knowledge Colation Operator

const count = book.reviews.librarything.reviewsCount ?? "NO DATA";
// ?? It Will Display Anything On Right If Value Is Not 0 or "" empty String
count;

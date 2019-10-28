// TODO: define addFavoriteBook(..) function

var addFavoriteBook = bookName => {
  if (!bookName.includes('Great')) {
    favoriteBooks.push(bookName);
  }
};

// TODO: define printFavoriteBooks() function

var printFavoriteBooks = () => {
  for (let book of favoriteBooks) {
    console.log(`Favorite book: ${book}`);
  }
  console.log(`Number of books: ${favoriteBooks.length}`);
};

var favoriteBooks = [];

addFavoriteBook('A Song of Ice and Fire');
addFavoriteBook('The Great Gatsby');
addFavoriteBook('Crime & Punishment');
addFavoriteBook('Great Expectations');
addFavoriteBook("You Don't Know JS");

// TODO: print out favorite books

printFavoriteBooks();

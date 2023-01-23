import './App.css';
import Search from './views/Search';
import Home from './views/Home';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';

import * as BooksAPI from './apis/BooksAPI';

function App() {
  const [booksList, setBooksList] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  const shelvesArray = ['Currently Reading', 'Want to Read', 'Read'];
  const shelvesOptions = ['Move to...', ...shelvesArray, 'None'];

  const convertToCamelCase = title => {
    const titleSplitToArray = title
      .split(' ')
      .map(word => word[0].toUpperCase() + word.slice(1));
    const titleCamelCase =
      titleSplitToArray.join('')[0].toLowerCase() +
      titleSplitToArray.join('').slice(1);
    return titleCamelCase;
  };

  const getBooks = async () => {
    const booksList = await BooksAPI.getAll();
    return setBooksList(booksList);
  };

  useEffect(() => getBooks(), []);

  const updateShelf = async (book, shelf) => {
    await BooksAPI.update(book, shelf);
    return getBooks();
  };

  const getBooksFromSearch = async query => {
    try {
      if (query !== '') {
        const res = await BooksAPI.search(query);

        const resWithShelf = res.map(bookSearch => {
          booksList.forEach(
            book => bookSearch.id === book.id && (bookSearch.shelf = book.shelf)
          );
          return bookSearch;
        });
        setSearchResult(resWithShelf);

        return setSearchResult(resWithShelf);
      }
      if (query === '') setSearchResult([]);
    } catch (error) {
      console.error('err ' + error.error);
      setSearchResult([]);
    }
  };

  return (
    <Routes className='app'>
      <Route
        exact
        path='/'
        element={
          <Home
            shelvesArray={shelvesArray}
            shelvesOptions={shelvesOptions}
            booksList={booksList}
            updateShelf={updateShelf}
            convertToCamelCase={convertToCamelCase}
          />
        }
      />
      <Route
        path='/search'
        element={
          <Search
            getBooksFromSearch={getBooksFromSearch}
            searchResult={searchResult}
            updateShelf={updateShelf}
          />
        }
      />
    </Routes>
  );
}

export default App;

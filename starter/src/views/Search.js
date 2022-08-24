import { Link } from 'react-router-dom';
import Book from '../components/Book';
import PropTypes from 'prop-types';

const Search = ({ getBooksFromSearch, searchResult, updateShelf }) => {
  const getSearchQuery = e => {
    const query = e.target.value;
    getBooksFromSearch(query);
  };

  return (
    <div className='search-books'>
      <div className='search-books-bar'>
        <Link to='/' className='close-search'>
          Close
        </Link>
        <div className='search-books-input-wrapper'>
          <input
            type='text'
            placeholder='Search by title, author, or ISBN'
            onChange={getSearchQuery}
          />
        </div>
      </div>
      <div className='search-books-results'>
        <ol className='books-grid'>
          {searchResult.length > 0
            ? searchResult.map(book => (
                <Book key={book.id} book={book} updateShelf={updateShelf} />
              ))
            : []}
        </ol>
      </div>
    </div>
  );
};

export default Search;

Search.propTypes = {
  getBooksFromSearch: PropTypes.func.isRequired,
  updateShelf: PropTypes.func.isRequired,
};

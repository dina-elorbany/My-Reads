import { useState } from 'react';
import PropTypes from 'prop-types';
import ShelfSelector from './ShelfSelector';

const Book = ({ book, updateShelf }) => {
  const [defaultOption, setDefaultOption] = useState(
    book.shelf ? book.shelf : 'none'
  );
  const changeShelf = e => {
    const newShelf = e.target.value;
    setDefaultOption(newShelf);
    updateShelf(book, newShelf);
  };

  return (
    <li key={book.id}>
      <div className='book'>
        <div className='book-top'>
          <div
            className='book-cover'
            style={{
              width: 128,
              height: 192,
              backgroundImage: `url("${
                book.imageLinks && book.imageLinks.smallThumbnail
                  ? book.imageLinks.smallThumbnail
                  : 'none'
              }")`,
            }}
          ></div>
          <div className='book-shelf-changer'>
            <ShelfSelector
              book={book}
              defaultOption={defaultOption}
              changeShelf={changeShelf}
            />
          </div>
        </div>
        <div className='book-title'>{book.title}</div>
        <div className='book-authors'>{book.authors.join(', ')}</div>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  updateShelf: PropTypes.func.isRequired,
};

export default Book;

import Book from './Book';
import PropTypes from 'prop-types';

const Shelf = ({
  title,
  books,
  shelvesOptions,
  updateShelf,
  convertToCamelCase,
}) => {
  const booksSortedByShelfTitle = books.filter(
    books => books.shelf === convertToCamelCase(title)
  );

  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{title}</h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          {booksSortedByShelfTitle.map(book => (
            <Book
              key={book.id}
              title={title}
              book={book}
              shelvesOptions={shelvesOptions}
              updateShelf={updateShelf}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

Shelf.protoType = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  shelvesOptions: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired,
  convertToCamelCase: PropTypes.func.isRequired,
};

export default Shelf;

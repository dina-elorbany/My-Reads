import Shelf from './Shelf';
import PropTypes from 'prop-types';

const Shelves = ({
  books,
  updateShelf,
  convertToCamelCase,
  shelvesArray,
  shelvesOptions,
}) => {
  return (
    <div className='list-books-content'>
      <div>
        {shelvesArray.map(shelf => (
          <Shelf
            key={shelf}
            title={shelf}
            books={books}
            shelvesOptions={shelvesOptions}
            updateShelf={updateShelf}
            convertToCamelCase={convertToCamelCase}
          />
        ))}
      </div>
    </div>
  );
};

Shelves.propTypes = {
  books: PropTypes.array.isRequired,
  shelvesArray: PropTypes.array.isRequired,
  shelvesOptions: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired,
  convertToCamelCase: PropTypes.func.isRequired,
};

export default Shelves;

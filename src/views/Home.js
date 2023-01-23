import AddBook from '../components/AddBook';
import Header from '../components/Header';
import Shelves from '../components/Shelves';

import PropTypes from 'prop-types';

const Home = ({
  booksList,
  updateShelf,
  convertToCamelCase,
  shelvesArray,
  shelvesOptions,
}) => {
  return (
    <div className='list-books'>
      <Header />
      <Shelves
        books={booksList}
        updateShelf={updateShelf}
        convertToCamelCase={convertToCamelCase}
        shelvesArray={shelvesArray}
        shelvesOptions={shelvesOptions}
      />
      <AddBook />
    </div>
  );
};

Home.propTypes = {
  booksList: PropTypes.array.isRequired,
  shelvesArray: PropTypes.array.isRequired,
  shelvesOptions: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired,
  convertToCamelCase: PropTypes.func.isRequired,
};

export default Home;

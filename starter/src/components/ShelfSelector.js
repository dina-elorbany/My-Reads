import PropTypes from 'prop-types';

const ShelfSelector = ({ defaultOption, changeShelf }) => {
  // console.log(defaultOption);

  return (
    <select defaultValue={defaultOption} onChange={changeShelf}>
      {/* {options.map((option, index) => (
        <option key={index} value={value} disabled={index === 0 ? true : false}>
          {option}
        </option>
      ))} */}

      <option value='move' disabled>
        Move to...
      </option>
      <option value='currentlyReading'>Currently Reading</option>
      <option value='wantToRead'>Want to Read</option>
      <option value='read'>Read</option>
      <option value='none'>None</option>
    </select>
  );
};

ShelfSelector.propTypes = {
  defaultOption: PropTypes.string.isRequired,
  changeShelf: PropTypes.func.isRequired,
};

export default ShelfSelector;

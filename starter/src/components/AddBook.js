import { Link } from 'react-router-dom';

export default function AddBook() {
  return (
    <div className='open-search'>
      <Link to='/search'>Add a book</Link>
    </div>
  );
}

import './search.css';
import { IoSearch } from 'react-icons/io5';

function Search({ theme }) {
  return (
    <form>
      <div className="search-container">
        <IoSearch className="search-icon" />
        <input className={theme} type="text" placeholder="Search Github username..." />
        <button className="search-btn">Search</button>
      </div>
    </form>
  );
}
export default Search;

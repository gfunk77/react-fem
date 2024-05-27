import './search.css';
import { useState } from 'react';
import { IoSearch } from 'react-icons/io5';

function Search({ theme, search, noResults }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleFormSubmission = (e) => {
    e.preventDefault();
    search(searchTerm);
    setSearchTerm('');
  };

  return (
    <form onSubmit={handleFormSubmission}>
      <div className="search-container">
        <IoSearch className="search-icon" />
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          className={`${theme} ${noResults ? 'no-results' : ''}`}
          type="text"
          placeholder={noResults ? 'No results' : 'Search GitHub username...'}
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </div>
    </form>
  );
}
export default Search;

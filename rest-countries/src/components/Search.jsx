import { IoSearch } from 'react-icons/io5';
import { useRef } from 'react';

function Search({ onSearch }) {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    if (!value) return;
    onSearch(value);
  };

  const handleChange = () => {
    const value = inputRef.current.value;
    if (!value) onSearch('');
  };

  return (
    <form onSubmit={handleSubmit} className="sm:w-1/2">
      <label className="input flex items-center gap-6 text-xs leading-5 font-normal border-none rounded shadow-md pl-8 sm:text-sm sm:h-14">
        <IoSearch className="text-base text-[#c4c4c4] font-semibold sm:text-lg" />
        <input
          ref={inputRef}
          type="search"
          id="search"
          name="search"
          className="grow"
          placeholder="Search for a country..."
          onChange={handleChange}
        />
      </label>
    </form>
  );
}
export default Search;

import { IoSearch } from 'react-icons/io5';

function Search() {
  return (
    <label
      style={{ maxWidth: '480px' }}
      className="input flex items-center gap-6 text-xs leading-5 font-normal border-none shadow-md pl-8">
      <IoSearch style={{ color: 'C4C4C4' }} className="text-base font-semibold" />
      <input type="search" className="grow" placeholder="Search for a country..." />
    </label>
  );
}
export default Search;

import { IoSearch } from 'react-icons/io5';

function Search() {
  return (
    <label className="input flex items-center gap-6 md:w-[480px] text-xs leading-5 font-normal border-none rounded shadow-md pl-8 md:text-sm md:h-14">
      <IoSearch style={{ color: 'C4C4C4' }} className="text-base font-semibold md:text-lg" />
      <input type="search" className="grow" placeholder="Search for a country..." />
    </label>
  );
}
export default Search;

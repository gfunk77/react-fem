import { IoSearch } from 'react-icons/io5';

function Search() {
  return (
    <label className="input flex items-center gap-6 sm:w-1/2 md:w-[480px] text-xs leading-5 font-normal border-none rounded shadow-md pl-8 md:text-sm md:h-14">
      <IoSearch className="text-base text-[#c4c4c4] font-semibold md:text-lg" />
      <input type="search" className="grow" placeholder="Search for a country..." />
    </label>
  );
}
export default Search;

import { IoChevronDown } from 'react-icons/io5';
import { useState, useRef } from 'react';

function Dropdown() {
  const [selected, setSelected] = useState('Filter by Region');
  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  const dropdownMenuRef = useRef(null);

  function toggleMenu() {
    if (dropdownMenuRef.current) {
      dropdownMenuRef.current.classList.toggle('hidden');
    }
  }

  function handleSelect(region) {
    setSelected(region);
    if (dropdownMenuRef.current) {
      dropdownMenuRef.current.classList.add('hidden');
    }
  }

  return (
    <div className="dropdown">
      <div
        tabIndex={0}
        role="button"
        className="input flex items-center justify-between text-xs leading-5 font-normal border-none rounded shadow-md w-52 px-6 md:text-sm md:h-14"
        onClick={toggleMenu}>
        {selected}
        <IoChevronDown />
      </div>
      <ul
        ref={dropdownMenuRef}
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded
         z-[1] w-full max-w-52 p-2 shadow hidden">
        {regions.map((region) => (
          <li key={region}>
            <a onClick={() => handleSelect(region)}>{region}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dropdown;

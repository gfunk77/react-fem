import { IoChevronDown } from 'react-icons/io5';
import { useState, useRef, useEffect } from 'react';
import { Form, useNavigate, useSearchParams } from 'react-router-dom';

function Dropdown() {
  const [selected, setSelected] = useState('Filter by Region');
  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  const dropdownMenuRef = useRef(null);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    setSelected(searchParams.get('region') || 'Filter by Region');
  }, [searchParams]);

  function toggleMenu() {
    dropdownMenuRef.current.classList.toggle('hidden');
  }

  function handleSelect(region) {
    setSelected(region);
    if (!region || region === 'Filter by Region') {
      navigate('/countries');
    } else {
      navigate(`/countries?region=${region}`);
    }

    dropdownMenuRef.current.classList.add('hidden');
  }

  return (
    <Form>
      <div className="dropdown">
        <div
          tabIndex={0}
          role="button"
          className="input flex items-center justify-between text-xs leading-5 font-normal border-none rounded shadow-md w-52 px-6 sm:text-sm sm:h-14"
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
    </Form>
  );
}

export default Dropdown;

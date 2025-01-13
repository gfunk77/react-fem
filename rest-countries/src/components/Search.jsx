import { IoSearch } from 'react-icons/io5';
import { Form, useSubmit } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

function Search({ q }) {
  const [query, setQuery] = useState(q || '');
  const debounceTimeout = useRef(null);
  const submit = useSubmit();

  useEffect(() => {
    setQuery(q || '');
  }, [q]);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = setTimeout(() => {
      if (value.trim === '') {
        submit({ search: '' });
      } else {
        submit({ search: value });
      }
    }, 500);
  };

  return (
    <Form className="sm:w-1/2">
      <label className="input flex items-center gap-6 text-xs leading-5 font-normal border-none rounded shadow-md pl-8 sm:text-sm sm:h-14">
        <IoSearch className="text-base text-[#c4c4c4] font-semibold sm:text-lg" />
        <input
          type="search"
          id="search"
          name="search"
          value={query}
          className="grow"
          placeholder="Search for a country..."
          onChange={handleChange}
        />
      </label>
    </Form>
  );
}
export default Search;

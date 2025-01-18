import { IoSearch } from 'react-icons/io5';
import { useEffect, useRef } from 'react';
import { Form, useNavigate, useSearchParams } from 'react-router-dom';

function Search() {
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    inputRef.current.value = searchParams.get('search') || '';
  }, [searchParams]);

  const handleChange = () => {
    const value = inputRef.current.value;
    if (!value) navigate('/countries');
  };

  return (
    <Form className="sm:w-1/2">
      <label className="input bg-primary flex items-center gap-6 text-xs leading-5 font-normal border-none rounded shadow-md pl-8 sm:text-sm sm:h-14">
        <button type="submit" className="text-base font-semibold sm:text-lg">
          <IoSearch />
        </button>
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
    </Form>
  );
}
export default Search;

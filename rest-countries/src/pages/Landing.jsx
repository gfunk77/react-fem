import Search from '../components/Search';
import Dropdown from '../components/Dropdown';

function Landing() {
  const placeholders = Array.from({ length: 8 }, (_, i) => 'Hello ' + (i + 1));

  return (
    <>
      <div className="sm:col-span-full flex flex-col gap-10 sm:flex-row  sm:justify-between transition-all">
        <Search />
        <Dropdown />
      </div>
      {placeholders.map((placeholder) => (
        <div
          key={placeholder}
          className="h-52 bg-[dodgerblue] w-full min-w-[240px] justify-self-center flex items-center justify-center">
          {placeholder}
        </div>
      ))}
    </>
  );
}
export default Landing;

import Search from '../components/Search';
import Dropdown from '../components/Dropdown';

function Landing() {
  const placeholders = Array.from({ length: 8 }, (_, i) => 'Hello ' + (i + 1));

  return (
    <>
      <div className="sm:col-span-full flex flex-col gap-10 sm:flex-row  sm:justify-between">
        <Search />
        <Dropdown />
      </div>
      <div
        className="grid xl:gap-x-10 lg:gap-x-16 md:gap-x-52 sm:gap-x-20 gap-x-16 gap-y-12 mt-8 place-content-center"
        style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(264px, 264px))',
        }}>
        {placeholders.map((placeholder) => (
          <div key={placeholder} className="bg-[dodgerblue]">
            {placeholder}
          </div>
        ))}
      </div>
    </>
  );
}
export default Landing;

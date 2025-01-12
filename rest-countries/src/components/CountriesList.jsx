import { Country } from './Country';

function CountriesList({ countries }) {
  return (
    <div
      className="grid gap-10 my-8 md:my-12 place-content-center md:place-content-between"
      style={{
        gridTemplateColumns: 'repeat(auto-fit, minmax(264px, 264px))',
      }}>
      {countries.map((country) => {
        return <Country key={country.cca3} country={country} />;
      })}
    </div>
  );
}
export default CountriesList;

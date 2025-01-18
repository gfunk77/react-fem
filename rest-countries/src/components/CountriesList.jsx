import Country from './Country';

function CountriesList({ countries }) {
  return (
    <div className="grid-cols-auto-fit my-8 sm:my-12 custom-sm:place-content-between transition-all">
      {countries.map((country) => {
        return <Country key={country.cca3} country={country} />;
      })}
    </div>
  );
}
export default CountriesList;

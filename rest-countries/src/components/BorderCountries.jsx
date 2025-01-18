import BorderCountry from './BorderCountry';

function BorderCountries({ borderCountries, borderClick }) {
  return (
    <>
      <p className="text-base mb-4">Border Countries: </p>
      <ul className="flex flex-wrap gap-[10px]">
        {borderCountries
          ? borderCountries.map((border) => {
              return <BorderCountry key={border.cca3} border={border} borderClick={borderClick} />;
            })
          : 'None'}
      </ul>
    </>
  );
}

export default BorderCountries;

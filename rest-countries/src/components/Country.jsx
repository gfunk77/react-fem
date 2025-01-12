export function Country({ country }) {
  const {
    name: { common: name },
    flags: { svg },
    capital,
    population,
    region,
  } = country;
  return (
    <div key={name} className="card bg-base-100 shadow-xl rounded">
      <figure>
        <img src={svg} alt={name} className="h-[160px] w-full object-cover" />
      </figure>
      <div className="card-body p-6 ">
        <h2 className="card-title mb-2">{name}</h2>
        <p>Region: {region}</p>
        <p>Population: {population}</p>
        <p>Capital: {capital}</p>
      </div>
    </div>
  );
}

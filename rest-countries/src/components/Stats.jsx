function StatItem({ label, value }) {
  return (
    <p>
      {label}: <span className="font-light">{value}</span>
    </p>
  );
}

function Stats({ data }) {
  const stats = [
    { label: 'Native Name', value: data.name.common },
    { label: 'Population', value: data.population },
    { label: 'Region', value: data.region },
    { label: 'Sub Region', value: data.subregion },
    { label: 'Capital', value: data.capital },
    { label: 'Top Level Domain', value: data.tld[0] },
    {
      label: 'Currencies',
      value: Object.keys(data.currencies).join(', '),
    },
    { label: 'Languages', value: Object.values(data.languages).join(', ') },
  ];

  return (
    <>
      <h1 className="text-[22px] sm:text-[32px] font-extrabold">{data.name.common}</h1>
      <div className="flex flex-col custom-sm:flex-row justify-between">
        <div className="my-4 text-sm leading-8 sm:leading-8 sm:text-base ">
          {stats.slice(0, 5).map((stat) => (
            <StatItem key={stat.label} label={stat.label} value={stat.value} />
          ))}
        </div>
        <div className="my-4 text-sm leading-8 sm:leading-8 sm:text-base">
          {stats.slice(5).map((stat) => (
            <StatItem key={stat.label} label={stat.label} value={stat.value} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Stats;

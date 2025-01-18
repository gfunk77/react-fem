import { Search, CountriesList, Dropdown } from '../components';
import { getInitialData, getRegion, getSearch } from '../api/api';
import { useLoaderData } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    const search = url.searchParams.get('search');
    const region = url.searchParams.get('region');

    const queryKey = search
      ? ['searchCountries', search]
      : region
      ? ['regionCountries', region]
      : ['initialData'];
    const queryFn = search
      ? () => getSearch(search)
      : region
      ? () => getRegion(region)
      : () => getInitialData();

    const data = await queryClient.ensureQueryData({ queryKey, queryFn });

    return { countries: data };
  };

function Landing() {
  const { countries } = useLoaderData();
  const [filteredCountries, setFilteredCountries] = useState(countries);

  useEffect(() => {
    setFilteredCountries(countries);
  }, [countries]);

  return (
    <>
      <div className="sm:col-span-full flex flex-col sm:justify-between gap-10 sm:flex-row  ">
        <Search />
        <Dropdown />
      </div>
      <CountriesList countries={filteredCountries} />
    </>
  );
}
export default Landing;

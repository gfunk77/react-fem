import { Search, CountriesList, Dropdown } from '../components';
import { getInitialData, getRegion, getSearch } from '../api/api';
import { useLoaderData } from 'react-router-dom';

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    const search = url.searchParams.get('search');
    const region = url.searchParams.get('region');

    const getQueryFn = search
      ? () => getSearch(search)
      : region
      ? () => getRegion(region)
      : () => getInitialData();

    const data = await queryClient.ensureQueryData(getQueryFn());
    return { countries: data };
  };

function Landing() {
  const { countries } = useLoaderData();

  return (
    <>
      <div className="sm:col-span-full flex flex-col sm:justify-between gap-10 sm:flex-row  ">
        <Search />
        <Dropdown />
      </div>
      <CountriesList countries={countries} />
    </>
  );
}
export default Landing;

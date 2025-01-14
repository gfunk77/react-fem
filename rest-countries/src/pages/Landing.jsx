import Search from '../components/Search';
import Dropdown from '../components/Dropdown';
import CountriesList from '../components/CountriesList';
import axios from 'axios';
import { useLoaderData, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const baseUrl = 'https://restcountries.com/v3.1';
const codes = ['deu', 'usa', 'bra', 'isl', 'afg', 'ala', 'alb', 'dza'];
const codesQuery = `/alpha?codes=${codes.join(',')}`;

const getInitialData = async () => {
  try {
    const response = await axios.get(baseUrl + codesQuery);

    const filteredCountries = codes.map((code) =>
      response.data.find((country) => country.cca3.toLowerCase() === code)
    );

    return filteredCountries;
    // eslint-disable-next-line no-unused-vars
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

const getSearch = async (searchTerm) => {
  try {
    const response = await axios.get(`${baseUrl}/name/${searchTerm}`);

    return response.data;
    // eslint-disable-next-line no-unused-vars
  } catch (error) {
    throw new Error(`Country with name ${searchTerm} not found`);
  }
};

const getRegion = async (region) => {
  try {
    const response = await axios.get(`${baseUrl}/region/${region}`);

    return response.data;
    // eslint-disable-next-line no-unused-vars
  } catch (error) {
    throw new Error(`Region ${region} not found`);
  }
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    const search = url.searchParams.get('search');
    const region = url.searchParams.get('region');

    let data;

    if (search) {
      data = await queryClient.ensureQueryData({
        queryKey: ['searchCountries', search],
        queryFn: () => getSearch(search),
      });
      if (!data) {
        throw new Response({
          status: 404,
          statusText: 'Not Found',
          message: `Country with name ${search} not found`,
        });
      }
    } else if (region) {
      data = await queryClient.ensureQueryData({
        queryKey: ['regionCountries', region],
        queryFn: () => getRegion(region),
      });
    } else {
      data = await queryClient.ensureQueryData({
        queryKey: ['initialData'],
        queryFn: () => getInitialData(),
      });
    }

    return { countries: data };
  };

function Landing() {
  const { countries } = useLoaderData();
  const [filteredCountries, setFilteredCountries] = useState(countries);
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setFilteredCountries(countries);
  }, [countries]);

  const handleSelectedRegion = async (region) => {
    if (region === 'Filter by Region') {
      setFilteredCountries(countries);
      setSearchParams({});
    } else {
      setSearchParams({ region });
    }
  };

  const handleSearch = async (searchTerm) => {
    if (!searchTerm) {
      setFilteredCountries(countries);
      setSearchParams({});
      return;
    } else {
      setSearchParams({ search: searchTerm });
    }
  };

  return (
    <>
      <div className="sm:col-span-full flex flex-col sm:justify-between gap-10 sm:flex-row  ">
        <Search onSearch={handleSearch} />
        <Dropdown onSelectedRegion={handleSelectedRegion} />
      </div>
      <CountriesList countries={filteredCountries} />
    </>
  );
}
export default Landing;

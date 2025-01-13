import Search from '../components/Search';
import Dropdown from '../components/Dropdown';
import CountriesList from '../components/CountriesList';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';

const baseUrl = 'https://restcountries.com/v3.1';
const codes = ['deu', 'usa', 'bra', 'isl', 'afg', 'ala', 'alb', 'dza'];
const codesQuery = `/alpha?codes=${codes.join(',')}`;

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const q = url.searchParams.get('search');
  let countries;
  if (q) {
    const response = await axios.get(`${baseUrl}/name/${q}`);
    countries = response.data;
  } else {
    const response = await axios.get(baseUrl + codesQuery);
    const fetchedCountries = response.data;

    countries = codes.map((code) =>
      fetchedCountries.find((country) => country.cca3.toLowerCase() === code)
    );
  }

  return { countries, q };
};

function Landing() {
  const { countries, q } = useLoaderData();
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const queryClient = useQueryClient();

  useEffect(() => {
    setFilteredCountries(countries);
  }, [countries]);

  const getRegionCountries = async (region) => {
    const response = await axios.get(`${baseUrl}/region/${region}`);
    return response.data;
  };

  const handleSelectedRegion = async (region) => {
    if (region === 'Filter by Region') {
      setFilteredCountries(countries);
    } else {
      const data = await queryClient.fetchQuery({
        queryKey: ['regionCountries', region],
        queryFn: () => getRegionCountries(region),
      });

      setFilteredCountries(data);
    }
  };

  return (
    <>
      <div className="sm:col-span-full flex flex-col sm:justify-between gap-10 sm:flex-row  ">
        <Search q={q} />
        <Dropdown onSelectedRegion={handleSelectedRegion} />
      </div>
      <CountriesList countries={filteredCountries} />
    </>
  );
}
export default Landing;

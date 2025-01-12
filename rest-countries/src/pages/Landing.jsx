import Search from '../components/Search';
import Dropdown from '../components/Dropdown';
import CountriesList from '../components/CountriesList';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';

const baseUrl = 'https://restcountries.com/v3.1';
const codes = ['deu', 'usa', 'bra', 'isl', 'afg', 'ala', 'alb', 'dza'];
const codesQuery = `/alpha?codes=${codes.join(',')}`;

export const loader = async () => {
  const response = await axios.get(baseUrl + codesQuery);
  console.log(baseUrl + codesQuery);
  const countries = response.data;
  const sortedCountries = codes.map((code) =>
    countries.find((country) => country.cca3.toLowerCase() === code)
  );
  return { countries: sortedCountries };
};

function Landing() {
  const { countries } = useLoaderData();
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const handleSelectedRegion = async (region) => {
    if (region === 'Filter by Region') {
      setFilteredCountries(countries);
    } else {
      const response = await axios.get(`${baseUrl}/region/${region}`);
      setFilteredCountries(response.data);
    }
  };

  return (
    <>
      <div className="sm:col-span-full flex flex-col gap-10 sm:flex-row  sm:justify-between">
        <Search />
        <Dropdown onSelectedRegion={handleSelectedRegion} />
      </div>
      <CountriesList countries={filteredCountries} />
    </>
  );
}
export default Landing;

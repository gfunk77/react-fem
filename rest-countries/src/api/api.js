import axios from 'axios';

const baseUrl = 'https://restcountries.com/v3.1';
const codes = ['deu', 'usa', 'bra', 'isl', 'afg', 'ala', 'alb', 'dza'];
const codesQuery = `/alpha?codes=${codes.join(',')}`;

export const getCountryDetail = (id) => {
  return {
    queryKey: ['country', id],
    queryFn: async () => {
      const { data } = await axios.get(`${baseUrl}/alpha/${id}`);
      return data[0];
    },
  };
};

export const getInitialData = async () => {
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

export const getSearch = async (searchTerm) => {
  try {
    const response = await axios.get(`${baseUrl}/name/${searchTerm}`);

    return response.data;
    // eslint-disable-next-line no-unused-vars
  } catch (error) {
    throw new Error(`Country with name ${searchTerm} not found`);
  }
};

export const getRegion = async (region) => {
  try {
    const response = await axios.get(`${baseUrl}/region/${region}`);

    return response.data;
    // eslint-disable-next-line no-unused-vars
  } catch (error) {
    throw new Error(`Region ${region} not found`);
  }
};

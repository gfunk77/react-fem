import axios from 'axios';

const baseUrl = 'https://restcountries.com/v3.1';
const codes = ['deu', 'usa', 'bra', 'isl', 'afg', 'ala', 'alb', 'dza'];
const codesQuery = `/alpha?codes=${codes.join(',')}`;

export const getInitialData = () => {
  return {
    queryKey: ['initialData'],
    queryFn: async () => {
      const { data } = await axios.get(baseUrl + codesQuery);

      const filteredCountries = codes.map((code) =>
        data.find((country) => country.cca3.toLowerCase() === code)
      );

      return filteredCountries;
    },
  };
};

export const getSearch = (searchTerm) => {
  return {
    queryKey: ['searchCountries', searchTerm],
    queryFn: async () => {
      const { data } = await axios.get(`${baseUrl}/name/${searchTerm}`);
      return data;
    },
  };
};

export const getRegion = (region) => {
  return {
    queryKey: ['regionCountries', region],
    queryFn: async () => {
      const { data } = await axios.get(`${baseUrl}/region/${region}`);
      return data;
    },
  };
};

export const getCountryDetail = (id) => {
  return {
    queryKey: ['country', id],
    queryFn: async () => {
      const { data } = await axios.get(`${baseUrl}/alpha/${id}`);
      return data[0];
    },
  };
};

export const getBorderCountries = (borders) => {
  return {
    queryKey: ['borders', borders],
    queryFn: async () => {
      const { data } = await axios.get(`${baseUrl}/alpha?codes=${borders.join(',')}`);
      return data;
    },
  };
};

import { useLoaderData, useNavigate } from 'react-router-dom';
import { getCountryDetail } from '../api/api';
import { useQuery } from '@tanstack/react-query';

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params;
    await queryClient.ensureQueryData(getCountryDetail(id));
    return { id };
  };

function CountryDetail() {
  const { id } = useLoaderData();
  const { data } = useQuery(getCountryDetail(id));
  const navigate = useNavigate();
  console.log(data);

  const handleBorderClick = (border) => {
    navigate(`/countries/${border}`);
  };

  const languages = Object.values(data.languages).join(', ');
  const currencies = Object.keys(data.currencies).join(', ');

  return (
    <>
      <button onClick={() => navigate(-1)}>Back</button>
      <div className="grid gap-x-20 sm:grid-cols-2">
        <img src={data.flags?.svg} alt="" />
        <div>
          <h1>{data.name.common}</h1>
          <div className="grid sm:grid-cols-2">
            <div>
              <p>Native Name: {data.name.common}</p>
              <p>Population: {data.population}</p>
              <p>Region: {data.region}</p>
              <p>Sub Region: {data.subregion}</p>
              <p>Capital: {data.capital}</p>
            </div>
            <div>
              <p>Top Level Domain: {data.tld[0]}</p>
              <p>Currency: {currencies}</p>
              <p>Languages: {languages}</p>
            </div>
          </div>
          <div>
            <ul>
              borders:{' '}
              {data.borders
                ? data.borders.map((border) => {
                    return (
                      <li key={border}>
                        <button onClick={() => handleBorderClick(border)}>{border}</button>
                      </li>
                    );
                  })
                : 'None'}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default CountryDetail;

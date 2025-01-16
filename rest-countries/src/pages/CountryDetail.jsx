import { useLoaderData, useNavigate } from 'react-router-dom';
import { getCountryDetail } from '../api/api';
import { useQuery } from '@tanstack/react-query';
import { IoArrowBack } from 'react-icons/io5';

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

  const handleBorderClick = (border) => {
    navigate(`/countries/${border}`);
  };

  const languages = Object.values(data.languages).join(', ');
  const currencies = Object.keys(data.currencies).join(', ');

  return (
    <>
      <button className="btn btn-sm mb-16 rounded-sm" onClick={() => navigate(-1)}>
        <IoArrowBack />
        Back
      </button>
      <div className="grid gap-y-12 lg:grid-cols-2 lg:gap-x-8 lg:place-items-center  mb-20">
        <img src={data.flags?.svg} alt={data.flags.alt} />
        <div>
          <h1 className="text-[22px] sm:text-[32px] font-extrabold">{data.name.common}</h1>
          <div className="flex flex-col custom-sm:flex-row justify-between">
            <div className="my-4 text-sm leading-8 sm:leading-8 sm:text-base ">
              <p>
                Native Name: <span className="font-light">{data.name.common}</span>
              </p>
              <p>
                Population: <span className="font-light">{data.population}</span>
              </p>
              <p>
                Region: <span className="font-light">{data.region}</span>
              </p>
              <p>
                Sub Region: <span className="font-light">{data.subregion}</span>
              </p>
              <p>
                Capital: <span className="font-light">{data.capital}</span>
              </p>
            </div>
            <div className="my-4 text-sm leading-8 sm:leading-8 sm:text-base">
              <p>
                Top Level Domain: <span className="font-light">{data.tld[0]}</span>
              </p>
              <p>
                Currency: <span className="font-light">{currencies}</span>
              </p>
              <p>
                Languages: <span className="font-light">{languages}</span>
              </p>
            </div>
          </div>
          <p className="text-base mb-4">Border Countries: </p>
          <ul className="flex flex-wrap gap-[10px]">
            {data.borders
              ? data.borders.map((border) => {
                  return (
                    <li key={border}>
                      <button
                        className="btn btn-sm px-[30px] rounded-sm text-xs font-light"
                        onClick={() => handleBorderClick(border)}>
                        {border}
                      </button>
                    </li>
                  );
                })
              : 'None'}
          </ul>
        </div>
      </div>
    </>
  );
}

export default CountryDetail;

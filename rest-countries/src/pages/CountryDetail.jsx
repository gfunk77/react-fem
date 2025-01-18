import { BorderCountries, Stats, Flag } from '../components';

import { useLoaderData, useNavigate } from 'react-router-dom';
import { getCountryDetail, getBorderCountries } from '../api/api';
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

  const { data: borderCountries } = useQuery(getBorderCountries(data?.borders));

  return (
    <>
      <button className="btn btn-sm bg-primary mb-16 rounded-sm" onClick={() => navigate(-1)}>
        <IoArrowBack />
        Back
      </button>
      <div className="grid gap-y-12 lg:grid-cols-2 lg:gap-x-8 lg:place-items-center  mb-20">
        <Flag flag={data.flags?.svg} text={data.flags?.alt} />
        <div>
          <Stats data={data} />
          <BorderCountries borderCountries={borderCountries} borderClick={handleBorderClick} />
        </div>
      </div>
    </>
  );
}

export default CountryDetail;

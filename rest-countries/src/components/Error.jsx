import earth from '../assets/earth.svg';
import { useRouteError, Link } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import BaseLayout from '../pages/BaseLayout';

function Error() {
  const error = useRouteError();
  return (
    <>
      <BaseLayout />
      <Link
        to="countries"
        className="container mx-auto px-4 lg:px-12 flex gap-2 items-center text-2xl">
        <IoArrowBack className="text-2xl" />
        <p>Back</p>
      </Link>

      <div className="h-full flex flex-col gap-4 items-center justify-center">
        <h1 className="text-2xl">{error.status}</h1>
        <img src={earth} alt="earth" className="w-3/4" />
        <p>{error.message}</p>
      </div>
    </>
  );
}
export default Error;

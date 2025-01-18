import { useNavigate } from 'react-router-dom';

function BorderCountry({ border }) {
  const navigate = useNavigate();

  return (
    <li key={border.cca3}>
      <button
        className="btn btn-sm bg-primary px-[30px] rounded-sm text-xs font-light"
        onClick={() => navigate(`/countries/${border.cca3}`)}>
        {border.name.common}
      </button>
    </li>
  );
}

export default BorderCountry;

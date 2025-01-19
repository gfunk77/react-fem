import Arrow from './Arrow';

function Input() {
  return (
    <div className="form-control">
      <input type="text" placeholder="Search for any IP address or domain" />
      <button className="search-btn">
        <Arrow />
      </button>
    </div>
  );
}

export default Input;

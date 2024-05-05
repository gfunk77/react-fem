import { IoMoon } from 'react-icons/io5';
import './header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="title">devfinder</h1>
      <button type="button" className="btn">
        <span className="icon">
          Dark <IoMoon />
        </span>
      </button>
    </header>
  );
}
export default Header;

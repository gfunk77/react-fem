import { IoMoon, IoSunnySharp } from 'react-icons/io5';
import './header.css';

function Header({ changeTheme, theme }) {
  const isLightTheme = theme === 'light';
  const titleStyle = {
    color: isLightTheme ? 'var(--light-theme-text-dark)' : 'var(--dark-theme-text-primary)',
  };

  return (
    <header className="header">
      <h1 className="title" style={titleStyle}>
        devfinder
      </h1>
      <button type="button" className="header-btn" onClick={changeTheme}>
        <span className={`icon ${isLightTheme ? 'icon-light' : 'icon-dark'}`}>
          {isLightTheme ? (
            <>
              Dark <IoMoon />
            </>
          ) : (
            <>
              Light <IoSunnySharp />
            </>
          )}
        </span>
      </button>
    </header>
  );
}
export default Header;

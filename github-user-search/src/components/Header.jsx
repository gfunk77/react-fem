import { IoMoon, IoSunnySharp } from 'react-icons/io5';
import useHeaderStyles from '../hooks/useHeaderStyles';
import './header.css';

function Header({ changeTheme, theme }) {
  const { titleStyle, iconClass } = useHeaderStyles(theme);
  return (
    <header className="header">
      <h1 className="title" style={titleStyle}>
        devfinder
      </h1>
      <button type="button" className="header-btn" onClick={changeTheme}>
        <span className={`icon ${iconClass}`}>
          {theme === 'light' ? (
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

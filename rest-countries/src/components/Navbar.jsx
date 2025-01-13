import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';
import useThemeToggle from '../hooks/useThemeToggle';

export function Logo({ children }) {
  return <h1 className="font-extrabold flex-1 text-sm sm:text-2xl">{children}</h1>;
}

export function ThemeToggle() {
  const { isDark, inputRef, handleChange } = useThemeToggle();

  return (
    <div className="flex items-center space-x-2">
      <button className="flex items-center sm:text-xl" aria-label="Toggle dark mode">
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input
            onChange={handleChange}
            ref={inputRef}
            type="checkbox"
            className="theme-controller"
            value="dark"
          />
          <IoSunnyOutline className="swap-on" aria-hidden="true" />
          <IoMoonOutline className="swap-off" aria-hidden="true" />
        </label>
      </button>
      <span className="font-semibold text-xs sm:text-base leading-4">
        {isDark ? 'Light Mode' : 'Dark Mode'}
      </span>
    </div>
  );
}

function Navbar({ children }) {
  return (
    <header className="navbar shadow-md">
      <div className="container mx-auto px-4 lg:px-12">{children}</div>
    </header>
  );
}
export default Navbar;

import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';
import useThemeToggle from '../hooks/useThemeToggle';

export function Logo({ children }) {
  return <h1 className="font-extrabold flex-1 text-sm md:text-2xl">{children}</h1>;
}

export function ThemeToggle() {
  const { isDark, inputRef, handleChange } = useThemeToggle();

  return (
    <div className="flex items-center space-x-2">
      <button className="flex items-center md:text-xl" aria-label="Toggle dark mode">
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
      <span className="font-semibold text-xs md:text-base leading-4">
        {isDark ? 'Light Mode' : 'Dark Mode'}
      </span>
    </div>
  );
}

function Navbar({ children }) {
  return <header className="navbar shadow-md h-20 px-4 md:px-20 transition-all">{children}</header>;
}
export default Navbar;

import { useState, useEffect, useRef } from 'react';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

export function Logo({ children }) {
  return <h1 className="font-extrabold flex-1 text-sm md:text-2xl">{children}</h1>;
}

function getInitialTheme() {
  const storedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  return storedTheme === 'dark' || prefersDark;
}

export function ThemeToggle() {
  const inputRef = useRef(null);
  const [isDark, setIsDark] = useState(getInitialTheme());

  useEffect(() => {
    const themeController = inputRef.current;
    if (themeController) {
      themeController.checked = isDark;
      document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }
  }, [isDark]);

  const handleChange = () => setIsDark(inputRef.current.checked);

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
  return (
    <header className="navbar shadow-md h-20 px-4">
      <div className="container mx-auto flex items-center justify-between">{children}</div>
    </header>
  );
}
export default Navbar;
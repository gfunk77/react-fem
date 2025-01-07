import Navbar, { Logo, ThemeToggle } from '../components/Navbar';
import { Outlet } from 'react-router-dom';

function BaseLayout() {
  return (
    <>
      <Navbar>
        <Logo>Where in the world?</Logo>
        <ThemeToggle />
      </Navbar>
      <div className="mt-6 md:mt-12 px-4 md:px-20 grid gap-y-10 md:gap-y-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-x-20 transition-all">
        <Outlet />
      </div>
    </>
  );
}
export default BaseLayout;

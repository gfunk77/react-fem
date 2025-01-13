import Navbar, { Logo, ThemeToggle } from '../components/Navbar';
import { Outlet } from 'react-router-dom';

function BaseLayout() {
  return (
    <>
      <Navbar>
        <Logo>Where in the world?</Logo>
        <ThemeToggle />
      </Navbar>
      <div className="container mx-auto px-4 lg:px-12 mt-6 sm:mt-12">
        <Outlet />
      </div>
    </>
  );
}
export default BaseLayout;

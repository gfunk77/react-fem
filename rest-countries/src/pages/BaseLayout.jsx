import Navbar, { Logo, ThemeToggle } from '../components/Navbar';
import { Outlet } from 'react-router-dom';

function BaseLayout() {
  return (
    <>
      <Navbar>
        <Logo>Where in the world?</Logo>
        <ThemeToggle />
      </Navbar>
      <main className="container mx-auto calc-height px-4 lg:px-12 mt-6 sm:mt-12">
        <Outlet />
      </main>
    </>
  );
}
export default BaseLayout;

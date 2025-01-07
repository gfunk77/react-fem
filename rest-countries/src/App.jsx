import Dropdown from './components/Dropdown';
import Navbar, { Logo, ThemeToggle } from './components/Navbar';
import Search from './components/Search';

function App() {
  return (
    <>
      <Navbar>
        <Logo>Where in the world?</Logo>
        <ThemeToggle />
      </Navbar>
      {/* <div className="mx-auto mt-6 px-4 md:container:px-0 "> */}
      <div className="px-4 md:px-20 mt-6 transition-all">
        <Search />
        <br />
        <Dropdown />
      </div>
    </>
  );
}
export default App;

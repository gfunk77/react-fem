import { Header, Search, Card } from './components/index';
import usePreferredTheme from './hooks/usePreferredTheme';

function App() {
  const [theme, toggleTheme] = usePreferredTheme();

  return (
    <main className={`main ${theme}`}>
      <div className="container">
        <Header theme={theme} changeTheme={toggleTheme} />
        <Search theme={theme} />
        <Card theme={theme} />
      </div>
    </main>
  );
}
export default App;

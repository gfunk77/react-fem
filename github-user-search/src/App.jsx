import { Header } from './components/index';
import usePreferredTheme from './hooks/usePreferredTheme';

function App() {
  const [theme, toggleTheme] = usePreferredTheme();

  return (
    <main className={`main ${theme}`}>
      <div className="container">
        <Header theme={theme} changeTheme={toggleTheme} />
      </div>
    </main>
  );
}
export default App;

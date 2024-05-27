import { Header, Search, Card } from './components/index';
import { useState, useEffect } from 'react';
import { searchUser } from './api';
import usePreferredTheme from './hooks/usePreferredTheme';

function App() {
  const [user, setUser] = useState([]);
  const [theme, toggleTheme] = usePreferredTheme();
  const [noResults, setNoResults] = useState(false);

  const getUser = async (username) => {
    try {
      const response = await searchUser(username);
      setUser(response);
      setNoResults(false);
    } catch (error) {
      setNoResults(true);
    }
  };

  useEffect(() => {
    getUser('octocat');
  }, []);

  return (
    <main className={`main ${theme}`}>
      <div className="container">
        <Header theme={theme} changeTheme={toggleTheme} />
        <Search noResults={noResults} search={getUser} theme={theme} />
        <Card user={user} theme={theme} />
      </div>
    </main>
  );
}
export default App;

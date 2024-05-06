import { Header, Search, Card } from './components/index';
import { useState, useEffect } from 'react';
import { searchUser } from './api';
import usePreferredTheme from './hooks/usePreferredTheme';

function App() {
  const [user, setUser] = useState([]);
  const [theme, toggleTheme] = usePreferredTheme();

  const getUser = async (username) => {
    const response = await searchUser(username);
    setUser(response);
  };

  useEffect(() => {
    getUser('octocat');
  }, []);

  return (
    <main className={`main ${theme}`}>
      <div className="container">
        <Header theme={theme} changeTheme={toggleTheme} />
        <Search theme={theme} />
        <Card user={user} theme={theme} />
      </div>
    </main>
  );
}
export default App;

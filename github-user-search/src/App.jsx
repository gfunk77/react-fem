import { Header } from './components/index';
import { useState } from 'react';
function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <main className={`main ${theme}`}>
      <div className="container">
        <Header theme={theme} changeTheme={toggleTheme} />
      </div>
    </main>
  );
}
export default App;

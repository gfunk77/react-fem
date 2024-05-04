import Card from './Card';
import { fetchAdvice } from './api';
import { useState, useEffect } from 'react';

function App() {
  const [advice, setAdvice] = useState({});
  const [isDesktop, setIsDesktop] = useState(false);

  const getAdvice = async () => {
    const data = await fetchAdvice();
    setAdvice(data);
  };

  const checkScreenSize = () => {
    setIsDesktop(window.innerWidth > 598);
  };

  useEffect(() => {
    getAdvice();
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <main>
      <Card isDesktop={isDesktop} advice={advice} />
    </main>
  );
}
export default App;

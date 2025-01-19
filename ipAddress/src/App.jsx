import Card from './components/Card';
import Input from './components/Input';
import Image from './components/Image';
import { useState, useEffect } from 'react';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className="background">
        <Image isMobile={isMobile} />
        <h1>IP Address Tracker</h1>
        <Input />
        <Card />
      </div>
      <div id="map"></div>
    </>
  );
}
export default App;

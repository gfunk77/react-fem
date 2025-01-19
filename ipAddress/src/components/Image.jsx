import desktopPattern from '../assets/images/pattern-bg-desktop.png';
import mobilePattern from '../assets/images/pattern-bg-mobile.png';

function Image({ isMobile }) {
  return <img src={isMobile ? mobilePattern : desktopPattern} alt="background pattern" />;
}

export default Image;

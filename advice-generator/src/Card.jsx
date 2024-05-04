/* eslint-disable react/prop-types */
import MobilePattern from './MobilePattern';
import DesktopPattern from './DesktopPattern';
function Card({ advice, isDesktop }) {
  const { advice: text, id } = advice;

  return (
    <div className="card">
      <span className="number">Advice #{id}</span>
      <div className="text">&ldquo;{text}&ldquo;</div>
      {isDesktop ? <DesktopPattern /> : <MobilePattern />}
    </div>
  );
}
export default Card;

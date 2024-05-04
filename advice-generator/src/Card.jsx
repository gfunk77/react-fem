/* eslint-disable react/prop-types */
import MobilePattern from './MobilePattern';
import DesktopPattern from './DesktopPattern';
import Button from './Button';
function Card({ advice, isDesktop, moreAdvice }) {
  const { advice: text, id } = advice;

  return (
    <div className="card">
      <span className="number">Advice #{id}</span>
      <div className="text">&ldquo;{text}&ldquo;</div>
      {isDesktop ? <DesktopPattern /> : <MobilePattern />}
      <Button moreAdvice={moreAdvice} />
    </div>
  );
}
export default Card;

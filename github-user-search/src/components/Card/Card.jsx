import './card.css';
import { Footer, CardBody, CardHeader } from '../index';

function Card({ theme, user }) {
  const convertDate = (date) => {
    const d = new Date(date);
    return `Joined ${d.toUTCString().split(' ').slice(1, 4).join(' ')}`;
  };

  return (
    <article className={`card ${theme}`}>
      <div className="img-container">
        <img className="img" src={user.avatar_url} />
      </div>
      <CardHeader user={user} theme={theme} convertDate={convertDate} />
      <div className="card-body">
        <CardBody user={user} theme={theme} />
        <Footer user={user} />
      </div>
    </article>
  );
}
export default Card;

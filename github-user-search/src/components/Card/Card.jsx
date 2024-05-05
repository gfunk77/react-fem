import './card.css';

function Card({ theme }) {
  return (
    <article className={`card ${theme}`}>
      <div className="img-container">
        <img className="img" src="https://picsum.photos/70" alt="" />
      </div>
      <header className="card-header">
        <div className="info">
          <h2 className="username">The Octocat</h2>
          <p className="handle">@octocat</p>
        </div>
        <p className="joined">Joined 25 Jan 2011</p>
      </header>
      <div className="card-body">
        <p className="card-desc">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat
          mattis eros.
        </p>
      </div>
    </article>
  );
}
export default Card;

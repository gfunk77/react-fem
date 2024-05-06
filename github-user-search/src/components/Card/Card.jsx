import './card.css';

function Card({ theme, user }) {
  console.log(user);

  const convertDate = (date) => {
    const d = new Date(date);
    return `Joined ${d.toUTCString().split(' ').slice(1, 4).join(' ')}`;
  };

  return (
    <article className={`card ${theme}`}>
      <div className="img-container">
        <img className="img" src={user.avatar_url} />
      </div>
      <header className="card-header">
        <div className="info">
          <h2 className="username">{user.name}</h2>
          <p className="handle">{`@${user.login}`}</p>
        </div>
        <p className="joined">{convertDate(user.created_at)}</p>
      </header>
      <div className="card-body">
        <p className="card-desc">
          {user.bio || 'This is a mysterious individual without a biography. Use your imagination!'}
        </p>
        <div className="stats">
          <p>Repos</p>
          <p>Followers</p>
          <p>Following</p>
          <p>{user.public_repos}</p>
          <p>{user.followers}</p>
          <p>{user.following}</p>
        </div>
      </div>
    </article>
  );
}
export default Card;

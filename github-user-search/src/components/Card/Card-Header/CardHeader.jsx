function CardHeader({ user, theme, convertDate }) {
  return (
    <header className="card-header">
      <div className="info">
        <h2 className={`username ${theme}`}>{user.name}</h2>
        <p className="handle">{`@${user.login}`}</p>
      </div>
      <p className="joined">{convertDate(user.created_at)}</p>
    </header>
  );
}
export default CardHeader;

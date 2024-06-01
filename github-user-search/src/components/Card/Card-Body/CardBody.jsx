function CardBody({ user, theme }) {
  return (
    <>
      <p className="card-desc">
        {user.bio || 'This is a mysterious individual without a biography. Use your imagination!'}
      </p>
      <div className={`stats ${theme}`}>
        <p>Repos</p>
        <p>Followers</p>
        <p>Following</p>
        <p>{user.public_repos}</p>
        <p>{user.followers}</p>
        <p>{user.following}</p>
      </div>
    </>
  );
}
export default CardBody;

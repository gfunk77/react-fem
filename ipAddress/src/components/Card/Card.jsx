import './card.scss';

function Card() {
  return (
    <div className="card">
      <div className="card-item">
        <p className="category">Category</p>
        <h2 className="value">Value</h2>
      </div>
      <div className="card-item">
        <p className="category">Category</p>
        <h2 className="value">Value</h2>
      </div>
      <div className="card-item">
        <p className="category">Category</p>
        <h2 className="value">Value</h2>
      </div>
      <div className="card-item">
        <p className="category">Category</p>
        <h2 className="value">Value</h2>
      </div>
    </div>
  );
}

export default Card;

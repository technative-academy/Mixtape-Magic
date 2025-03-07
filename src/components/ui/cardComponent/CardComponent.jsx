import "./cardComponent.module.css";

function CardComponent() {
  return (
    <div className="collection-card">
      <h2 className="title">Title of Collection</h2>
      <p className="tag">TAG</p>
      <div className="timestamps">
        <p className="created">CREATED <span>Today, at 2:09 PM</span></p>
        <p className="updated">LAST UPDATED <span>Today, at 2:09 PM</span></p>
      </div>
      <div className="icon-section">
        <span className="count">0</span>
      </div>
    </div>
  );
};

export default CardComponent;

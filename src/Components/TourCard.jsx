import { useState } from 'react';

const TourCard = ({ id, name, info, price, image, onRemove }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="tour-card">
      <img src={image} alt={name} />
      <div className="tour-info">
        <h3>{name}</h3>
        <p>{readMore ? info : `${info.substring(0, 150)}...`}</p>
        <button onClick={() => setReadMore(!readMore)}>
          {readMore ? 'Show Less' : 'Read More'}
        </button>
        <div className="tour-footer">
          <p className="tour-price">${price}</p>
          <button className="remove-btn" onClick={() => onRemove(id)}>
            Not Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourCard;

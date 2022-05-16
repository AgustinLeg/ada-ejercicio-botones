import EmptyStar from "../../assets/half-star.png";
import FullStar from "../../assets/full-star.png";
import "./Card.css";

const Card = ({ button }) => {
  const totalStars = [1, 2, 3, 4, 5];

  return (
    <div className="card__container">
      <h2 className="card__title">{button.title}</h2>
      <p className="card_description">{button.description}</p>
      <div className="card__stars">
        {totalStars.map((star) => (
          <img
            key={star}
            src={star <= button.stars ? FullStar : EmptyStar}
            alt="star"
            width="25px"
          />
        ))}
      </div>
      <button style={button.style}>Boton</button>
    </div>
  );
};

export { Card };

import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating / 2);
  const halfStar = rating % 2 >= 1;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={i} className="star-icon" />);
  }

  if (halfStar) {
    stars.push(<FaStarHalfAlt key="half" className="star-icon" />);
  }

  while (stars.length < 5) {
    stars.push(<FaRegStar key={stars.length} className="star-icon" />);
  }

  return (
    <div className="rating">
      {stars}
    </div>
  );
};

export default StarRating;
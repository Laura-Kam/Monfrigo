import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const AverageUserRating = ({apiAverageRating}) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const normalizeUserRating = () => {
    return Math.floor(apiAverageRating * 5)
  }

  useEffect(() => {
    setRating(normalizeUserRating())
  }, [])

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
            />
            <FaStar
              className="star"
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              size={25}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default AverageUserRating;

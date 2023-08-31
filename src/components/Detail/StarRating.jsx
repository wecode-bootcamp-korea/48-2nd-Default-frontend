import React from 'react';
import './StarRating.scss';
import { AiFillStar } from 'react-icons/ai';

const ArrayIndexes = [1, 2, 3, 4, 5];

const StarRating = ({ ratingIndex, setRatingIndex }) => {
  return (
    <div className="ratingContainer">
      {ArrayIndexes.map((arrayindex, index) => (
        <AiFillStar
          size={25}
          key={`rating_${index}`}
          className={arrayindex <= ratingIndex ? 'active' : 'inactive'}
          onClick={() => setRatingIndex(arrayindex)}
        />
      ))}
    </div>
  );
};

export default StarRating;

import * as React from 'react';
import StarRating from 'react-native-star-rating';
import { color, d } from '~/utils/constant';
import styled from 'styled-components/native';

const StarRatingView = styled.View``;

const GeneralStarExample = () => {
  const [starCount, onStarRatingPress] = useState(4);

  return (
    <StarRatingView>
      <StarRating
        disabled={false}
        emptyStar={'ios-star-outline'}
        fullStar={'ios-star'}
        halfStar={'ios-star-half'}
        iconSet={'Ionicons'}
        maxStars={5}
        starSize={25}
        rating={starCount}
        selectedStar={(rating) => onStarRatingPress(rating)}
        fullStarColor={color.mainDark}
      />
    </StarRatingView>
  );
};

export default GeneralStarExample;

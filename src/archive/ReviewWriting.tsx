import * as React from 'react';
import { Text } from 'react-native';
import ReviewProduct from '~/archive/reviewWritingContainer/ReviewProduct';
import Score from '~/archive/reviewWritingContainer/Score';
import ReviewRegister from '~/archive/reviewWritingContainer/ReviewRegister';

const ReviewWriting = () => {
  return (
    <>
      <ReviewProduct />
      <Score />
      <ReviewRegister />
    </>
  );
};

export default ReviewWriting;

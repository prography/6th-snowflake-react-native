// import * as React from '~/screens/product/node_modules/react';
import * as React from "react";

import { Text } from 'react-native';
import ReviewProduct from '~/containers/product/reviewWriting/ReviewProduct';
import Score from '~/containers/product/reviewWriting/Score';
import ReviewRegister from '~/containers/product/reviewWriting/ReviewRegister';
import Margin from '~/components/universal/Margin';

const ReviewWriting = () => {
  return (
    <>
      <ReviewProduct />
      <Score />
      <Margin />
      <ReviewRegister />
    </>
  );
};

export default ReviewWriting;

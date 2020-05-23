import * as React from 'react';
import ReviewProduct from '~/components/product/review/ReviewProduct';

const ProductInfo = () => {
  const rankInfo = { style: '초박형', rank: 3 }; //mutable
  const productInfo = {
    brand: '듀렉스',
    name: '필 울트라씬',
    length: '185±20',
    width: '49±2',
    thickness: '0.05',
  }; //immutable
  const score = {
    totalScore: 4.71,
    thinScore: '★★★★★',
    durableScore: '★★★☆☆',
    slushScore: '★★★★☆',
  }; //mutable

  return (
    <>
      <ReviewProduct
        rankInfo={rankInfo}
        productInfo={productInfo}
        score={score}
      />
    </>
  );
};

export default ProductInfo;

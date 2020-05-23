import * as React from 'react';
import styled from 'styled-components';
import { Text } from 'react-native';
import { device, color } from '~/utils/constant';
import Product from '~/components/product/reviewWriting/Product';

const ReviewProduct = () => {
  const productInfo = {
    uri: 'https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg',
    brand: '듀렉스',
    name: '필 울트라씬',
  };

  return <Product productInfo={productInfo} />;
};

export default ReviewProduct;

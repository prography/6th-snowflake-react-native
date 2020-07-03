import * as React from 'react';
import { useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { d, l, BASE_URL } from '~/utils/constant';
import TextProductMiddleBar from '~/components/universal/text/product/info/TextProductMiddleBar';
import ReviewCardContainer from '../review/ReviewCardContainer';
import MarginWide from '~/components/universal/margin/MarginWide';

interface Props {
  productId: number;
  reviewArray: any;
  setReviewArray: any;
}

const ProductInfoReviewFilter = ({
  reviewArray,
  setReviewArray,
  productId,
}: Props) => {
  const _getReviewArray = async () => {
    try {
      const response = await fetch(`${BASE_URL}/reviews/?product=${productId}`);
      const json = await response.json();
      console.log('🌮 id', productId, '의 review array success!', json.results);
      setReviewArray(json.results);
    } catch (error) {
      console.log('🌮', productId, '의 review array', error);
    }
  };

  useEffect(() => {
    _getReviewArray();
  }, []);

  return (
    <View>
      <Text>filter 자리</Text>
    </View>
  );
};

export default ProductInfoReviewFilter;

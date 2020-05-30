import * as React from 'react';
import styled from 'styled-components/native';
import { Text, ScrollView } from 'react-native';
import { d, l } from '~/utils/constant';

import ProductInfoBar from '~/components/universal/bottomBar/product/ProductInfoBar';
import Blinder from '~/components/product/Blinder';
import RankBar from '~/components/product/ranking/RankBar';
import TopBarBackArrow from '~/components/universal/topBar/TopBarBackArrow';
import LineGrayMiddle from '~/components/universal/line/LineGrayMiddle';
import ProductBarForReviewUpload from '~/components/product/review/ProductBarForReviewUpload';
import MarginMedium from '~/components/universal/margin/MarginMedium';
import ReviewUploadTrioScore from '~/containers/product/review/ReviewUploadTrioScore';
import MarginBottom from '~/components/universal/margin/MarginBottom';
import ProductReviewBar2 from '~/components/universal/bottomBar/product/ProductReviewBar2';

const Container = styled.View`
  flex-direction: column;
  align-items: center;
`;

const ReviewUpload2 = () => {
  const ProductInfo = {
    key: 0,
    rankNum: 1,
    productCompany: '듀렉스',
    productName: '필 울트라씬',
    imageUri: 'http://pngimg.com/uploads/condom/condom_PNG21.png',
    score: 4.97,
  };
  return (
    <>
      <ProductReviewBar2>
        <TopBarBackArrow />

        <ProductBarForReviewUpload
          rankNum={ProductInfo.rankNum}
          productCompany={ProductInfo.productCompany}
          productName={ProductInfo.productName}
          imageUri={ProductInfo.imageUri}
          score={ProductInfo.score}
        />

        <LineGrayMiddle />
        <MarginMedium />
        <ScrollView>
          <ReviewUploadTrioScore />
          <MarginBottom />
        </ScrollView>
      </ProductReviewBar2>
      <Blinder />
    </>
  );
};

export default ReviewUpload2;

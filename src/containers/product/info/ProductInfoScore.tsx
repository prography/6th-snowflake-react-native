import * as React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import { d, l } from '~/utils/constant';
import TextProductSpecificTitle from '~/components/universal/text/product/info/TextProductSpecificTitle';
import TextProductSpecificContent from '~/components/universal/text/product/info/TextProductSpecificContent';
import MarginNarrow from '~/components/universal/margin/MarginNarrow';
import TextMiddleTitleDark from '~/components/universal/text/TextMiddleTitleDark';
import TextProductScoreBig from '~/components/universal/text/product/info/TextProductScoreBig';
import TextProductMiddleBar from '~/components/universal/text/product/info/TextProductMiddleBar';
import MarginWide from '~/components/universal/margin/MarginWide';
import ProductInfoTrioScore from './ProductInfoTrioScore';

const Container = styled.View`
  width: ${d.width - l.mR * 2}px;
  margin-left: ${l.mR}px;
  flex-direction: column;
`;

const ProductInfoScore = () => {
  const ProductInfo = {
    key: 0,
    title: '얇기',
    manufacturerKor: '듀렉스',
    manufacturerEng: 'Durex',
    nameKor: '필 울트라씬',
    nameEng: 'Feel Ultra Thin',
    imageUri: 'http://pngimg.com/uploads/condom/condom_PNG21.png',
    category: '초박형',
    length: '185±20mm',
    width: '49±2mm',
    thickness: '0.05cm',
    score: 4.2,
    avgOily: 3.9,
    avgThickness: 2.5,
    avgDurability: 3.7,
  };

  return (
    <>
      <Container>
        <TextProductMiddleBar title={'총점'} score={ProductInfo.score} />
        <MarginWide />

        <ProductInfoTrioScore
          avgOily={ProductInfo.avgOily}
          avgThickness={ProductInfo.avgThickness}
          avgDurability={ProductInfo.avgDurability}
        />
      </Container>
    </>
  );
};

export default ProductInfoScore;

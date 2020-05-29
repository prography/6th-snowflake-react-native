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
import MarginMedium from '~/components/universal/margin/MarginMedium';

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
    score: 3.2,
    avgThickness: 3.2,
    avgDurability: 1.5,
    avgOily: 2.8,
  };

  return (
    <>
      <Container>
        <TextProductMiddleBar title={'총점'} score={ProductInfo.score} />
        <MarginMedium />
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

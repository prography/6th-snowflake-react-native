import * as React from 'react';
import styled from 'styled-components/native';
import { d } from '~/utils/constant';
import { ScrollView } from 'react-native';
import TextTitleDarkLeft from '~/components/universal/text/TextTitleDarkLeft';
import TextContentLightLeft from '~/components/universal/text/TextContentLightLeft';
import MarginMedium from '~/components/universal/margin/MarginMedium';
import TrioBox from '~/components/product/main/TrioBox';
import ProductImageBox from '~/components/product/info/ProductImageBox';

const Container = styled.View`
  width: ${d.width - d.px * 50}px;
  margin-left: ${d.px * 30}px;
`;

const TrioContainer = styled.View`
  padding-left: ${d.px * 30}px;
  padding-right: ${d.px * 10}px;
  flex-direction: row;
`;

const ProductInfoImage = () => {
  const ProductInfo = {
    key: 0,
    title: '얇기',
    manufacturerKor: '듀렉스',
    manufacturerEng: 'Durex',
    nameKor: '필 울트라씬',
    nameEng: 'Feel Ultra Thin',
    imageUri: 'http://pngimg.com/uploads/condom/condom_PNG21.png',
  };

  return (
    <>
      <Container>
        <ProductImageBox imageUri={ProductInfo.imageUri} />
      </Container>
    </>
  );
};

export default ProductInfoImage;

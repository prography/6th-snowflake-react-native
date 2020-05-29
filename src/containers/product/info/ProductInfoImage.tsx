import * as React from 'react';
import styled from 'styled-components/native';
import { d } from '~/utils/constant';
import ProductImageBox from '~/components/product/info/ProductImageBox';

const Container = styled.View`
  width: ${d.width - d.px * 50}px;
  margin-left: ${d.px * 30}px;
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

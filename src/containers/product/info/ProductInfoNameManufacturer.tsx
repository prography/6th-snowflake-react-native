import * as React from 'react';
import styled from 'styled-components/native';
import { d } from '~/utils/constant';
import TextProductManufacturerBigEng from '~/components/universal/text/product/TextProductManufacturerBigEng';
import TextProductNameBigEng from '~/components/universal/text/product/TextProductNameBigEng';

const Container = styled.View`
  width: ${d.width - d.px * 50}px;
  margin-left: ${d.px * 30}px;
`;

const ProductInfoNameManufacturer = () => {
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
        <TextProductManufacturerBigEng
          manufacturerKor={ProductInfo.manufacturerKor}
          manufacturerEng={ProductInfo.manufacturerEng}
        />
        <TextProductNameBigEng
          nameKor={ProductInfo.nameKor}
          nameEng={ProductInfo.nameEng}
        />
      </Container>
    </>
  );
};

export default ProductInfoNameManufacturer;

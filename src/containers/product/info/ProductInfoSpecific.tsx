import * as React from 'react';
import styled from 'styled-components/native';
import { d, l } from '~/utils/constant';
import TextProductSpecificTitle from '~/components/universal/text/product/TextProductSpecificTitle';
import TextProductSpecificContent from '~/components/universal/text/product/TextProductSpecificContent';
import MarginNarrow from '~/components/universal/margin/MarginNarrow';

const Container = styled.View`
  width: ${d.width - d.px * 50}px;
  margin-left: ${d.px * 30}px;
  flex-direction: row;
`;
const LeftWrapper = styled.View`
  width: ${l.lW}px;
`;
const RightWapper = styled.View`
  width: 100%;
`;

const ProductInfoSpecific = () => {
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
  };

  return (
    <>
      <Container>
        <LeftWrapper>
          <TextProductSpecificTitle title={'제품유형'} />
          <MarginNarrow />
          <TextProductSpecificTitle title={'제품정보'} />
        </LeftWrapper>
        <RightWapper>
          <TextProductSpecificContent category={ProductInfo.category} />
          <MarginNarrow />
          <TextProductSpecificContent
            length={ProductInfo.length}
            width={ProductInfo.width}
            thickness={ProductInfo.thickness}
          />
        </RightWapper>
      </Container>
    </>
  );
};

export default ProductInfoSpecific;

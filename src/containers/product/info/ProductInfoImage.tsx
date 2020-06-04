import * as React from 'react';
import styled from 'styled-components/native';
import { d, l } from '~/utils/constant';
import ProductImageBox from '~/components/product/info/ProductImageBox';

const Container = styled.View`
  width: ${d.width - l.mR * 2}px;
  margin-left: ${l.mR}px;
`;
const ProductInfoImage = ({ imageUri }) => {
  return (
    <>
      <Container>
        <ProductImageBox imageUri={imageUri} />
      </Container>
    </>
  );
};

export default ProductInfoImage;

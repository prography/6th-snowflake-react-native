import * as React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import { d, l } from '~/utils/constant';
import ProductInfoTrioScoreBar from '~/components/product/info/ProductInfoTrioScoreBar';

const Container = styled.View`
  flex-direction: row;
`;
const LeftWrapper = styled.View`
  width: ${l.lW}px;
`;
const RightWapper = styled.View`
  width: ${d.width - l.mR * 2 - l.lW}px;
  margin-right: 200px;
`;

interface Props {
  avgOily: number;
  avgThickness: number;
  avgDurability: number;
}

const ProductInfoTrioScore = ({
  avgOily,
  avgThickness,
  avgDurability,
}: Props) => {
  return (
    <>
      <Container>
        <LeftWrapper />
        <RightWapper>
          <ProductInfoTrioScoreBar
            avgOily={avgOily}
            avgThickness={avgThickness}
            avgDurability={avgDurability}
          />
        </RightWapper>
      </Container>
    </>
  );
};

export default ProductInfoTrioScore;

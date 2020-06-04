import * as React from 'react';
import styled from 'styled-components/native';
import { d, l } from '~/utils/constant';
import TextProductMiddleBar from '~/components/universal/text/product/info/TextProductMiddleBar';
import ProductInfoTrioScore from './ProductInfoTrioScore';
import MarginMedium from '~/components/universal/margin/MarginMedium';

const Container = styled.View`
  width: ${d.width - l.mR * 2}px;
  margin-left: ${l.mR}px;
  flex-direction: column;
`;

interface Props {
  score: number;
  avgOily: number;
  avgThickness: number;
  avgDurability: number;
}

const ProductInfoScore = ({
  score,
  avgOily,
  avgThickness,
  avgDurability,
}: Props) => {
  return (
    <>
      <Container>
        <TextProductMiddleBar title={'총점'} score={score} type={'score'} />
        <MarginMedium />
        {avgOily ? (
          <ProductInfoTrioScore
            avgOily={avgOily}
            avgThickness={avgThickness}
            avgDurability={avgDurability}
          />
        ) : null}
      </Container>
    </>
  );
};

export default ProductInfoScore;

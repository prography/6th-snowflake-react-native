import * as React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { d, c, l } from '~/utils/constant';
import { Text } from 'react-native';

const BAR_HEIGHT = d.px * 4;

const Container = styled.View``;
const BarContainer = styled.View`
  height: ${BAR_HEIGHT}px;
  justify-content: center;
`;
const GrayBar = styled.View`
  width: 100%;
  height: ${BAR_HEIGHT}px;
  background-color: ${c.extraLightGray};
`;
const MintBar = styled.View`
  width: ${(props) => props.score * 20 || 0}%;
  position: absolute;
  height: ${BAR_HEIGHT}px;
  background-color: ${c.mint};
`;
const PurpleIndicatorContainer = styled.View`
  position: absolute;
  height: ${BAR_HEIGHT}px;
  width: 100%;
  padding: 0 ${d.px * 2}px;
`;

const PurpleIndicator = styled.View`
  width: ${d.px * 4}px;
  position: absolute;
  height: ${BAR_HEIGHT}px;
  background-color: ${c.purple};
  left: ${(props) => props.score * 20 || 0}%;
`;
interface Props {
  avgThickness?: number;
  avgDurability?: number;
  avgOily?: number;
}
const ProductInfoTrioScoreBar = ({
  avgThickness,
  avgDurability,
  avgOily,
}: Props) => {
  return (
    <Container>
      <BarContainer>
        <GrayBar />

        <MintBar score={avgOily} />
        <PurpleIndicatorContainer>
          <PurpleIndicator score={avgOily} />
        </PurpleIndicatorContainer>
      </BarContainer>
    </Container>
  );
};

export default ProductInfoTrioScoreBar;

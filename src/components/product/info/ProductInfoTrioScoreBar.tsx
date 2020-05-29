import * as React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { d, c, l } from '~/utils/constant';
import { Text } from 'react-native';
import MarginMedium from '~/components/universal/margin/MarginMedium';
import MarginNarrow from '~/components/universal/margin/MarginNarrow';
import MarginWide from '~/components/universal/margin/MarginWide';

const BAR_HEIGHT = d.px * 4;

const Container = styled.View``;

const TrioNameContainer = styled.View`
  /* padding: 0 ${d.px * 12.5}px; */
  /* 이 값 주면 점수가 0, 5일 때 좌우 딱 맞아들지만 가운데 왔을 때는 중심이 안 맞음 */
  left: ${-d.px * 25}px;
`;
const TrioName = styled.Text`
  font-family: Jost-Semi;
  font-size: ${d.px * 12}px;
  color: ${c.darkGray};
  width: ${d.px * 50}px;
  text-align: center;
  left: ${(props) => props.score * 20 || 0}%;
`;

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

const DescriptionContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const Description = styled.Text`
  font-family: Jost-Medium;
  font-size: ${d.px * 13}px;
  color: ${c.lightGray};
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
  const trioScore = [
    {
      trioName: '얇기',
      score: avgThickness,
      name: '얇기',
      leftDescription: '얇아요',
      rightDescription: '두꺼워요',
    },
    {
      trioName: '내구성',
      score: avgDurability,
      name: '내구성',
      leftDescription: '약해요',
      rightDescription: '튼튼해요',
    },
    {
      trioName: '윤활제',
      score: avgOily,
      name: '윤활제',
      leftDescription: '건조해요',
      rightDescription: '촉촉해요',
    },
  ];
  return trioScore.map((score) => {
    return (
      <Container>
        <TrioNameContainer>
          <TrioName score={score.score}>{score.trioName}</TrioName>
        </TrioNameContainer>
        <MarginNarrow />
        <BarContainer>
          <GrayBar />
          <MintBar score={score.score} />
          <PurpleIndicatorContainer>
            <PurpleIndicator score={score.score} />
          </PurpleIndicatorContainer>
        </BarContainer>
        <MarginNarrow />
        <DescriptionContainer>
          <Description>{score.leftDescription}</Description>
          <Description>{score.rightDescription}</Description>
        </DescriptionContainer>
        <MarginMedium />
      </Container>
    );
  });
};

export default ProductInfoTrioScoreBar;

import * as React from 'react';
import styled from 'styled-components/native';
import { d, c, l } from '~/utils/constant';
import { Text } from 'react-native';
import MarginMedium from '~/components/universal/margin/MarginMedium';
import MarginNarrow from '~/components/universal/margin/MarginNarrow';
import MarginWide from '~/components/universal/margin/MarginWide';
import TextMiddleTitleDark from '~/components/universal/text/TextMiddleTitleDark';
import Score from '~/archive/reviewWritingContainer/Score';

const BAR_HEIGHT = d.px * 4;
const TOUCH_AREA = d.px * 30;
const Container = styled.View`
  flex-direction: column;
  margin: 0 ${l.mL}px;
  width: ${d.width - l.mR * 2}px;
`;

const TrioNameContainer = styled.View`
  /* padding: 0 ${d.px * 12.5}px; */
  /* 이 값 주면 점수가 0, 5일 때 좌우 딱 맞아들지만 가운데 왔을 때는 중심이 안 맞음 */
  left: ${-d.px * 25}px;
`;
const BarWrapper = styled.View`
  margin: 0 ${TOUCH_AREA / 2}px;
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
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
const PurpleIndicatorTouchArea = styled.TouchableOpacity`
  width: ${TOUCH_AREA}px;
  height: ${TOUCH_AREA}px;
  justify-content: center;
  align-items: center;
`;
const PurpleIndicator = styled.View`
  width: ${d.px * 8}px;
  height: ${d.px * 8}px;
  background-color: ${c.purple};
`;

const DescriptionContainer = styled.View`
  margin: 0 ${TOUCH_AREA / 2}px;

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
const ReviewUploadTrioScoreBar = ({
  avgThickness,
  avgDurability,
  avgOily,
}: Props) => {
  const trioScore = [
    {
      question: '얇기는 어떠셨나요?',
      trioName: '얇기',
      score: avgThickness,
      name: '얇기',
      leftDescription: '두꺼워요',
      rightDescription: '얇아요',
    },
    {
      question: '내구성은 어떠셨나요?',
      trioName: '내구성',
      score: avgDurability,
      name: '내구성',
      leftDescription: '약해요',
      rightDescription: '튼튼해요',
    },
    {
      question: '윤활제는 충분했나요?',
      trioName: '윤활제',
      score: avgOily,
      name: '윤활제',
      leftDescription: '건조해요',
      rightDescription: '촉촉해요',
    },
  ];

  const oneToFive = [
    { score: 1 },
    { score: 2 },
    { score: 3 },
    { score: 4 },
    { score: 5 },
  ];

  return trioScore.map((score) => {
    return (
      <>
        <TextMiddleTitleDark title={score.question} />
        <MarginMedium />
        <Container>
          <MarginNarrow />
          <BarContainer>
            <BarWrapper>
              <GrayBar />
              <MintBar score={score.score} />
            </BarWrapper>
            <PurpleIndicatorContainer>
              {oneToFive.map((bar) => {
                return (
                  <PurpleIndicatorTouchArea
                    onPress={() => {
                      alert(bar.score);
                    }}
                  >
                    <PurpleIndicator />
                  </PurpleIndicatorTouchArea>
                );
              })}
            </PurpleIndicatorContainer>
          </BarContainer>
          <MarginNarrow />
          <DescriptionContainer>
            <Description>{score.leftDescription}</Description>
            <Description>{score.rightDescription}</Description>
          </DescriptionContainer>
          <MarginMedium />
        </Container>
        <MarginMedium />
      </>
    );
  });
};

export default ReviewUploadTrioScoreBar;

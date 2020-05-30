import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components/native';
import { useSelector, useDispatch } from 'react-redux';
import { d, c, l } from '~/utils/constant';
import { Text } from 'react-native';
import MarginMedium from '~/components/universal/margin/MarginMedium';
import MarginNarrow from '~/components/universal/margin/MarginNarrow';
import MarginWide from '~/components/universal/margin/MarginWide';
import TextMiddleTitleDark from '~/components/universal/text/TextMiddleTitleDark';
import Score from '~/archive/reviewWritingContainer/Score';

const BAR_HEIGHT = d.px * 4;
const TOUCH_AREA = d.px * 50;
const SMALL_INDICATOR = d.px * 4;
const BIG_INDICATOR = d.px * 8;
const LIGHT_OPACITY = 0.5;
const Container = styled.View`
  flex-direction: column;
  margin: 0 ${l.mL}px;
  width: ${d.width - l.mR * 2}px;
`;
const SelectedTextContainer = styled.View`
  height: ${d.px * 20}px;
  justify-content: center;
`;

const SelectedText = styled.Text`
  font-family: Jost-Semi;
  font-size: ${d.px * 14}px;
  color: ${c.darkGray};
  line-height: ${d.px * 20}px;
  text-align: center;
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
  width: ${(props) => (props.score - 1) * 25 || 0}%;
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
  width: ${(props) =>
    props.givenNum === null
      ? BIG_INDICATOR
      : props.givenNum === props.selfNum
      ? BIG_INDICATOR
      : SMALL_INDICATOR}px;
  height: ${(props) =>
    props.givenNum === null
      ? BIG_INDICATOR
      : props.givenNum === props.selfNum
      ? BIG_INDICATOR
      : SMALL_INDICATOR}px;
  background-color: ${c.purple};
  opacity: ${(props) =>
    props.givenNum === null
      ? 1
      : props.givenNum === props.selfNum
      ? 1
      : LIGHT_OPACITY}px;
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

interface State {
  thicknessScore: string;
  reviewUploadReducer: any;
}

const ReviewUploadTrioScoreBar = ({
  avgThickness,
  avgDurability,
  avgOily,
}: Props) => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(null);
  const _thicknessScore = useSelector(
    (state: State) => state.reviewUploadReducer.thicknessScore
  );

  const setThicknessScore = (tScore) => {
    dispatch({ type: 'SET_THICKNESS_SCORE', thicknessScore: tScore });
  };
  console.log('두께 점수', _thicknessScore);
  const trioScore = [
    {
      question: '얇기는 어떠셨나요?',
      trioName: '얇기',
      score: avgThickness,
      name: '얇기',
      leftDescription: '두꺼워요',
      rightDescription: '얇아요',
      selectedText: {
        0: '',
        1: '너무 두꺼워요',
        2: '두꺼워요',
        3: '보통이에요',
        4: '얇아요',
        5: '완전 얇아요',
      },
    },
    {
      question: '내구성은 어떠셨나요?',
      trioName: '내구성',
      score: avgDurability,
      name: '내구성',
      leftDescription: '약해요',
      rightDescription: '튼튼해요',
      selectedText: {
        0: '',
        1: '너무 약해요',
        2: '약해요',
        3: '무난해요',
        4: '튼튼해요',
        5: '아주 튼튼해요',
      },
    },
    {
      question: '윤활제는 충분했나요?',
      trioName: '윤활제',
      score: avgOily,
      name: '윤활제',
      leftDescription: '건조해요',
      rightDescription: '촉촉해요',
      selectedText: {
        0: '',
        1: '너무 건조해요',
        2: '건조해요',
        3: '적당해요',
        4: '촉촉해요',
        5: '정말 촉촉해요',
      },
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
        <SelectedTextContainer>
          {_thicknessScore && (
            <SelectedText>{score.selectedText[_thicknessScore]}</SelectedText>
          )}
        </SelectedTextContainer>
        <MarginMedium />
        <Container>
          <MarginNarrow />
          <BarContainer>
            <BarWrapper>
              <GrayBar />
              <MintBar score={_thicknessScore} />
            </BarWrapper>
            <PurpleIndicatorContainer>
              {oneToFive.map((bar) => {
                return (
                  <PurpleIndicatorTouchArea
                    onPress={() => {
                      setThicknessScore(bar.score);
                    }}
                    activeOpacity={1}
                  >
                    <PurpleIndicator
                      selfNum={bar.score}
                      givenNum={_thicknessScore}
                    />
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

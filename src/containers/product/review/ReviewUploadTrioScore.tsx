import * as React from 'react';
import { useEffect } from 'react';
import {
  State,
  setThicknessScore,
  setDurabilityScore,
  setOilyScore,
  setIsFilledReviewUpload1,
  setTrioAverage,
} from '~/modules/product/reviewUpload/reviewUploadReducer';
import styled from 'styled-components/native';
import { useSelector, useDispatch } from 'react-redux';
import { Text } from 'react-native';
import { d, c, l } from '~/utils/constant';
import MarginMedium from '~/components/universal/margin/MarginMedium';
import TextMiddleTitleDark from '~/components/universal/text/TextMiddleTitleDark';

const BAR_HEIGHT = d.px * 4;
const TOUCH_AREA = d.px * 50;
const SMALL_INDICATOR = d.px * 4;
const BIG_INDICATOR = d.px * 8;
const LIGHT_OPACITY = 0.5;

const thickness = 'thickness';
const durability = 'durability';
const oily = 'oily';

const TitleContainer = styled.View`
  align-items: center;
  width: 100%;
`;
const Container = styled.View`
  flex-direction: column;
  justify-content: center;
  margin: 0 ${l.mR}px;
  width: ${d.width - l.mR * 2}px;
`;
const SelectedTextContainer = styled.View`
  height: ${d.px * 20}px;
  justify-content: center;
`;

const SelectedText = styled.Text`
  font-family: Jost-Semi;
  font-size: ${d.px * 14}px;
  color: ${c.purple};
  line-height: ${d.px * 20}px;
  text-align: center;
`;
const BarWrapper = styled.View`
  margin: 0 ${TOUCH_AREA / 2}px;
`;

const BarContainer = styled.View`
  height: ${TOUCH_AREA}px;
  justify-content: center;
  top: ${-TOUCH_AREA / 3}px;
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
  z-index: 1;
`;
interface indicatorProps {
  givenNum: number;
  selfNum: number;
}
const PurpleIndicator = styled.View`
  width: ${(props: indicatorProps) =>
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
      : LIGHT_OPACITY};
`;

const DescriptionContainer = styled.View`
  margin: 0 ${TOUCH_AREA / 2}px;
  flex-direction: row;
  justify-content: space-between;
  z-index: 0;
`;

const Description = styled.Text`
  font-family: Jost-Medium;
  font-size: ${d.px * 13}px;
  color: ${c.lightGray};
  top: ${(TOUCH_AREA / 3) * 2}px;
`;

const ReviewUploadTrioScore = () => {
  const dispatch = useDispatch();

  const _thicknessScore = useSelector(
    (state: State) => state.reviewUploadReducer.thicknessScore
  );
  const _durabilityScore = useSelector(
    (state: State) => state.reviewUploadReducer.durabilityScore
  );
  const _oilyScore = useSelector(
    (state: State) => state.reviewUploadReducer.oilyScore
  );

  const _setThicknessScore = (thicknessScore: State) => {
    dispatch(setThicknessScore(thicknessScore));
  };
  const _setDurablityScore = (durabilityScore: State) => {
    dispatch(setDurabilityScore(durabilityScore));
  };
  const _setOilyScore = (oilyScore: State) => {
    dispatch(setOilyScore(oilyScore));
  };
  const _setIsFilledReviewUpload1 = (isFilledReviewUpload1: State) => {
    dispatch(setIsFilledReviewUpload1(isFilledReviewUpload1));
  };
  const _setTrioAverage = (trioAverage: State) => {
    dispatch(setTrioAverage(trioAverage));
  };

  useEffect(() => {
    _setIsFilledReviewUpload1(
      _thicknessScore && _durabilityScore && _oilyScore ? true : false
    );
    _setTrioAverage(
      Number((_thicknessScore + _oilyScore + _durabilityScore) / 3)
    );
  }, [_thicknessScore, _oilyScore, _durabilityScore]);

  const trioScore = [
    {
      type: thickness,
      score: _thicknessScore,
      question: '얇기는 어떠셨나요?',
      leftDescription: '두꺼워요',
      rightDescription: '얇아요',
      selectedText: {
        1: '너무 두꺼워요',
        2: '두꺼워요',
        3: '보통이에요',
        4: '얇아요',
        5: '완전 얇아요',
      },
    },
    {
      type: durability,
      score: _durabilityScore,
      question: '내구성은 어떠셨나요?',
      leftDescription: '약해요',
      rightDescription: '튼튼해요',
      selectedText: {
        1: '너무 약해요',
        2: '약해요',
        3: '무난해요',
        4: '튼튼해요',
        5: '아주 튼튼해요',
      },
    },
    {
      type: oily,
      score: _oilyScore,
      question: '윤활제는 충분했나요?',
      leftDescription: '건조해요',
      rightDescription: '촉촉해요',
      selectedText: {
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

  return trioScore.map((question) => {
    return (
      <>
        <TitleContainer>
          <TextMiddleTitleDark title={question.question} />
        </TitleContainer>
        <MarginMedium />
        <SelectedTextContainer>
          {question.score && (
            <SelectedText>{question.selectedText[question.score]}</SelectedText>
          )}
        </SelectedTextContainer>
        <Container>
          <DescriptionContainer>
            <Description>{question.leftDescription}</Description>
            <Description>{question.rightDescription}</Description>
          </DescriptionContainer>
          <BarContainer>
            <BarWrapper>
              <GrayBar />
              <MintBar score={question.score} />
            </BarWrapper>
            <PurpleIndicatorContainer>
              {oneToFive.map((bar) => {
                return (
                  <PurpleIndicatorTouchArea
                    onPress={() => {
                      switch (question.type) {
                        case thickness:
                          _setThicknessScore(bar.score);

                          return;
                        case durability:
                          _setDurablityScore(bar.score);

                          return;
                        case oily:
                          _setOilyScore(bar.score);

                          return;
                        default:
                          return;
                      }
                    }}
                    activeOpacity={1}
                  >
                    <PurpleIndicator
                      selfNum={bar.score}
                      givenNum={question.score}
                    />
                  </PurpleIndicatorTouchArea>
                );
              })}
            </PurpleIndicatorContainer>
          </BarContainer>

          <MarginMedium />
        </Container>
      </>
    );
  });
};

export default ReviewUploadTrioScore;

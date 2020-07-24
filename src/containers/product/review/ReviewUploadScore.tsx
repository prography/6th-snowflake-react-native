import * as React from 'react';
import { useState } from 'react';
import { Text } from 'react-native';
import analytics from "@react-native-firebase/analytics";
import styled from 'styled-components/native';
import { useSelector, useDispatch } from 'react-redux';

import {
  State,
  setScore,
} from '~/modules/product/reviewUpload/reviewUploadReducer';
import { d, c, l } from '~/utils/constant';
import MarginMedium from '~/components/universal/margin/MarginMedium';
import TextMiddleTitleDark from '~/components/universal/text/TextMiddleTitleDark';

const TOUCH_AREA = d.px * 40;
const CHECKBOX_SIZE = d.px * 15;
const ANSWER_TEXT_HEIGHT = d.px * 25;
const SMALL_MARGIN = d.px * 8;

const TitleContainer = styled.View`
  align-items: center;
  width: 100%;
`;
const AnswerContainer = styled.View`
  justify-content: center;
  align-items: center;
  height: ${TOUCH_AREA + ANSWER_TEXT_HEIGHT * 2 + SMALL_MARGIN}px;
`;
const AverageText = styled.Text`
  color: ${c.purple};
  font-family: Jost-Semi;
  font-size: ${d.px * 20};
`;
const StarContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: ${TOUCH_AREA * 5 + d.px * 80}px;
`;
const SelectedTextContainer = styled.View`
  height: ${ANSWER_TEXT_HEIGHT}px;
  justify-content: center;
  margin-bottom: ${SMALL_MARGIN}px;
`;

const SelectedText = styled.Text`
  font-family: Jost-Semi;
  font-size: ${d.px * 15}px;
  color: ${c.purple};
  line-height: ${ANSWER_TEXT_HEIGHT}px;
  text-align: center;
`;

const Star = styled.Text`
  font-family: Jost-semi;
  font-size: ${d.px * 25}px;
  color: ${(props) =>
    props.givenScore === null
      ? c.lightGray
      : props.selfScore > props.givenScore
        ? c.lightGray
        : c.purple};
`;
const StarTouchArea = styled.TouchableOpacity`
  width: ${TOUCH_AREA}px;
  height: ${TOUCH_AREA}px;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const CheckBoxTouchArea = styled.TouchableOpacity`
  flex-direction: row;
  height: ${TOUCH_AREA}px;
  justify-content: center;
  align-items: center;
  top: ${-TOUCH_AREA / 5}px;
`;
const CheckBox = styled.View`
  width: ${CHECKBOX_SIZE}px;
  height: ${CHECKBOX_SIZE}px;
  border-style: solid;
  border-width: ${0.7}px;
  border-color: ${c.lightGray};
  background-color: ${(props) => (props.checked ? c.purple : 'white')};
  margin-right: ${d.px * 10}px;
`;
const CheckText = styled.Text`
  font-family: Jost-Light;
  font-size: ${d.px * 14}px;
  color: ${(props) => (props.checked ? c.darkGray : c.lightGray)};
`;

const ReviewUploadScore = () => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const _score = useSelector((state: State) => state.reviewUploadReducer.score);
  const _setScore = (score: State) => {
    dispatch(setScore(score));
  };
  const _trioAverage = useSelector(
    (state: State) => state.reviewUploadReducer.trioAverage
  );

  const oneToFive = [
    { score: 1, text: '별로예요' },
    { score: 2, text: '비추해요' },
    { score: 3, text: '무난해요' },
    { score: 4, text: '추천해요' },
    { score: 5, text: '최고예요' },
  ];
  console.log('삼박자평균', _trioAverage);
  return (
    <>
      <TitleContainer>
        <TextMiddleTitleDark title={'이 제품을 추천하시나요?'} />
      </TitleContainer>

      {!checked && (
        <AnswerContainer>
          <SelectedTextContainer>
            {_score && (
              <SelectedText>{oneToFive[_score - 1].text}</SelectedText>
            )}
          </SelectedTextContainer>

          <StarContainer>
            {oneToFive.map((star, index: number) => {
              return (
                <>
                  <StarTouchArea
                    key={index}
                    onPress={() => {
                      _setScore(star.score);
                    }}
                  >
                    <Star selfScore={star.score} givenScore={_score}>
                      ★
                    </Star>
                  </StarTouchArea>
                </>
              );
            })}
          </StarContainer>
        </AnswerContainer>
      )}

      {checked && (
        <AnswerContainer>
          <AverageText>★ {_trioAverage}</AverageText>
        </AnswerContainer>
      )}

      <CheckBoxTouchArea
        activeOpacity={1}
        onPress={() => {
          if (checked) {
            analytics().logEvent("set_score_to_custom_average");
            _setScore(Math.round(_trioAverage));
          } else {
            analytics().logEvent("set_score_to_trio_average");
            _setScore(_trioAverage)
          }
          setChecked(!checked);
        }}
      >
        <CheckBox checked={checked} />
        <CheckText checked={checked}>
          앞의 콘돔 삼박자 평균 점수만큼 추천할래요.
        </CheckText>
      </CheckBoxTouchArea>
    </>
  );
};

export default ReviewUploadScore;

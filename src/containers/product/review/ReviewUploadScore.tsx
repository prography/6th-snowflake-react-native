import * as React from 'react';
import { useState } from 'react';
import { Text } from 'react-native';
import {
  State,
  setScore,
} from '~/modules/product/reviewUpload/reviewUploadReducer';
import styled from 'styled-components/native';
import { useSelector, useDispatch } from 'react-redux';
import { d, c, l } from '~/utils/constant';
import MarginMedium from '~/components/universal/margin/MarginMedium';
import TextMiddleTitleDark from '~/components/universal/text/TextMiddleTitleDark';

const TOUCH_AREA = d.px * 40;
const CHECKBOX_SIZE = d.px * 20;

const TitleContainer = styled.View`
  align-items: center;
  width: 100%;
`;
const AnswerContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

const StarContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;

  margin: 0 ${l.mR}px;
  width: ${d.width - l.mR * 2}px;
`;
const SelectedTextContainer = styled.View`
  height: ${d.px * 20}px;
  justify-content: center;
`;

const SelectedText = styled.Text`
  font-family: Jost-Semi;
  font-size: ${d.px * 15}px;
  color: ${c.purple};
  line-height: ${d.px * 20}px;
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

const CheckBoxContainer = styled.View`
  flex-direction: row;
`;
const CheckBox = styled.TouchableOpacity`
  width: ${CHECKBOX_SIZE}px;
  height: ${CHECKBOX_SIZE}px;
  border-style: solid;
  border-width: ${0.7}px;
  border-color: ${c.lightGray};
  background-color: ${(props) => (props.checked ? c.purple : 'white')};
`;
const CheckText = styled.Text``;

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
    { score: 1, text: '아니' },
    { score: 2, text: '별로' },
    { score: 3, text: '응' },
    { score: 4, text: '그래' },
    { score: 5, text: '조아' },
  ];
  console.log('삼박자평균', _trioAverage);
  return (
    <>
      <TitleContainer>
        <TextMiddleTitleDark title={'이 제품을 추천하시나요?'} />
      </TitleContainer>
      <MarginMedium />

      <AnswerContainer>
        <SelectedTextContainer>
          {!checked && _score && (
            <SelectedText>{oneToFive[_score - 1].text}</SelectedText>
          )}
        </SelectedTextContainer>

        <StarContainer>
          {!checked &&
            oneToFive.map((star) => {
              return (
                <>
                  <StarTouchArea
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
        {checked && <Text>{_trioAverage}</Text>}
      </AnswerContainer>

      <CheckBoxContainer>
        <CheckBox
          activeOpacity={1}
          checked={checked}
          onPress={() => [
            setChecked(!checked),
            checked ? _setScore(null) : _setScore(_trioAverage),
          ]}
        />
        <CheckText>앞의 콘돔 삼박자 평균 점수만큼 추천할래요.</CheckText>
      </CheckBoxContainer>
    </>
  );
};

export default ReviewUploadScore;

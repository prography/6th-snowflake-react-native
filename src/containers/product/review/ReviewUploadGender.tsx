import * as React from 'react';
import {
  State,
  setMyGender,
  setPartnerGender,
  setIsFilledReviewUpload2,
} from '~/modules/product/reviewUpload/reviewUploadReducer';
import { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { useSelector, useDispatch } from 'react-redux';
import { d, c, l } from '~/utils/constant';
import MarginMedium from '~/components/universal/margin/MarginMedium';
import TextMiddleTitleDark from '~/components/universal/text/TextMiddleTitleDark';
import TextMiddleTitleDarkCenter from '~/components/universal/text/TextMiddleTitleDarkCenter';
import GenderLoop from '~/components/universal/profile/GenderLoop';
import GenderCircle from '~/components/universal/profile/GenderCircle';

const TOUCH_AREA = d.px * 40;
const CHECKBOX_SIZE = d.px * 15;
const ANSWER_TEXT_HEIGHT = d.px * 25;
const SMALL_MARGIN = d.px * 8;

const CIRCLE_SIZE = 25;
const SELECT_CIRCLE_SIZE = 40;
const LOOP_SIZE = 30;

const GenderLoopContainer = styled.View`
  width: 100%;
  height: ${LOOP_SIZE + SMALL_MARGIN * 3}px;
  justify-content: center;
  align-items: center;
`;
const TitleContainer = styled.View`
  align-items: center;
  width: 100%;
`;
const Container = styled.View`
  flex-direction: column;
  align-items: center;
`;
const GuideTextContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
const GuideText = styled.Text`
  font-family: Jost-Semi;
  font-size: ${d.px * 15}px;
  color: ${c.black};
  line-height: ${CIRCLE_SIZE}px;
`;
const GenderSelectContainer = styled.View`
  flex-direction: row;
  width: ${TOUCH_AREA * 3}px;
  justify-content: space-between;
`;
const SelectCircleTouchArea = styled.TouchableOpacity`
  width: ${SELECT_CIRCLE_SIZE}px;
  height: ${SELECT_CIRCLE_SIZE}px;
  justify-content: center;
  align-items: center;
`;
const SelectCircle = styled.View`
  width: ${SELECT_CIRCLE_SIZE}px;
  height: ${SELECT_CIRCLE_SIZE}px;
  border-radius: 1000px;
  background-color: ${(props) =>
    props.gender === 'female'
      ? props.womanColor || c.extraLightGray
      : props.manColor || c.extraLightGray};
  justify-content: center;
  align-items: center;
  opacity: 0.3;
`;
const GenderText = styled.Text`
  position: absolute;
  font-family: Jost-Semi;
  font-size: ${d.px * 14}px;
  color: ${c.darkGray};
  line-height: ${SELECT_CIRCLE_SIZE}px;
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

const ReviewUploadGender = () => {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const _myGender = useSelector(
    (state: State) => state.reviewUploadReducer.myGender
  );
  const _partnerGender = useSelector(
    (state: State) => state.reviewUploadReducer.partnerGender
  );
  const _score = useSelector((state: State) => state.reviewUploadReducer.score);
  const womanColor = useSelector(
    (state: State) => state.genderColorReducer.womanColor
  );
  const manColor = useSelector(
    (state: State) => state.genderColorReducer.manColor
  );
  const _setMyGender = (myGender: State) => {
    dispatch(setMyGender(myGender));
  };
  const _setPartnerGender = (partnerGender: State) => {
    dispatch(setPartnerGender(partnerGender));
  };
  const _setIsFilledReviewUpload2 = (isFilledReviewUpload2: State) => {
    dispatch(setIsFilledReviewUpload2(isFilledReviewUpload2));
  };
  useEffect(() => {
    _setIsFilledReviewUpload2(
      _myGender && _partnerGender && _score ? true : false
    );
  }, [_myGender, _partnerGender, _score]);
  const setGender = (selectedGender) => {
    _myGender === null
      ? _setMyGender(selectedGender)
      : _partnerGender === null
      ? _setPartnerGender(selectedGender)
      : [_setPartnerGender(null), _setMyGender(selectedGender)];
  };
  const selection = [
    { selection: '여성', gender: 'female' },
    { selection: '남성', gender: 'male' },
  ];
  return (
    <>
      <Container>
        <TitleContainer>
          <TextMiddleTitleDarkCenter
            title={
              '본인의 성별과 \n 해당 제품을 함께 사용한 \n 파트너의 성별을 알려주세요.'
            }
          />
        </TitleContainer>

        <GenderLoopContainer>
          <GenderLoop
            gender={_myGender}
            partnerGender={_partnerGender}
            size={LOOP_SIZE}
          />
        </GenderLoopContainer>
        <GuideTextContainer>
          <GuideText>저는 </GuideText>
          <GenderCircle size={CIRCLE_SIZE} gender={_myGender} who={true} />
          <GuideText>이고, 파트너는 </GuideText>
          <GenderCircle
            size={CIRCLE_SIZE}
            gender={_partnerGender}
            who={false}
          />
          <GuideText>이에요.</GuideText>
        </GuideTextContainer>
        <MarginMedium />
        <GenderSelectContainer>
          {selection.map((circle) => {
            return (
              <SelectCircleTouchArea
                onPress={() => {
                  [setGender(circle.gender), console.log(circle.gender)];
                }}
              >
                <SelectCircle
                  manColor={manColor}
                  womanColor={womanColor}
                  gender={circle.gender}
                />
                <GenderText>{circle.selection}</GenderText>
              </SelectCircleTouchArea>
            );
          })}
        </GenderSelectContainer>
        <MarginMedium />
        <CheckBoxTouchArea
          activeOpacity={1}
          onPress={() => [setChecked(!checked)]}
        >
          <CheckBox checked={checked} />
          <CheckText checked={checked}>저장해 주세요.</CheckText>
          {/* 체크박스 기능 안 함 */}
        </CheckBoxTouchArea>
      </Container>
    </>
  );
};

export default ReviewUploadGender;

import * as React from 'react';
import {
  State,
  setScore,
  setMyGender,
  setPartnerGender,
} from '~/modules/product/reviewUpload/reviewUploadReducer';
import { useState } from 'react';
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
  justify-content: center;
  margin: 0 ${l.mR}px;
  width: ${d.width - l.mR * 2}px;
`;
const GuideTextContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;
const GuideText = styled.Text`
  font-family: Jost-Semi;
  font-size: ${d.px * 15}px;
  color: ${c.black};
  line-height: ${ANSWER_TEXT_HEIGHT}px;
  text-align: center;
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
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const _myGender = useSelector(
    (state: State) => state.reviewUploadReducer.myGender
  );
  const _partnerGender = useSelector(
    (state: State) => state.reviewUploadReducer.partnerGender
  );

  const _setMyGender = (myGender: State) => {
    dispatch(setMyGender(myGender));
  };

  const _setPartnerGender = (partnerGender: State) => {
    dispatch(setPartnerGender(partnerGender));
  };

  return (
    <>
      <TitleContainer>
        <TextMiddleTitleDarkCenter
          title={
            '본인의 성별과 \n 해당 제품을 함께 사용한 \n 파트너의 성별을 알려주세요.'
          }
        />
      </TitleContainer>

      <GenderLoopContainer>
        <GenderLoop gender={'female'} partnerGender={'male'} size={LOOP_SIZE} />
      </GenderLoopContainer>
      <GuideTextContainer>
        <GuideText>저는 이고</GuideText>
        <GenderCircle size={25} gender={_myGender} who={true} />
      </GuideTextContainer>
      <CheckBoxTouchArea
        activeOpacity={1}
        onPress={() => [setChecked(!checked)]}
      >
        <CheckBox checked={checked} />
        <CheckText checked={checked}>저장해 주세요.</CheckText>
      </CheckBoxTouchArea>
    </>
  );
};

export default ReviewUploadGender;

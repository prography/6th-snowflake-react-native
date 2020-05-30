import * as React from 'react';
import {
  State,
  setScore,
  setMyGender,
  setPartnerGender,
} from '~/modules/product/reviewUpload/reviewUploadReducer';
import styled from 'styled-components/native';
import { useSelector, useDispatch } from 'react-redux';
import { d, c, l } from '~/utils/constant';
import MarginMedium from '~/components/universal/margin/MarginMedium';
import TextMiddleTitleDark from '~/components/universal/text/TextMiddleTitleDark';
import TextMiddleTitleDarkCenter from '~/components/universal/text/TextMiddleTitleDarkCenter';

const BAR_HEIGHT = d.px * 4;
const TOUCH_AREA = d.px * 50;
const SMALL_INDICATOR = d.px * 4;
const BIG_INDICATOR = d.px * 8;
const LIGHT_OPACITY = 0.5;

const thickness = 'thickness';
const durability = 'durability';
const oily = 'oily';

const GenderLoopContainer = styled.View``;
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

const ReviewUploadGender = () => {
  const dispatch = useDispatch();

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
      <MarginMedium />
      <GenderLoopContainer />
      <Container>
        <MarginMedium />
      </Container>
    </>
  );
};

export default ReviewUploadGender;

import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  setIsFilledReviewUpload2, setReviewInfo2_partnerGender, setReviewInfo2_myGender, setReviewInfo2_score,
} from '~/store/modules/product/reviewUpload';
import styled from 'styled-components/native';
import { useSelector, useDispatch } from 'react-redux';
import { d, c, l } from '~/utils/constant';
import MarginMedium from '~/components/universal/margin/MarginMedium';
import TextMiddleTitleDark from '~/components/universal/text/TextMiddleTitleDark';
import TextMiddleTitleDarkCenter from '~/components/universal/text/TextMiddleTitleDarkCenter';
import GenderLoop from '~/components/universal/profile/GenderLoop';
import GenderCircle from '~/components/universal/profile/GenderCircle';
import { RootState } from '~/store/modules';

interface Props {
  productId: number;
}

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
    props.gender === 'WOMAN'
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

const ReviewUploadGender = ({productId}: Props) => {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();

  const reviewInfo2_score = useSelector(
    (state: RootState) => state.product.reviewUpload.reviewInfo2_score,
  );

  const reviewInfo2_average = useSelector(
    (state: RootState) => state.product.reviewUpload.reviewInfo2_average,
  );

  const reviewInfo2_myGender = useSelector(
    (state: RootState) => state.product.reviewUpload.reviewInfo2_myGender,
  );

  const reviewInfo2_partnerGender = useSelector(
    (state: RootState) => state.product.reviewUpload.reviewInfo2_partnerGender,
  );
  
  const info2_score = reviewInfo2_score.find((item) => item.productId === productId)
  const score = info2_score?.score || 0

  const info2_average = reviewInfo2_average.find((item) => item.productId === productId)
  const average = info2_average?.average || 0


  const info2_myGender = reviewInfo2_myGender.find((item) => item.productId === productId);
  const myGender = info2_myGender?.myGender || null;


  const info2_partnerGender = reviewInfo2_partnerGender.find((item) => item.productId === productId);
  const partnerGender = info2_partnerGender?.partnerGender || null;


  
  const womanColor = useSelector(
    (state: RootState) => state.join.genderColor.womanColor,
  );
  const manColor = useSelector(
    (state: RootState) => state.join.genderColor.manColor,
  );



  useEffect(() => {
    dispatch(setIsFilledReviewUpload2(
      ((score || average) && myGender && partnerGender) ? true : false
    ));
  }, [score, myGender, partnerGender]);

  const setGender = (selectedGender) => {
    myGender === null
      ?  dispatch(setReviewInfo2_myGender({productId, myGender:selectedGender}))
      : partnerGender === null
        ? dispatch(setReviewInfo2_partnerGender({productId, partnerGender:selectedGender}))
        : [dispatch(setReviewInfo2_myGender({productId, myGender:selectedGender})), dispatch(setReviewInfo2_partnerGender({productId, partnerGender:null}))]
  };

  const selection = [
    { selection: '여성', gender: 'WOMAN' },
    { selection: '남성', gender: 'MAN' },
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
            gender={myGender}
            partnerGender={partnerGender}
            size={LOOP_SIZE}
          />
        </GenderLoopContainer>
        <GuideTextContainer>
          <GuideText>저는 </GuideText>
          <GenderCircle size={CIRCLE_SIZE} gender={myGender} who={true} />
          <GuideText>이고, 파트너는 </GuideText>
          <GenderCircle
            size={CIRCLE_SIZE}
            gender={partnerGender}
            who={false}
          />
          <GuideText>이에요.</GuideText>
        </GuideTextContainer>
        <MarginMedium />
        <GenderSelectContainer>
          {selection.map((circle, index: number) => {
            return (
              <SelectCircleTouchArea
                key={index}
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
        {/* <CheckBoxTouchArea
          activeOpacity={1}
          onPress={() => [setChecked(!checked)]}
        >
          <CheckBox checked={checked} />
          <CheckText checked={checked}>저장해 주세요.</CheckText>
          
        </CheckBoxTouchArea> */}
      </Container>
    </>
  );
};

export default ReviewUploadGender;

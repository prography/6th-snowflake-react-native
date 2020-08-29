import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import analytics from "@react-native-firebase/analytics";

import { d, c, circleColor1 } from '~/utils/constant';
import TopBarWithIcon from '~/components/universal/topBar/TopBarRightIcon';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BottomButton from '~/components/universal/BottomButton';
import ColorCircles1 from '~/containers/join/ColorCircles/ColorCircles1';
import TextTitleDarkLeft from '~/components/universal/text/TextTitleDarkLeft';
import MarginWide from '~/components/universal/margin/MarginWide';
import ColorCircles2 from '~/containers/join/ColorCircles/ColorCircles2';
import ColorCircles3 from '~/containers/join/ColorCircles/ColorCircles3';
import ColorCircles4 from '~/containers/join/ColorCircles/ColorCircles4';
import ColorCircles5 from '~/containers/join/ColorCircles/ColorCircles5';
import MarginBottom from '~/components/universal/margin/MarginBottom';
import MarginMedium from '~/components/universal/margin/MarginMedium';
import ButtonGenderColor from '~/containers/join/ColorCircles/ButtonGenderColor';
import GenderCircle from '~/components/universal/profile/GenderCircle';
import TopBarBackArrowRightIcon from '~/components/universal/topBar/TopBarBackArrowRightIcon';

const Container = styled.View`
  flex-direction: column;
  align-items: flex-start;
  padding-left: ${d.px * 30}px;
  padding-right: ${d.px * 30}px;
  flex: 1;
`;

const TextContainer = styled.View`
  width: 100%;
  justify-content: space-between;
  flex: 1;
`;

const OneTextLine = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ColorContainer = styled.View`
  flex: 3;
  justify-content: space-around;
  width: 100%;
`;

interface State {
  womanColor: string;
  manColor: string;
  genderColorReducer: string;
}

const GenderColor = () => {
  const womanColor = useSelector(
    (state: State) => state.genderColorReducer.womanColor
  );
  const manColor = useSelector(
    (state: State) => state.genderColorReducer.manColor
  );
  console.log('womanColor:', womanColor);
  console.log('manColor:', manColor);

  React.useEffect(() => {
    analytics().setCurrentScreen("Select_GenderColor");
  }, []);

  return (
    <ButtonGenderColor>
      <Container>
        <TopBarBackArrowRightIcon />
        <TextContainer>
          <OneTextLine>
            <TextTitleDarkLeft title={'나는 여성은'} />

            <View
              style={{
                width: d.height / 25,
                height: d.height / 25,
                marginLeft: d.px * 10,
                marginRight: d.px * 5,
                borderRadius: 100,
                backgroundColor: womanColor === null ? 'white' : womanColor,
                borderColor: womanColor === null ? c.lightGray : womanColor,
                borderStyle: womanColor === null ? 'dashed' : 'solid',
                borderWidth: d.px * 1,
              }}
            />
            <TextTitleDarkLeft title={'색,'} />
          </OneTextLine>
          <OneTextLine>
            <TextTitleDarkLeft title={'남성은'} />
            <View
              style={{
                width: d.height / 25,
                height: d.height / 25,
                marginLeft: d.px * 10,
                marginRight: d.px * 5,
                borderRadius: 100,
                backgroundColor: manColor === null ? 'white' : manColor,
                borderColor: manColor === null ? c.lightGray : manColor,
                borderStyle: manColor === null ? 'dashed' : 'solid',
                borderWidth: d.px * 1,
              }}
            />
            <TextTitleDarkLeft title={'색으로'} />
          </OneTextLine>
          <TextTitleDarkLeft title={'표현할래요.'} />
        </TextContainer>
        <MarginMedium />
        <ColorContainer>
          <ColorCircles1 />
          <ColorCircles2 />
          <ColorCircles3 />
          <ColorCircles4 />
          <ColorCircles5 />
        </ColorContainer>
      </Container>
      <MarginMedium />
      <MarginBottom />
    </ButtonGenderColor>
  );
};

export default GenderColor;

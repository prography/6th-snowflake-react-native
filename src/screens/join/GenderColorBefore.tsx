import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import { d, color } from '~/utils/constant';
import TopBarWithIcon from '~/components/universal/topBar/TopBarRightIcon';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BottomButton from '~/components/universal/BottomButton';

const Container = styled.View`
  flex-direction: column;
  align-items: flex-start;
  padding: 0 ${d.px * 30}px;
  flex: 1;
`;

const TextContainer = styled.View`
  width: 100%;
  justify-content: space-between;
  flex: 1;
`;

const OneLine = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ContentText = styled.Text`
  font-weight: 500;
  font-size: ${d.px * 22}px;
`;

const ColorContainer = styled.View`
  width: 100%;
  flex: 3;
  justify-content: center;
  align-items: center;
`;

const ColorCircles = styled.View`
  flex-direction: row;
`;

export default () => {
  const womanColor = useSelector(
    (state: State) => state.genderColorReducer.womanColor
  );
  const manColor = useSelector(
    (state: State) => state.genderColorReducer.manColor
  );
  console.log('womanColor:', womanColor);
  console.log('manColor:', manColor);

  const circleColor1 = [
    { circleColor: '#3CB7D3' },
    { circleColor: '#C1AB85' },
    { circleColor: '#F76B6B' },
    { circleColor: '#A76CF4' },
  ];

  const circleColor2 = [
    { circleColor: '#5CB762' },
    { circleColor: '#F7AD6B' },
    { circleColor: '#F46CF1' },
    { circleColor: '#6969F9' },
  ];

  const circleColor3 = [
    { circleColor: '#75EF83' },
    { circleColor: '#F7DC6B' },
    { circleColor: '#C5A1FF' },
    { circleColor: '#6BA4F7' },
  ];
  const circleColor4 = [
    { circleColor: '#C1F76B' },
    { circleColor: '#F4F76B' },
    { circleColor: '#FF99BB' },
    { circleColor: '#6BD2F7' },
  ];

  const circleColor5 = [
    { circleColor: '#D1DBD3' },
    { circleColor: '#EAE3D5' },
    { circleColor: '#E0CCCC' },
    { circleColor: '#D3D7DE' },
  ];

  interface circleColor {
    circleColor: string;
  }
  const pickColor = ({ circleColor }: circleColor) => {
    womanColor === null
      ? setWomanColor(circleColor)
      : [
          manColor === null
            ? [
                circleColor === womanColor
                  ? alert('다른 색을 골라주세요')
                  : setManColor(circleColor),
              ]
            : [setWomanColor(circleColor), setManColor(null)],
        ];
  };

  return (
    <BottomButton>
      <Container>
        <TopBarWithIcon />
        <TextContainer>
          <OneLine>
            <ContentText>나는 여성은</ContentText>

            <View
              style={{
                width: d.px * 35,
                height: d.px * 35,
                marginLeft: d.px * 10,
                marginRight: d.px * 5,
                borderRadius: 100,
                backgroundColor: womanColor === null ? 'white' : womanColor,
                borderColor: womanColor === null ? color.lightGray : womanColor,
                borderStyle: womanColor === null ? 'dashed' : 'solid',
                borderWidth: d.px * 1,
              }}
            />
            <ContentText>색,</ContentText>
          </OneLine>
          <OneLine>
            <ContentText>남성은</ContentText>
            <View
              style={{
                width: d.px * 35,
                height: d.px * 35,
                marginLeft: d.px * 10,
                marginRight: d.px * 5,
                borderRadius: 100,
                backgroundColor: manColor === null ? 'white' : manColor,
                borderColor: manColor === null ? color.lightGray : manColor,
                borderStyle: manColor === null ? 'dashed' : 'solid',
                borderWidth: d.px * 1,
              }}
            />
            <ContentText>색으로</ContentText>
          </OneLine>
          <ContentText>표현하고 싶어요.</ContentText>
        </TextContainer>
        <ColorContainer>
          <ColorCircles style={{ flexWrap: 'wrap' }}>
            {circleColor1.map((circle) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    pickColor(circleColor);
                  }}
                  style={{
                    width: d.px * 40,
                    height: d.px * 40,
                    marginRight: d.px * 44,
                    marginBottom: d.px * 30,
                    borderRadius: 100,
                    backgroundColor: circle.circleColor,
                  }}
                />
              );
            })}
          </ColorCircles>
        </ColorContainer>
      </Container>
    </BottomButton>
  );
};

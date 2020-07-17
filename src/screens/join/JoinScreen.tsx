import * as React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LinePurpleWhenFocused from '~/components/universal/line/LinePurpleWhenFocused';
import { validateEmail, validatePassword } from '~/utils/validator';
import MarginNarrow from '~/components/universal/margin/MarginNarrow';
import { d, c, l, BASE_URL } from '~/utils/constant';
import analytics from "@react-native-firebase/analytics";

import BottomBtnCollectData from '~/components/universal/bottomBar/BottomBtnCollectData';
import MarginWide from '~/components/universal/margin/MarginWide';
import TopBarLeftIcon from '~/components/universal/topBar/TopBarLeftIcon';
import TopBarWithIcon from '~/components/universal/topBar/TopBarRightIcon';
import { withNavigation } from '@react-navigation/compat';
import TopBarBackArrowRightIcon from '~/components/universal/topBar/TopBarBackArrowRightIcon';

const JOIN_BOX_HEIGHT = d.px * 50;
const Container = styled.View`
  flex: 1;
  background-color: white;
`;
const JoinContainer = styled.View`
  margin: 0 ${l.mR}px;
`;
const JoinBox = styled.TouchableOpacity`
  width: 100%;
  height: ${JOIN_BOX_HEIGHT}px;
  background-color: ${(props) =>
    props.guide === 'email' ? c.purple : 'white'};
  justify-content: center;
  align-items: center;
  margin-bottom: ${d.px * 8}px;
  border-color: ${c.extraLightGray};
  border-style: solid;
  border-width: ${d.px * 1}px;
`;
const JoinText = styled.Text`
  font-family: Jost-Medium;
  font-size: ${d.px * 15}px;
  color: ${(props) => (props.guide === 'email' ? 'white' : c.darkGray)};
  margin-right: ${d.px * 5}px;
  line-height: ${JOIN_BOX_HEIGHT}px;
`;

interface Props {
  navigation: any;
}

const JoinScreen = ({ navigation }: Props) => {
  const signInWithKakao = () => { };
  const joinArray = [
    {
      guideText: '이메일로 가입하기',
      guide: 'email',
      screen: 'Join1',
      function: 'none',
      img: 'none',
      key: 0,
    },
    {
      guideText: '카카오로 가입하기',
      guide: 'kakao',
      screen: 'JoinWithKakao',
      function: signInWithKakao,
      img: 'kakao',
      key: 1,
    },
    {
      guideText: '애플 로그인으로 가입하기',
      guide: 'apple',
      screen: 'JoinWithApple',
      function: 'signInWithApple',
      img: 'apple',
      key: 2,
    },
  ];

  React.useEffect(() => {
    analytics().setCurrentScreen("JoinScreen");
  }, []);

  return (
    <>
      <Container>
        <TopBarBackArrowRightIcon />
        {joinArray.map((join, index: number) => {
          return (
            <JoinContainer>
              <JoinBox
                key={index}
                guide={join.guide}
                activeOpacity={1}
                onPress={() => {
                  join.function === 'none'
                    ? navigation.navigate('JoinStack', { screen: join.screen })
                    : join.function;
                }}
              >
                <JoinText guide={join.guide}>{join.guideText}</JoinText>
              </JoinBox>
            </JoinContainer>
          );
        })}
      </Container>
    </>
  );
};

export default withNavigation(JoinScreen);

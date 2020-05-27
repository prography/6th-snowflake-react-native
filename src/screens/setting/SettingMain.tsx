import * as React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import NavBar from '~/screens/NavBar';
import { withNavigation } from '@react-navigation/compat';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TextTitleDarkPurpleLink from '~/components/universal/text/TextTitleDarkPurpleLink';
import { c, d, l } from '~/utils/constant';
import TopBarWithIcon from '~/components/universal/topBar/TopBarRightIcon';
const Container = styled.View`
  margin-right: ${l.mR}px;
  margin-left: ${l.mL}px;
`;

const SettingMain = () => {
  return (
    <NavBar>
      <Container>
        <TopBarWithIcon />
        <TextTitleDarkPurpleLink
          title={'성별 색상 변경'}
          buttonText={'Gender Color'}
          link={'JoinStack'}
        />
        <TextTitleDarkPurpleLink
          title={'로그인'}
          buttonText={'LOGIN'}
          link={'Login'}
        />
        <TextTitleDarkPurpleLink
          title={'회원가입'}
          buttonText={'JOIN'}
          link={'Join'}
        />
      </Container>
    </NavBar>
  );
};

export default withNavigation(SettingMain);

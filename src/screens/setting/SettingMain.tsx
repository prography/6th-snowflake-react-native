import * as React from 'react';
import styled from 'styled-components/native';
import { ScrollView } from 'react-native';
import NavBar from '~/screens/NavBar';
import { withNavigation } from '@react-navigation/compat';
import TextTitleDarkPurpleLink from '~/components/universal/text/TextTitleDarkPurpleLink';
import { c, d, l } from '~/utils/constant';
import TopBarWithIcon from '~/components/universal/topBar/TopBarRightIcon';
import MyProfile from '~/containers/setting/MyProfile';
import MarginWide from '~/components/universal/margin/MarginWide';
import Likes from '~/containers/setting/Likes';

const Container = styled.View`
  margin-right: ${l.mR}px;
  margin-left: ${l.mL}px;
`;

const SettingMain = () => {
  return (
    <NavBar>
      <ScrollView>
        <Container>
          <TopBarWithIcon />
          <MyProfile />
          <MarginWide />
          <TextTitleDarkPurpleLink
            title={'성별 색상 변경'}
            buttonText={'Gender Color'}
            stack={'JoinStack'}
            screen={'GenderColor'}
          />
          <TextTitleDarkPurpleLink
            title={'로그인'}
            buttonText={'LOGIN'}
            stack={'JoinStack'}
            screen={'Login'}
          />
          <TextTitleDarkPurpleLink
            title={'회원가입'}
            buttonText={'JOIN'}
            stack={'JoinStack'}
            screen={'Join1'}
          />
        </Container>
        <Container>
          <Likes />
        </Container>
      </ScrollView>
    </NavBar>
  );
};

export default withNavigation(SettingMain);

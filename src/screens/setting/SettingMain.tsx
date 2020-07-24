import * as React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';
import { useSelector } from 'react-redux';
import analytics from "@react-native-firebase/analytics";
import { withNavigation } from '@react-navigation/compat';
import AsyncStorage, {
  useAsyncStorage,
} from '@react-native-community/async-storage';

import NavBar from '~/screens/NavBar';
import TextTitleDarkPurpleLink from '~/components/universal/text/TextTitleDarkPurpleLink';
import { c, d, l } from '~/utils/constant';
import TopBarWithIcon from '~/components/universal/topBar/TopBarRightIcon';
import MyProfile from '~/containers/setting/MyProfile';
import MarginWide from '~/components/universal/margin/MarginWide';
import Likes from '~/containers/setting/Likes';
import { UserId, AsyncAccessToken, UserName } from '~/utils/asyncStorage';
import Blinder from '~/components/product/Blinder';
import TopBarLeftIcon from '~/components/universal/topBar/TopBarLeftIcon';
import MyGenderColor from '~/containers/setting/MyGenderColor';
import LineGrayRightLong from '~/components/universal/line/LineGrayRightLong';
import MarginMedium from '~/components/universal/margin/MarginMedium';
import { llog2 } from '~/utils/functions';

const Container = styled.View``;

const LoginContainer = styled.View`
  margin-left: ${l.mL}px;
  margin-right: ${l.mR}px;
`;

const SettingMain = () => {
  const [_token, _setToken] = useState(null);
  const _isLoggedin = useSelector((state) => state.authReducer.isLoggedin);
  console.log('로그인됨?', _isLoggedin);

  const _getToken = async () => {
    try {
      const token = await AsyncStorage.getItem(AsyncAccessToken);
      _setToken(token);
      llog2('1.🐹 store에서 토큰 불러옴:', _token);
    } catch (e) {
      console.error('안 가져와', e);
    }
  };

  useEffect(() => {
    _getToken();
    analytics().setCurrentScreen("SettingMain");
  }, []);

  return (
    <NavBar selectedStack={'JoinStack'}>
      <ScrollView>
        <Container>
          <TopBarLeftIcon />

          {_token !== null && _isLoggedin ? (
            <>
              <MyProfile token={_token} />
              <MarginWide />
              <Likes token={_token} />
            </>
          ) : (
              <>
                <LoginContainer>
                  <MarginMedium />
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
                    screen={'JoinScreen'}
                  />
                </LoginContainer>
              </>
            )}
          <MarginWide />
          <LineGrayRightLong />
          <MarginWide />
          <MyGenderColor />
          <MarginWide />
          <LineGrayRightLong />
          <MarginWide />
          <LoginContainer>
            <TextTitleDarkPurpleLink
              title={'피드백을 부탁드립니다'}
              buttonText={'Thank You!'}
              stack={'FeedbackStack'}
              screen={'Feedback'}
            />
          </LoginContainer>
        </Container>
      </ScrollView>
      <Blinder />
    </NavBar>
  );
};

export default withNavigation(SettingMain);

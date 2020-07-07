import * as React from 'react';
import styled from 'styled-components/native';
import { ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import NavBar from '~/screens/NavBar';
import { withNavigation } from '@react-navigation/compat';
import TextTitleDarkPurpleLink from '~/components/universal/text/TextTitleDarkPurpleLink';
import { c, d, l } from '~/utils/constant';
import TopBarWithIcon from '~/components/universal/topBar/TopBarRightIcon';
import MyProfile from '~/containers/setting/MyProfile';
import MarginWide from '~/components/universal/margin/MarginWide';
import Likes from '~/containers/setting/Likes';
import AsyncStorage, {
  useAsyncStorage,
} from '@react-native-community/async-storage';
import { UserId, AsyncAccessToken, UserName } from '~/utils/asyncStorage';
import Blinder from '~/components/product/Blinder';
import TopBarLeftIcon from '~/components/universal/topBar/TopBarLeftIcon';

const Container = styled.View``;

const SettingMain = () => {
  const [_token, _setToken] = useState(null);
  const _isLoggedin = useSelector((state) => state.authReducer.isLoggedin);
  console.log('로그인됨?', _isLoggedin);

  const _getToken = async () => {
    try {
      const token = await AsyncStorage.getItem(AsyncAccessToken);
      _setToken(token);
      console.log('1.🐹 store에서 토큰 불러옴:', _token);
    } catch (e) {
      console.error('안 가져와');
    }
  };

  useEffect(() => {
    _getToken();
  }, []);

  return (
    <NavBar>
      <ScrollView>
        <Container>
          <TopBarLeftIcon />

          {_isLoggedin ? (
            <>
              <MyProfile token={_token} />
              <MarginWide />
              <Likes token={_token} />
            </>
          ) : (
            <>
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
            </>
          )}
          <TextTitleDarkPurpleLink
            title={'성별 색상 변경'}
            buttonText={'Gender Color'}
            stack={'JoinStack'}
            screen={'GenderColor'}
          />
        </Container>
      </ScrollView>
      <Blinder />
    </NavBar>
  );
};

export default withNavigation(SettingMain);

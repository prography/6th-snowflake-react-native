import * as React from 'react';
import { useEffect, useState } from 'react';
import TextTitlePurpleRight from '~/components/universal/text/TextTitlePurpleRight';
import { useSelector } from 'react-redux';
import { d, BASE_URL, c, l } from '~/utils/constant';
import styled from 'styled-components/native';
import AsyncStorage, {
  useAsyncStorage,
} from '@react-native-community/async-storage';
import { UserId, AsyncAccessToken, UserName } from '~/utils/asyncStorage';

const ProfileContainer = styled.View``;

const MyProfile = () => {
  const _isLoggedin = useSelector((state) => state.authReducer.isLoggedin);
  const [token, setToken] = useState(null);
  const [userInfoArray, setUserInfoArray] = useState(null);

  const _getUserInfo = async () => {
    try {
      const _token = await AsyncStorage.getItem(AsyncAccessToken);
      setToken(_token);
      console.log(token);
    } catch (e) {
      console.error('안 가져와');
    }

    try {
      const response = await fetch(`${BASE_URL}/accounts/`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const json = await response.json();

      console.log('🐹User info - success!', json);
      await setUserInfoArray(json);
    } catch (error) {
      console.log('🐹User info - error', error);
    }

    try {
      await AsyncStorage.setItem('UserId', String(userInfoArray.id));
      await AsyncStorage.setItem('UserName', String(userInfoArray.username));
      const userIdFS = await AsyncStorage.getItem(UserId);
      const userNameFS = await AsyncStorage.getItem(UserName);
      console.log('🐹store 안의 userId:', userIdFS);
      console.log('🐹store 안의 userName:', userNameFS);
    } catch (error) {
      console.log('🐹store 저장 에러', error);
    }
  };

  useEffect(() => {
    _getUserInfo();
  }, [_isLoggedin]);

  return (
    <>
      {_isLoggedin ? (
        userInfoArray.username ? (
          <>
            <ProfileContainer>
              <TextTitlePurpleRight
                title={userInfoArray.username + '님, 반가워요 ☀️'}
              />
            </ProfileContainer>
          </>
        ) : (
          <TextTitlePurpleRight title={'로딩☁️'} />
        )
      ) : (
        <TextTitlePurpleRight title={'Please join us! ☁️'} />
      )}
    </>
  );
};
export default MyProfile;

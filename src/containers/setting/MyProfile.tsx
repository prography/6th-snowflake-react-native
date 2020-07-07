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
interface Props {
  token: any;
}
const MyProfile = ({ token }: Props) => {
  const _isLoggedin = useSelector((state) => state.authReducer.isLoggedin);
  // const [token, setToken] = useState(null);
  const [userInfoArray, setUserInfoArray] = useState(null);
  const [userNameFS, setUserNameFS] = useState(null);

  const _getUserInfo = async () => {
    try {
      const response = await fetch(`${BASE_URL}/accounts/`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const json = await response.json();
      console.log('2.🐹User info 불러옴 - 성공!', json);
      setUserInfoArray(json);

      await AsyncStorage.setItem('UserId', String(userInfoArray.id));
      await AsyncStorage.setItem('UserName', String(userInfoArray.username));
      const _userIdFS = await AsyncStorage.getItem(UserId);
      const _userNameFS = await AsyncStorage.getItem(UserName);
      console.log('3-1.🐹store 안의 userId 받아오나요:', _userIdFS);
      console.log('3-2.🐹store 안의 userName 받아오나요:', _userNameFS);
      setUserNameFS(_userNameFS);
    } catch (error) {
      console.log('🐹store 저장 에러', error);
    }
  };

  useEffect(() => {
    _getUserInfo();
  }, []);

  return (
    <>
      {_isLoggedin ? (
        userInfoArray ? (
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

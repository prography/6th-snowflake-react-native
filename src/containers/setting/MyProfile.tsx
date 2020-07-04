import * as React from 'react';
import { useEffect, useState } from 'react';
import TextTitlePurpleRight from '~/components/universal/text/TextTitlePurpleRight';
import { useSelector } from 'react-redux';
import { d, BASE_URL, c, l } from '~/utils/constant';
import styled from 'styled-components/native';
import AsyncStorage, {
  useAsyncStorage,
} from '@react-native-community/async-storage';
import { AsyncAccessToken } from '~/utils/asyncStorage';

const ProfileContainer = styled.View``;
const UserName = styled.Text``;
const MyProfile = () => {
  const _isLoggedin = useSelector((state) => state.authReducer.isLoggedin);
  const [token, setToken] = useState(null);
  const [userInfoArray, setUserInfoArray] = useState([]);

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
      setUserInfoArray(json);
    } catch (error) {
      console.log('🐹User info - error', error);
    }
  };

  useEffect(() => {
    _getUserInfo();
  }, []);

  return (
    <>
      {_isLoggedin ? (
        <>
          <ProfileContainer>
            <TextTitlePurpleRight
              title={userInfoArray.username + '님, 반가워요 ☀️'}
            />
          </ProfileContainer>
        </>
      ) : (
        <TextTitlePurpleRight title={'Please join us! ☁️'} />
      )}
    </>
  );
};
export default MyProfile;

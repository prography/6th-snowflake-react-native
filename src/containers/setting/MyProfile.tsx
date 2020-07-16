import * as React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import styled from 'styled-components/native';

import { d, BASE_URL, c, l } from '~/utils/constant';
import TextTitlePurpleRight from '~/components/universal/text/TextTitlePurpleRight';
import { UserId, UserName } from '~/utils/asyncStorage';
import TextTitleDarkPurpleLink from '~/components/universal/text/TextTitleDarkPurpleLink';
import { manageLoginLogout } from '~/modules/auth';
import MarginNarrow from '~/components/universal/margin/MarginNarrow';
import { llog2 } from '~/utils/functions';

const ProfileContainer = styled.View``;
const Container = styled.View`
  margin-left: ${l.mL}px;
  margin-right: ${l.mR}px;
`;
interface Props {
  token: any;
}
const MyProfile = ({ token }: Props) => {
  const dispatch = useDispatch();
  const _isLoggedin = useSelector((state) => state.authReducer.isLoggedin);

  const [userInfoArray, setUserInfoArray] = useState(null);

  const _getUserInfo = async () => {
    try {
      const response = await fetch(`${BASE_URL}/accounts/`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const json = await response.json();
      llog2('2.🐹User info 불러옴 - 성공!', json);
      setUserInfoArray(json);

      await AsyncStorage.setItem(UserId, String(json.id));
      await AsyncStorage.setItem(UserName, String(json.username));
      const _userIdFS = await AsyncStorage.getItem(UserId);
      const _userNameFS = await AsyncStorage.getItem(UserName);
      llog2('3-1.🐹store 안의 userId 받아오나요:', _userIdFS);
      llog2('3-2.🐹store 안의 userName 받아오나요:', _userNameFS);
    } catch (error) {
      llog2('🐹store 저장 에러', error);
    }
  };

  useEffect(() => {
    _getUserInfo();
  }, []);

  return (
    <Container>
      {_isLoggedin ? (
        userInfoArray ? (
          <>
            <ProfileContainer>
              <TextTitlePurpleRight
                title={userInfoArray.username + '님, 반가워요 ☀️'}
              />
            </ProfileContainer>
            <MarginNarrow />
            <TextTitleDarkPurpleLink
              title={''}
              buttonText={'로그아웃'}
              onPress={() => manageLoginLogout(dispatch, false)}
            />
          </>
        ) : (
            <TextTitlePurpleRight title={'로딩☁️'} />
          )
      ) : (
          <TextTitlePurpleRight title={'Please join us! ☁️'} />
        )}
    </Container>
  );
};
export default MyProfile;

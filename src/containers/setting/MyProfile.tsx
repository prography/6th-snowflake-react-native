import * as React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage, { useAsyncStorage } from '@react-native-community/async-storage';
import styled from 'styled-components/native';

import { d, BASE_URL, c, l } from '~/utils/constant';
import TextTitlePurpleRight from '~/components/universal/text/TextTitlePurpleRight';
import { AsyncAccessToken } from '~/utils/asyncStorage';
import TextTitleDarkPurpleLink from '~/components/universal/text/TextTitleDarkPurpleLink';
import { manageLoginLogout } from '~/store/modules/auth';

import MarginNarrow from '~/components/universal/margin/MarginNarrow';
import { llog2 } from '~/utils/functions';
import { RootState } from '~/store/modules';

const ProfileContainer = styled.View``;
const Container = styled.View`
  margin-left: ${l.mL}px;
  margin-right: ${l.mR}px;
`;
const MyProfile = () => {
  const dispatch = useDispatch();
  const _isLoggedin = useSelector((state: RootState) => state.auth.isLoggedin);
  const { getItem: getTokenItem } = useAsyncStorage(AsyncAccessToken);

  const [userInfoArray, setUserInfoArray] = useState(null);

  const _getUserInfo = async () => {
    try {
      const token = await getTokenItem();
      if (!token) { return }

      const response = await fetch(`${BASE_URL}/accounts/`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const json = await response.json();
      llog2('2.🐹User info 불러옴 - 성공!', json);
      setUserInfoArray(json);
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

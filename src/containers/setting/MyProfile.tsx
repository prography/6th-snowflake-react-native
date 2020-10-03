import * as React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage, { useAsyncStorage } from '@react-native-community/async-storage';
import styled from 'styled-components/native';

import { d, BASE_URL, c, l } from '~/utils/constant';
import TextTitlePurpleRight from '~/components/universal/text/TextTitlePurpleRight';
import { AsyncAccessToken } from '~/utils/asyncStorage';
import TextTitleDarkPurpleLink from '~/components/universal/text/TextTitleDarkPurpleLink';
import { manageLoginLogout } from '~/store/modules/join/auth';

import MarginNarrow from '~/components/universal/margin/MarginNarrow';
import { llog2 } from '~/utils/functions';
import { RootState } from '~/store/modules';
import { getUserInfoRequest } from '~/store/modules/join/userInfo';

const ProfileContainer = styled.View``;
const Container = styled.View`
  margin-left: ${l.mL}px;
  margin-right: ${l.mR}px;
`;
const MyProfile = () => {
  // redux
  const dispatch = useDispatch();
  const _isLoggedin = useSelector((state: RootState) => state.auth.isLoggedin);
  const { loading, data: userInfo, error } = useSelector((state: RootState) => state.join.userInfo.userInfo);

  useEffect(() => {
    dispatch(getUserInfoRequest());
  }, []);

  return (
    <Container>
      {_isLoggedin ? (
        userInfo ? (
          <>
            <ProfileContainer>
              <TextTitlePurpleRight
                title={userInfo.username + '님, 반가워요 ☀️'}
              />
            </ProfileContainer>
            <MarginNarrow />
            <TextTitleDarkPurpleLink
              title={''}
              buttonText={'LOGOUT'}
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

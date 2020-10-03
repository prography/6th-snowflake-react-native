import * as React from 'react';
import { useAsyncStorage } from '@react-native-community/async-storage';
import { useSelector, useDispatch } from 'react-redux';

import RootTabNavigation from '~/navigation/RootTabNavigation';
import { AsyncAccessToken } from '~/utils/asyncStorage';
import { llog } from '~/utils/functions';
import { manageLoginLogout } from '~/store/modules/join/auth';
import { RootState } from '~/store/modules';

export default () => {
  const dispatch = useDispatch();
  const _isLoggedin = useSelector((state: RootState) => state.join.auth.isLoggedin);
  llog('💜 _isLoggedin', _isLoggedin)

  const { getItem } = useAsyncStorage(AsyncAccessToken);
  const settingIsLoggedin = async () => {
    const accessTokenFS = await getItem();
    if (accessTokenFS) {
      llog('🥭 accessTokenFS 있다', accessTokenFS);
      manageLoginLogout(dispatch, true);
      llog('🥭 accessTokenFS 🥭');
    } else {
      llog('accessTokenFS 없다', accessTokenFS);
      manageLoginLogout(dispatch, false);
    }
  };

  React.useEffect(() => {
    settingIsLoggedin();
  }, []);

  // 로그인이 true이든 false이든 null은 아니어야 로그인 처리를 했는지 알 수 있으니까 !== null을 적용해준거
  return _isLoggedin !== null && (
    <RootTabNavigation />
  );
};

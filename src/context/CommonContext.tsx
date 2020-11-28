import * as React from 'react';
import { createContext, useContext, useState, useEffect } from 'react';

import remoteConfig, {
  FirebaseRemoteConfigTypes,
} from '@react-native-firebase/remote-config';

import { verNums, splitStringToNumArr } from '~/utils/version';
import { llog } from '~/utils/functions';
import { isAndroid } from '~/utils/constant';
import { defaultRemoteConfigs, RemoteKey, getRCValue } from '~/utils/firebase/remoteConfig';

export const CommonContext = createContext();

export enum APP_VERSION_STATE {
  NOT_SET_YET = 'NOT_SET_YET',
  NEED_SOFT_UPDATE = 'NEED_SOFT_UPDATE',
  NEED_FORCE_UPDATE = 'NEED_FORCE_UPDATE',
  NEED_CODE_PUSH = 'NEED_CODE_PUSH',
  NEED_FORCE_UPDATE_BY_CODE_PUSH = 'NEED_FORCE_UPDATE_BY_CODE_PUSH',
  NOT_NECESSARY = 'NOT_NECESSARY',
}

export interface RemoteConfigs extends FirebaseRemoteConfigTypes.ConfigValues {
  ios_code_push_version: FirebaseRemoteConfigTypes.ConfigValue;
  android_code_push_version: FirebaseRemoteConfigTypes.ConfigValue;
  ios_force_version: FirebaseRemoteConfigTypes.ConfigValue;
  android_force_version: FirebaseRemoteConfigTypes.ConfigValue;
  android_update_link: FirebaseRemoteConfigTypes.ConfigValue;
  ios_update_link: FirebaseRemoteConfigTypes.ConfigValue;
  feedback_link: FirebaseRemoteConfigTypes.ConfigValue;
}

export const CommonProvider = ({ children }) => {
  const [remoteConfigs, setRemoteConfigs] = useState<RemoteConfigs>(null);
  const [cpVerNums, setCpVerNums] = useState<number[]>(verNums);
  const [versionState, setVersionState] = useState<APP_VERSION_STATE>(
    APP_VERSION_STATE.NOT_SET_YET,
  );

  const getAppVersionState = (
    allConfigs: RemoteConfigs,
    verNums: number[],
    cpVerNums: number[],
  ): APP_VERSION_STATE => {
    // 일단 강제업데이트 여부부터 체크.
    const forceVerNums = splitStringToNumArr(
      isAndroid
        ? allConfigs.android_force_version.asString()
        : allConfigs.ios_force_version.asString(),
      '.'
    )

    // verNum(현재버전) vs forceUpdateVer(최소 이 넘버는 되어야 하는 버전)
    if (verNums[0] < forceVerNums[0]) {
      return APP_VERSION_STATE.NEED_FORCE_UPDATE;
    } else if (verNums[0] === forceVerNums[0]) {
      if (verNums[1] < forceVerNums[1]) {
        return APP_VERSION_STATE.NEED_FORCE_UPDATE;
      } else if (verNums[1] === forceVerNums[1]) {
        if (verNums[2] < forceVerNums[2]) {
          return APP_VERSION_STATE.NEED_FORCE_UPDATE_BY_CODE_PUSH;
        }
      }
    }

    // verNums(현재버전) vs cpVerNums(실제버전)
    if (verNums[0] < cpVerNums[0]) {
      return APP_VERSION_STATE.NEED_SOFT_UPDATE;
    } else if (verNums[0] === cpVerNums[0]) {
      if (verNums[1] < cpVerNums[1]) {
        return APP_VERSION_STATE.NEED_SOFT_UPDATE;
      } else if (verNums[1] === cpVerNums[1]) {
        if (verNums[2] < cpVerNums[2]) {
          return APP_VERSION_STATE.NEED_CODE_PUSH;
        }
      }
    }
    return APP_VERSION_STATE.NOT_NECESSARY;
  };

  const settingRemoteConfigAndVersionState = async () => {
    try {
      await remoteConfig().setDefaults(defaultRemoteConfigs);
      await remoteConfig().fetch(30); // 30초
      const fetchedRemotely = await remoteConfig().activate();
      if (fetchedRemotely) {
        llog('🥱 2 Configs were retrieved from the backend and activated.');
      } else {
        llog(
          '🥱 3 No configs were fetched from the backend, and the local configs were already activated',
        );
      }

      const allConfigs: RemoteConfigs = remoteConfig().getAll();
      llog('👾 allConfigs 👾', allConfigs);
      setRemoteConfigs(allConfigs);

      // [App Version State 설정]
      // 1. code push version 을 remote config에서 가져온다.
      let cpVer;
      if (isAndroid) {
        cpVer = getRCValue(allConfigs, RemoteKey.android_code_push_version);
      } else {
        cpVer = getRCValue(allConfigs, RemoteKey.ios_code_push_version);
      }

      // 2. number array로 변환하고 setCpVerNums에 저장한다.
      const remoteCpVer = splitStringToNumArr(cpVer, '.');
      setCpVerNums(remoteCpVer);

      // 3. 이를 바탕으로 version state를 설정한다.
      const state = getAppVersionState(allConfigs, verNums, remoteCpVer);
      // console.log('🔢 Local 버전: ', verNums);
      // console.log('🔢 Remote Config 버전: ', cpVer, remoteCpVer);
      // console.log('🔢 State', state);
      setVersionState(state);

    } catch (error) {
      if (__DEV__) {
        alert('remoteConfig 에러');
        llog('🧲 remoteConfig', error)
      }
      setVersionState(APP_VERSION_STATE.NOT_NECESSARY);
    }
  };

  useEffect(() => {
    settingRemoteConfigAndVersionState();
  }, []);

  return (
    <CommonContext.Provider
      value={{
        remoteConfigs,
        versionState,
      }}>
      {children}
    </CommonContext.Provider>
  );
};

export const useRemoteConfigs = (): { remoteConfigs: RemoteConfigs } => {
  const { remoteConfigs } = useContext(CommonContext);
  return { remoteConfigs };
};

export const useAppVersionState = (): { versionState: APP_VERSION_STATE } => {
  const { versionState } = useContext(CommonContext);
  return { versionState };
};

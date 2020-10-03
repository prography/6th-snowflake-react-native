import * as React from 'react';
import { createContext, useContext, useState, useEffect } from 'react';

import remoteConfig, {
  FirebaseRemoteConfigTypes,
} from '@react-native-firebase/remote-config';

import { verNums } from '~/utils/version';
import { llog } from '~/utils/functions';
import { isAndroid } from '~/utils/constant';

export const CommonContext = createContext();

export enum APP_VERSION_STATE {
  NOT_SET_YET,
  NEED_SOFT_UPDATE,
  NEED_CODE_PUSH,
  NOT_NECESSARY,
}

export interface RemoteConfigs extends FirebaseRemoteConfigTypes.ConfigValues {
  ios_code_push_version: FirebaseRemoteConfigTypes.ConfigValue;
  android_code_push_version: FirebaseRemoteConfigTypes.ConfigValue;
  android_update_link: FirebaseRemoteConfigTypes.ConfigValue;
  ios_update_link: FirebaseRemoteConfigTypes.ConfigValue;
  feedback_link: FirebaseRemoteConfigTypes.ConfigValue;
}

export const CommonProvider = ({ children }) => {
  const [remoteConfigs, setRemoteConfigs] = useState<RemoteConfigs>({});
  const [cpVerNums, setCpVerNums] = useState<number[]>(verNums);
  const [versionState, setVersionState] = useState<APP_VERSION_STATE>(
    APP_VERSION_STATE.NOT_SET_YET,
  );

  const getAppVersionState = (
    verNums: number[],
    cpVerNums: number[],
  ): APP_VERSION_STATE => {
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
      await remoteConfig().fetch(0);
      const activated = await remoteConfig().activate();
      if (activated) {
        llog('Defaults set, fetched & activated!', activated);
        const allConfigs: RemoteConfigs = await remoteConfig().getAll();
        setRemoteConfigs(allConfigs);
        llog('👾 allConfigs 👾', allConfigs);

        // App Version State 설정
        let cpVer;
        if (isAndroid) {
          cpVer = allConfigs.android_code_push_version.asString();
        } else {
          cpVer = allConfigs.ios_code_push_version.asString();
        }
        const cpVerNums = [
          parseInt(cpVer[1]),
          parseInt(cpVer[3]),
          parseInt(cpVer[5]),
        ];
        setCpVerNums(cpVerNums);
        const state = getAppVersionState(verNums, cpVerNums);
        setVersionState(state);
      } else {
        llog('Defaults set, however activation failed.');
        setVersionState(APP_VERSION_STATE.NOT_NECESSARY);
      }
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

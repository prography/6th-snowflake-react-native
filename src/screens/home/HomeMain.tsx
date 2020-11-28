import * as React from 'react';
import { useEffect } from 'react';
import { Alert, Linking } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import analytics from "@react-native-firebase/analytics";
import { StackNavigationProp } from '@react-navigation/stack';

import Content from '../../containers/home/main/Content';
import TopBarLeftIcon from '~/components/universal/topBar/TopBarLeftIcon';
import NavBar from '~/screens/NavBar';
import MarginBottom from '~/components/universal/margin/MarginBottom';
import { setUserGender, setUserPartnerGender } from '~/store/modules/join/userInfo';
import { getUserInfoAC } from '~/store/modules/join/userInfo';
import { RootState } from '~/store/modules';
import { HomeStackParamList } from '~/navigation/tabs/HomeStack';
import { useRemoteConfigs, APP_VERSION_STATE, useAppVersionState } from '~/context/CommonContext';
import { isAndroid } from '~/utils/constant';
import { getRCValue, RemoteKey } from '~/utils/firebase/remoteConfig';
import { eventUtil } from '~/utils/firebase/event';

interface Props {
  navigation: StackNavigationProp<HomeStackParamList, 'HomeMain'>;
}

const HomeMain = ({ navigation }: Props) => {
  // hook
  const { remoteConfigs } = useRemoteConfigs();
  const { versionState } = useAppVersionState();

  // redux
  const dispatch = useDispatch();
  const { loading, data: userInfo, error } = useSelector((state: RootState) => state.join.userInfo.userInfo);

  const checkIsNeedForceUpdate = () => {
    // 참고) NEED_FORCE_UPDATE_BY_CODE_PUSH 까지는 안만들었음. 필요할 때 만들기.
    const updateLink = getRCValue(
      remoteConfigs,
      isAndroid ? RemoteKey.android_update_link : RemoteKey.ios_update_link,
    );
    if (versionState === APP_VERSION_STATE.NEED_FORCE_UPDATE) {
      Alert.alert(
        '❄',
        '업데이트가 필요해요 :)',
        [
          { text: '업데이트', onPress: () => Linking.openURL(updateLink) },
        ],
      );
    } else if (versionState === APP_VERSION_STATE.NEED_SOFT_UPDATE) {
      Alert.alert(
        '❄',
        '업데이트가 필요해요 :)',
        [
          { text: '취소', style: 'cancel' },
          { text: '업데이트', onPress: () => Linking.openURL(updateLink) },
        ],
      );
    }
  };

  useEffect(() => {
    if (versionState !== APP_VERSION_STATE.NOT_SET_YET && remoteConfigs) {
      checkIsNeedForceUpdate();
    }
  }, [versionState, remoteConfigs]);

  useEffect(() => {
    if (userInfo) {
      dispatch(setUserGender(userInfo.gender))
      dispatch(setUserPartnerGender(userInfo.partner_gender))
    }
  }, [userInfo]);

  useEffect(() => {
    eventUtil.logScreenView(eventUtil.HomeMain);
    dispatch(getUserInfoAC.request())
  }, []);

  return (
    <NavBar selectedStack={'HomeStack'} navigateToStack={(stackName: string) => navigation.navigate(stackName)}>
      <>
        <TopBarLeftIcon />
        {/* <MenuBar/> */}
        <Content />
        <MarginBottom />
      </>
    </NavBar>
  );
};

export default HomeMain;

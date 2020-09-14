import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import analytics from "@react-native-firebase/analytics";

import Content from '../../containers/home/main/Content';
import TopBarLeftIcon from '~/components/universal/topBar/TopBarLeftIcon';
import NavBar from '~/screens/NavBar';
import MarginBottom from '~/components/universal/margin/MarginBottom';
import { setMyGender, setPartnerGender } from '~/store/modules/product/reviewUpload';
import { getUserInfoRequest } from '~/store/modules/join/userInfo';
import { RootState } from '~/store/modules';

const HomeMain = () => {
  // redux
  const dispatch = useDispatch();
  const { loading, data: userInfo, error } = useSelector((state: RootState) => state.join.userInfo.userInfo);

  React.useEffect(() => {
    analytics().setCurrentScreen("HomeMain");
  }, []);

  useEffect(() => {
    dispatch(getUserInfoRequest())
  }, []);

  useEffect(() => {
    if (userInfo) {
      dispatch(setMyGender(userInfo.gender))
      dispatch(setPartnerGender(userInfo.partner_gender))
    }
  }, [userInfo])

  return (
    <NavBar selectedStack={'HomeStack'}>
      <TopBarLeftIcon />
      {/* <MenuBar/> */}
      <Content />
      <MarginBottom />
    </NavBar>
  );
};

export default HomeMain;

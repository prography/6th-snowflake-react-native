import * as React from 'react';
import { useState, useEffect } from 'react';
import Content from '../../containers/home/main/Content';
import TopBarLeftIcon from '~/components/universal/topBar/TopBarLeftIcon';
import NavBar from '~/screens/NavBar';
import MarginBottom from '~/components/universal/margin/MarginBottom';
import analytics from "@react-native-firebase/analytics";
import { AsyncAccessToken } from '~/utils/asyncStorage';
import { useAsyncStorage } from '@react-native-community/async-storage';
import { BASE_URL } from '~/utils/constant';
import { llog2 } from '~/utils/functions';
import { useDispatch } from 'react-redux';
import { setMyGender, setPartnerGender } from '~/store/modules/product/reviewUpload';

const HomeMain = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    analytics().setCurrentScreen("HomeMain");
  }, []);

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


  useEffect(() => {
    if (userInfoArray) {
      dispatch(setMyGender(userInfoArray.gender))
      dispatch(setPartnerGender(userInfoArray.partner_gender))
    }
  }, [userInfoArray])



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

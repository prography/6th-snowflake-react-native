import * as React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components/native';
import { ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';

import NavBar from '~/screens/NavBar';
import TextTitleDarkPurpleLink from '~/components/universal/text/TextTitleDarkPurpleLink';
import { c, d, l } from '~/utils/constant';
import MyProfile from '~/containers/setting/MyProfile';
import MarginWide from '~/components/universal/margin/MarginWide';
import Likes from '~/containers/setting/Likes';
import Blinder from '~/components/product/Blinder';
import TopBarLeftIcon from '~/components/universal/topBar/TopBarLeftIcon';
import MyGenderColor from '~/containers/setting/MyGenderColor';
import LineGrayRightLong from '~/components/universal/line/LineGrayRightLong';
import MarginMedium from '~/components/universal/margin/MarginMedium';
import { llog } from '~/utils/functions';
import { JoinStackParamList } from '~/navigation/tabs/JoinStack';
import { RootState } from '~/store/modules';
import { eventUtil } from '~/utils/firebase/event';

interface Props {
  navigation: StackNavigationProp<JoinStackParamList, 'SettimgMain'>;
}

const Container = styled.View``;

const LoginContainer = styled.View`
  margin-left: ${l.mL}px;
  margin-right: ${l.mR}px;
`;

const SettingMain = ({ navigation }: Props) => {
  const _isLoggedin = useSelector((state: RootState) => state.join.auth.isLoggedin);
  llog('로그인됨?', _isLoggedin);

  useEffect(() => {
    eventUtil.logScreenView("SettingMain");
  }, []);

  return (
    <NavBar selectedStack={'JoinStack'} navigateToStack={(stackName: string) => navigation.navigate(stackName)}>
      <>
        <ScrollView>
          <Container>
            <TopBarLeftIcon />

            {_isLoggedin ? (
              <>
                <MyProfile />
                <MarginWide />
                <Likes
                  navigateToProductInfo={(productId: number) => navigation.navigate('ProductInfo', { productId })}
                />
              </>
            ) : (
                <>
                  <LoginContainer>
                    <MarginMedium />
                    <TextTitleDarkPurpleLink
                      title={'로그인'}
                      buttonText={'LOGIN'}
                      stack={'JoinStack'}
                      screen={'Login'}
                    />
                    <TextTitleDarkPurpleLink
                      title={'회원가입'}
                      buttonText={'JOIN'}
                      stack={'JoinStack'}
                      screen={'JoinScreen'}
                    />
                  </LoginContainer>
                </>
              )}
            <MarginWide />
            <LineGrayRightLong />
            <MarginWide />
            <MyGenderColor />
            <MarginWide />
            <LineGrayRightLong />
            <MarginWide />
            <LoginContainer>
              <TextTitleDarkPurpleLink
                title={'피드백을 부탁드립니다'}
                buttonText={'Thank You!'}
                stack={'FeedbackStack'}
                screen={'Feedback'}
              />
            </LoginContainer>
          </Container>
        </ScrollView>
        <Blinder />
      </>
    </NavBar>
  );
};

export default SettingMain;

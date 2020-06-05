import * as React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { d, c, l } from '~/utils/constant';
import {
  State,
  setUserEmail,
  setUserPassword1,
  setUserPassword2,
  setUserName,
  setUserBirthYear,
  setUserGender,
  setUserPartnerGender,
} from '~/modules/join/userInfoReducer';
import BottomBtnCollectData from '~/components/universal/bottomBar/BottomBtnCollectData';
import MarginWide from '~/components/universal/margin/MarginWide';
import TopBarLeftIcon from '~/components/universal/topBar/TopBarLeftIcon';
import TopBarWithIcon from '~/components/universal/topBar/TopBarRightIcon';
import TopBarBackArrow from '~/components/universal/topBar/TopBarBackArrow';
import TopBarBackArrowRightIcon from '~/components/universal/topBar/TopBarBackArrowRightIcon';
import GenderCircle from '~/components/universal/profile/GenderCircle';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Container = styled.View`
  margin: 0 ${l.mR}px;
`;
const OneLineWrapper = styled.View`
  flex-direction: row;
`;
const GuideText = styled.Text``;

const Join3 = ({ navigation, route }) => {
  const {signUpEmail, signUpPassword, signUpName, signUpYear} = route.params;
  console.log('🍊', route.params)
  const [isFilled, setIsFilled] = useState(false);

  const dispatch = useDispatch();
  const _userName = useSelector(
    (state: State) => state.userInfoReducer.userName
  );
  const _userGender = useSelector(
    (state: State) => state.userInfoReducer.userGender
  );
  const _setUserGender = (userGender: State) => {
    dispatch(setUserGender(userGender));
  };
  const _userPartnerGender = useSelector(
    (state: State) => state.userInfoReducer.userPartnerGender
  );
  const _setUserPartnerGender = (userPartnerGender: State) => {
    dispatch(setUserPartnerGender(userPartnerGender));
  };
  useEffect(() => {
    setIsFilled(_userGender && _userPartnerGender ? true : false);
  }, [_userGender, _userPartnerGender]);

  const setGender = (selectedGender) => {
    _userGender === null
      ? _setUserGender(selectedGender)
      : _userPartnerGender === null
      ? _setUserPartnerGender(selectedGender)
      : [_setUserPartnerGender(null), _setUserGender(selectedGender)];
  };

  // const [genderInput, setGenderInput] = useState('');
  // const [genderPartnerInput, setGenderPartnerInput] = useState('');

  

  return (
    <>
      <BottomBtnCollectData
        btnText={'다음'}
        stack={'JoinStack'}
        screen={'Join4'}
        isFilled={isFilled}
        params={{signUpEmail: signUpEmail, signUpPassword: signUpPassword, signUpName: signUpName, signUpYear: signUpYear, signUpGender: _userGender, signUpPartnerGender: _userPartnerGender}}
      >
        <TopBarBackArrowRightIcon />
        <Container>
          <OneLineWrapper>
            <GuideText>{signUpName}님은</GuideText>
          </OneLineWrapper>
          <OneLineWrapper>
            <GuideText>스스로를 </GuideText>
            <GenderCircle size={36} who={true} gender={_userGender} />
            <GuideText>으로 여기며</GuideText>
          </OneLineWrapper>
          <OneLineWrapper>
            <GuideText>파트너는 대체로 </GuideText>
            <GenderCircle size={36} who={false} gender={_userPartnerGender} />
            <GuideText>이에요.</GuideText>
          </OneLineWrapper>
          <>
            <TouchableOpacity
              style={{
                height: 50,
                width: 50,
                backgroundColor: 'blue',
                marginBottom: 10,
              }}
              onPress={() => {
                setGender('WOMAN');
              }}
            />
            <TouchableOpacity
              style={{
                height: 50,
                width: 50,
                backgroundColor: 'blue',
                marginBottom: 10,
              }}
              onPress={() => {
                setGender('MAN');
              }}
            />
            <TouchableOpacity
              style={{
                height: 50,
                width: 50,
                backgroundColor: 'blue',
                marginBottom: 10,
              }}
              onPress={() => {
                setGender('BOTH');
              }}
            />
            <TouchableOpacity
              style={{
                height: 50,
                width: 50,
                backgroundColor: 'blue',
                marginBottom: 10,
              }}
              onPress={() => {
                setGender('NONE');
              }}
            />
          </>
          <Text>수집된 유저 젠더:</Text>
          <Text>{_userGender}</Text>
          <Text>수집된 유저 파트너 젠더:</Text>
          <Text>{_userPartnerGender}</Text>
        </Container>
      </BottomBtnCollectData>
    </>
  );
};

export default Join3;

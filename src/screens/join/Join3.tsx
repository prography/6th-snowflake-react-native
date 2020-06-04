import * as React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestLogin } from '~/modules/auth';
import { d, c, l, BASE_URL } from '~/utils/constant';
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

const Join3 = ({navigation, route}) => {
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

  const _login = (email: string, password: string) => {
    console.log('😸5. 회원가입 성공 후 로그인 액션 호출');
    dispatch(requestLogin(email, password));
  };

  const _signup = async () => {
    
    console.log('😸1. _signup 호출됨')
    const email = signUpEmail;
    const password = signUpPassword;
    const username = signUpName;
    const birth_year = signUpYear;
    const gender = _userGender
    console.log(typeof gender);
    const partner_gender = _userPartnerGender;
      
    // 아래 두 줄은 로그인만 테스트해보고 싶을 때
    // _login(email, password)
    // return

    try {
      console.log('😸2. /accounts 회원가입 api 호출');
      const response = await fetch(`${BASE_URL}/accounts/`, {
        // 뒤에 슬래시 꼭 붙여야함
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          username,
          birth_year,
          // gender,
          // partner_gender
        }),
      });

      const json = await response.json();
      console.log('😸3. /accounts 회원가입 api 응답 확인');
      switch (response.status) {
        case 201:
          console.log('😸4. /accounts 회원가입 성공!!', response.status, json);
          // 회원가입 성공하면 바로 로그인 ㄱㄱ
          _login(email, password);
          break;
        case 400:
          console.log('😸4. /accounts 회원가입 실패.. ', response.status, json);
          break;
        default:
          console.log('😸4. /accounts 회원가입 실패.. ', response.status, json);
          break;
      }
    } catch (error) {
      console.log('😸. /accounts 회원가입 오류 catch.. ', error);
    }

  };

  return (
    <>
      <BottomBtnCollectData
        btnText={'다음'}
        stack={'JoinStack'}
        screen={'Join4'}
        isFilled={isFilled}
        onPressFunction={_signup}
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
                setGender('female');
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
                setGender('male');
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
                setGender('both');
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
                setGender('none');
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

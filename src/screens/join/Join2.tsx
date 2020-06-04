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
const Container = styled.View`
  margin: 0 ${l.mR}px;
`;
const OneLineWrapper = styled.View``;
const GuideText = styled.Text``;
const UserNameInput = styled.TextInput``;
const YearInputContainer = styled.TextInput``;
const Join2 = ({ navigation, route }) => {
  const { email, password } = route.params;
  console.log('🥇', route.params)
  const [isFilled, setIsFilled] = useState(false);

  const dispatch = useDispatch();
  const _userEmail = useSelector(
    (state: State) => state.userInfoReducer.userEmail
  );

  const _userName = useSelector(
    (state: State) => state.userInfoReducer.userName
  );
  const _setUserName = (userName: State) => {
    dispatch(setUserName(userName));
  };
  const _userBirthYear = useSelector(
    (state: State) => state.userInfoReducer.userBirthYear
  );
  const _setUserBirthYear = (userBirthYear: State) => {
    dispatch(setUserBirthYear(userBirthYear));
  };
  const _userGender = useSelector(
    (state: State) => state.userInfoReducer.userGender
  );
  const _setUserGender = (userGender: State) => {
    dispatch(setUserGender(userGender));
  };
  const _userPartnerGender = useSelector(
    (state: State) => state.userInfoReducer.userGender
  );
  const _setUserPartnerGender = (userPartnerGender: State) => {
    dispatch(setUserPartnerGender(userPartnerGender));
  };

  const [nameInput, setNameInput] = useState('');
  const [yearInput, setYearInput] = useState('');


  useEffect(() => {
    setIsFilled(nameInput && yearInput ? true : false);
  }, [nameInput, yearInput]);
  return (
    <>
      <BottomBtnCollectData
        btnText={'다음'}
        stack={'JoinStack'}
        screen={'Join3'}
        isFilled={isFilled}
        params={{email: email, password: password, name: nameInput, year: yearInput}}
      >
        <TopBarBackArrowRightIcon />
        <Container>
          <OneLineWrapper>
            <GuideText>닉네임은</GuideText>
            <UserNameInput
              placeholder={'2~10자'}
              onChangeText={setNameInput}
              value={nameInput}
            >
            </UserNameInput>
          </OneLineWrapper>
          <OneLineWrapper>
            <YearInputContainer
              placeholder={'year picker로 변경 예정'}
              keyboardType={'number-pad'}
              returnKeyType={'done'}
              onChangeText={setYearInput}
              value={yearInput}
            >
            </YearInputContainer>
            <GuideText>년생이에요.</GuideText>
          </OneLineWrapper>
          <Text>수집된 닉네임:</Text>
          <Text>{nameInput}</Text>
          <Text>수집된 태어난 연도:</Text>
          <Text>{yearInput}</Text>
        </Container>
      </BottomBtnCollectData>
    </>
  );
};

export default Join2;

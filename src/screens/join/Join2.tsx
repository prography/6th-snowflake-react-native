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
const GuideContainer = styled.View`
  flex-direction: row;
  margin-top: ${d.px * 26.6}px;
`;
const GuideText = styled.Text`
  font-family: 'Jost-Semi';
  font-size: ${d.px * 23}px;
  color: ${c.darkGray};
`;
const UserNameInput = styled.TextInput`
  height: ${d.px * 28}px;
  border-color: ${c.extraLightGray};
  border-bottom-width: ${d.px * 2}px;
  font-size: ${d.px * 23}px;
  font-family: 'Jost-Light';
`;
const YearInputContainer = styled.TextInput``;
const Join2 = ({ navigation, route }) => {
  const { signUpEmail, signUpPassword } = route.params;
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


  const [isNameFocused, setNameFocused] = useState(false);
  const handleNameFocus = () => {setNameFocused(true)};
  const handleNameBlur = () => {setNameFocused(false)};
  const nameLabelStyle = {
    color: !isNameFocused ? c.darkGray : c.black,
    borderColor: !isNameFocused ? c.lightGray : c.purple
  };

  return (
    <>
      <BottomBtnCollectData
        btnText={'다음'}
        stack={'JoinStack'}
        screen={'Join3'}
        isFilled={isFilled}
        params={{signUpEmail: signUpEmail, signUpPassword: signUpPassword, signUpName: nameInput, signUpYear: yearInput}}
      >
        <TopBarBackArrowRightIcon />
        <Container>
          <OneLineWrapper>
            <GuideContainer>
              <GuideText>닉네임은 </GuideText>
              <UserNameInput
                style={nameLabelStyle}
                placeholder={'2~10자'}
                onChangeText={setNameInput}
                value={nameInput}
                onFocus={handleNameFocus}
                onBlur={handleNameBlur}
                blurOnSubmit
              />
            </GuideContainer>
          </OneLineWrapper>
          <OneLineWrapper>
            <GuideContainer>
              <YearInputContainer
                placeholder={'year picker로 변경 예정'}
                keyboardType={'number-pad'}
                returnKeyType={'done'}
                onChangeText={setYearInput}
                value={yearInput}
              >
              </YearInputContainer>
              <GuideText>년생이에요.</GuideText>
            </GuideContainer>
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

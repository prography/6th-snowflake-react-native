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
import {Picker} from '@react-native-community/picker';

const Container = styled.View`
  margin: 0 ${l.mR}px;
`;
const OneLineWrapper = styled.View``;
const GuideContainer = styled.View`
  flex-direction: row;
  margin-top: ${d.px * 26.6}px;
`;
const GuideText = styled.Text`
  margin-left: ${d.px * 20}px;
  font-family: 'Jost-Semi';
  font-size: ${d.px * 23}px;
  color: ${c.darkGray};
`;

const YearText = styled.Text`
  font-family: 'Jost-Semi';
  font-size: ${d.px * 23}px;
  color: ${c.darkGray};
  margin-top: ${d.px * 84}px;
`;

const UserNameInput = styled.TextInput`
  height: ${d.px * 28}px;
  border-color: ${c.extraLightGray};
  border-bottom-width: ${d.px * 2}px;
  font-size: ${d.px * 23}px;
  font-family: 'Jost-Light';
`;

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
  // const [yearInput, setYearInput] = useState('');


  // useEffect(() => {
  //   setIsFilled(nameInput && yearInput ? true : false);
  // }, [nameInput, yearInput]);

  useEffect(() => {
    setIsFilled(nameInput ? true : false);
  }, [nameInput]);

  const [isNameFocused, setNameFocused] = useState(false);
  const handleNameFocus = () => {setNameFocused(true)};
  const handleNameBlur = () => {setNameFocused(false)};
  const nameLabelStyle = {
    color: !isNameFocused ? c.darkGray : c.black,
    borderColor: !isNameFocused ? c.lightGray : c.purple
  };


  const yearLabelStyle = {
    height: d.px*50,
    width: d.px*100
  }

  const [year, setYear] = useState("1997");

  return (
    <>
      <BottomBtnCollectData
        btnText={'다음'}
        stack={'JoinStack'}
        screen={'Join3'}
        isFilled={isFilled}
        params={{signUpEmail: signUpEmail, signUpPassword: signUpPassword, signUpName: nameInput, signUpYear: year}}
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
              <Picker
                  selectedValue={year}
                  style={yearLabelStyle}
                  onValueChange={(itemValue, itemIndex) => setYear(itemValue)}>
                  <Picker.Item label="1973" value="1973" />
                  <Picker.Item label="1974" value="1974" />
                  <Picker.Item label="1975" value="1975" />
                  <Picker.Item label="1976" value="1976" />
                  <Picker.Item label="1977" value="1977" />
                  <Picker.Item label="1978" value="1978" />
                  <Picker.Item label="1979" value="1979" />
                  <Picker.Item label="1980" value="1980" />
                  <Picker.Item label="1981" value="1981" />
                  <Picker.Item label="1982" value="1982" />
                  <Picker.Item label="1983" value="1983" />
                  <Picker.Item label="1984" value="1984" />
                  <Picker.Item label="1985" value="1985" />
                  <Picker.Item label="1986" value="1986" />
                  <Picker.Item label="1987" value="1987" />
                  <Picker.Item label="1988" value="1988" />
                  <Picker.Item label="1989" value="1989" />
                  <Picker.Item label="1990" value="1990" />
                  <Picker.Item label="1991" value="1991" />
                  <Picker.Item label="1992" value="1992" />
                  <Picker.Item label="1993" value="1993" />
                  <Picker.Item label="1994" value="1994" />
                  <Picker.Item label="1995" value="1995" />
                  <Picker.Item label="1996" value="1996" />
                  <Picker.Item label="1997" value="1997" />
                  <Picker.Item label="1998" value="1998" />
                  <Picker.Item label="1999" value="1999" />
                  <Picker.Item label="2000" value="2000" />
                  <Picker.Item label="2001" value="2001" />
                  <Picker.Item label="2002" value="2002" />
              </Picker> 
              <YearText>년생이에요.</YearText>
            </GuideContainer>
          </OneLineWrapper>
          {/* <Text>수집된 닉네임:</Text>
          <Text>{nameInput}</Text>
          <Text>수집된 태어난 연도:</Text>
          <Text>{yearInput}</Text> */}
        </Container>
      </BottomBtnCollectData>
    </>
  );
};

export default Join2;

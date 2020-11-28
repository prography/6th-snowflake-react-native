import * as React from 'react';
import styled from 'styled-components/native';
import { useState, useEffect } from 'react';
import { Picker } from '@react-native-community/picker';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import { d, c, l } from '~/utils/constant';
import BottomBtnCollectData from '~/components/universal/bottomBar/BottomBtnCollectData';
import TopBarBackArrowRightIcon from '~/components/universal/topBar/TopBarBackArrowRightIcon';
import { JoinStackParamList } from '~/navigation/tabs/JoinStack';
import { fetchAPI } from '~/api';
import { llog, getAvailableYears } from '~/utils/functions';
import { MsgRes } from '~/api/interface';
import { eventUtil } from '~/utils/firebase/event';

const Container = styled.View`
  margin: 0 ${l.mR}px;
`;
const OneLineWrapper = styled.View``;
const GuideContainer = styled.View`
  flex-direction: row;
  margin-top: ${d.px * 26.6}px;
`;
const GuideText = styled.Text`
  font-family: 'Jost-Bold';
  font-size: ${d.px * 23}px;
  color: ${c.darkGray};
  margin-right: ${d.px * 5}px;
  line-height: ${d.px * 32}px;
`;

const CommaText = styled.Text`
  font-family: 'Jost-Bold';
  font-size: ${d.px * 23}px;
  color: ${c.darkGray};
  margin-left: ${d.px * 5}px;
`;

const YearText = styled.Text`
  font-family: 'Jost-Semi';
  font-size: ${d.px * 23}px;
  color: ${c.darkGray};
  margin-top: ${d.px * 84}px;
`;

const UserNameInput = styled.TextInput`
  /* height: ${d.px * 32}px; */
  border-color: ${c.extraLightGray};
  border-bottom-width: ${d.px * 1}px;
  font-size: ${d.px * 17}px;
  font-family: 'Jost-Bold';
  color: ${c.darkGray};
  /* padding: 0 ${d.px * 2}px; */
`;
const WarningText = styled.Text`
  color: ${c.purple};
  font-family: Jost-Bold;
  font-size: ${d.px * 13}px;
  line-height: ${d.px * 20}px;
  margin-top: ${d.px * 20}px;
  height: ${d.px * 20}px;
`;

const LeftMargin = styled.View`
  margin-left: ${l.mR}px;
`;

interface Props {
  navigation: StackNavigationProp<JoinStackParamList, 'Join3'>;
  route: RouteProp<JoinStackParamList, 'Join2'>;
}
const Join2 = ({ navigation, route }: Props) => {
  const { signUpEmail, signUpPassword, socialJoin, _token } = route.params;
  llog('🥇', route.params);

  const [isFilled, setIsFilled] = useState<boolean>(false);
  const [nameInput, setNameInput] = useState<string>('');
  const [nameWarningText, setNameWarningText] = useState<string>(null);
  const [year, setYear] = useState<number>(1995);
  const [isNameFocused, setNameFocused] = useState<boolean>(false);

  useEffect(() => {
    setIsFilled(nameInput ? true : false);
  }, [nameInput]);

  useEffect(() => {
    _checkNameDuplicate();
  }, [nameInput]);

  const _checkNameDuplicate = async () => {
    try {
      const { response, status } = await fetchAPI(
        `accounts/check-duplicates/username?value=${nameInput}`
      );
      const json: MsgRes = await response.json();
      llog('⛄️닉네임 중복 체크', response, json);
      if (status === 200) {
        setNameWarningText('');
      } else {
        setNameWarningText('중복된 닉네임이에요!');
      }
    } catch (error) {
      llog('⛄️닉네임 중복 체크 실패', error);
    }
  };

  const handleNameFocus = () => {
    setNameFocused(true);
  };
  const handleNameBlur = () => {
    setNameFocused(false);
  };
  const nameLabelStyle = {
    color: !isNameFocused ? c.darkGray : c.black,
    borderColor: !isNameFocused ? c.lightGray : c.purple,
  };

  const yearLabelStyle = {
    height: d.px * 50,
    width: d.px * 100,
  };

  useEffect(() => {
    eventUtil.logScreenView(eventUtil.Join2_Nickname_Birthyear);
  }, []);

  return (
    <>
      <BottomBtnCollectData
        btnText={'다음'}
        stack={'JoinStack'}
        screen={'Join3'}
        isFilled={isFilled}
        params={
          socialJoin
            ? {
              signUpName: nameInput,
              signUpYear: year,
              socialJoin: socialJoin,
              _token: _token,
            }
            : {
              signUpEmail: signUpEmail,
              signUpPassword: signUpPassword,
              signUpName: nameInput,
              signUpYear: year,
              socialJoin: socialJoin,
            }
        }
      >
        <LeftMargin>
          <TopBarBackArrowRightIcon />
        </LeftMargin>
        <Container>
          <OneLineWrapper>
            <GuideContainer>
              <GuideText>닉네임은 </GuideText>
              <UserNameInput
                style={nameLabelStyle}
                placeholder={'2~10자'}
                onChangeText={setNameInput}
                value={nameInput}
                autoCapitalize={false}
                onFocus={handleNameFocus}
                onBlur={handleNameBlur}
                blurOnSubmit
              />
              <CommaText>,</CommaText>
            </GuideContainer>
            <WarningText>{nameWarningText}</WarningText>
          </OneLineWrapper>
          <OneLineWrapper>
            <GuideContainer>
              <Picker
                selectedValue={year}
                style={yearLabelStyle}
                onValueChange={(itemValue: number) => setYear(itemValue)}>
                {getAvailableYears().map((y: number) => <Picker.Item label={`${y}`} value={y} />)}
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

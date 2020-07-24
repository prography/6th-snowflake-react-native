import * as React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import analytics from "@react-native-firebase/analytics";
import { TouchableOpacity } from 'react-native-gesture-handler';

import { d, c, l } from '~/utils/constant';
import {
  setUserGender,
  setUserPartnerGender,
} from '~/modules/join/userInfoReducer';
import BottomBtnCollectData from '~/components/universal/bottomBar/BottomBtnCollectData';
import MarginWide from '~/components/universal/margin/MarginWide';
import TopBarBackArrowRightIcon from '~/components/universal/topBar/TopBarBackArrowRightIcon';
import GenderCircle from '~/components/universal/profile/GenderCircle';
import MarginMedium from '~/components/universal/margin/MarginMedium';
const Container = styled.View`
  margin: 0 ${l.mR}px;
`;
const OneLineWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const GuideText = styled.Text`
  font-family: 'Jost-Bold';
  font-size: ${d.px * 23}px;
  line-height: ${d.px * 36}px;
  color: ${c.darkGray};
`;

const GenderText = styled.Text`
  margin-top: ${d.px * 10}px;
  font-family: 'Jost-Semi';
  font-size: ${d.px * 15}px;
  color: ${c.darkGray};
`;

const CircleContainer = styled.View`
  flex-direction: row;
  margin-top: ${d.px * 26.6}px;
  justify-content: center;
`;

const CircleTextContatiner = styled.View``;
interface Props {
  navigation: StackNavigationProp<JoinStackParamList, 'Join4'>;
  route: RouteProp<JoinStackParamList, 'Join3'>;
}
const Join3 = ({ navigation, route }: Props) => {
  const {
    signUpEmail,
    signUpPassword,
    signUpName,
    signUpYear,
    socialJoin,
    _token,
  } = route.params;
  console.log('🍊', route.params);
  const [isFilled, setIsFilled] = useState(false);

  const dispatch = useDispatch();

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
  interface State {
    womanColor: string;
    manColor: string;
    genderColorReducer: string;
  }

  const womanColor = useSelector(
    (state: State) => state.genderColorReducer.womanColor
  );
  const manColor = useSelector(
    (state: State) => state.genderColorReducer.manColor
  );

  const [bothColor, setBothColor] = useState(c.purple);
  const [noneColor, setNoneColor] = useState(c.black);

  React.useEffect(() => {
    analytics().setCurrentScreen("Join3_UerGender");
  }, []);

  return (
    <>
      <BottomBtnCollectData
        btnText={'다음'}
        stack={'JoinStack'}
        screen={'Join4'}
        isFilled={isFilled}
        params={
          socialJoin
            ? {
                signUpName: signUpName,
                signUpYear: signUpYear,
                signUpGender: _userGender,
                signUpPartnerGender: _userPartnerGender,
                socialJoin: socialJoin,
                _token: _token,
              }
            : {
                signUpEmail: signUpEmail,
                signUpPassword: signUpPassword,
                signUpName: signUpName,
                signUpYear: signUpYear,
                signUpGender: _userGender,
                signUpPartnerGender: _userPartnerGender,
                socialJoin: socialJoin,
              }
        }
      >
        <TopBarBackArrowRightIcon />
        <Container>
          <OneLineWrapper>
            <GuideText>{signUpName}님은</GuideText>
          </OneLineWrapper>
          <MarginWide />
          <OneLineWrapper>
            <GuideText>스스로를 </GuideText>
            <GenderCircle size={36} who={true} gender={_userGender} />
            <GuideText>으로 여기며</GuideText>
          </OneLineWrapper>
          <MarginWide />
          <OneLineWrapper>
            <GuideText>파트너는 대체로 </GuideText>
            <GenderCircle size={36} who={false} gender={_userPartnerGender} />
            <GuideText>이에요.</GuideText>
          </OneLineWrapper>
          <MarginWide />
          <MarginMedium />
          <CircleContainer>
            <CircleTextContatiner>
              <TouchableOpacity
                onPress={() => {
                  setGender('WOMAN');
                }}
              >
                <View
                  style={{
                    width: d.height / 20,
                    height: d.height / 20,
                    marginLeft: d.px * 10,
                    marginRight: d.px * 40,
                    borderRadius: 100,
                    backgroundColor: womanColor === null ? 'white' : womanColor,
                    borderColor: womanColor === null ? c.lightGray : womanColor,
                    borderStyle: womanColor === null ? 'dashed' : 'solid',
                    borderWidth: d.px * 1,
                  }}
                />
              </TouchableOpacity>
              <GenderText style={{ marginLeft: d.px * 17.8 }}>여성</GenderText>
            </CircleTextContatiner>
            <CircleTextContatiner>
              <TouchableOpacity
                onPress={() => {
                  setGender('MAN');
                }}
              >
                <View
                  style={{
                    width: d.height / 20,
                    height: d.height / 20,
                    marginLeft: d.px * 40,
                    marginRight: d.px * 5,
                    borderRadius: 100,
                    backgroundColor: manColor === null ? 'white' : manColor,
                    borderColor: manColor === null ? c.lightGray : manColor,
                    borderStyle: manColor === null ? 'dashed' : 'solid',
                    borderWidth: d.px * 1,
                  }}
                />
              </TouchableOpacity>
              <GenderText style={{ marginLeft: d.px * 47 }}>남성</GenderText>
            </CircleTextContatiner>
          </CircleContainer>
          <MarginWide />
          <MarginMedium />
          <CircleContainer>
            <CircleTextContatiner>
              <TouchableOpacity
                onPress={() => {
                  setGender('BOTH');
                }}
              >
                <View
                  style={{
                    width: d.height / 20,
                    height: d.height / 20,
                    marginLeft: d.px * 10,
                    marginRight: d.px * 40,
                    borderRadius: 100,
                    backgroundColor: bothColor === null ? 'white' : bothColor,
                    borderColor: bothColor === null ? c.lightGray : bothColor,
                    borderStyle: bothColor === null ? 'dashed' : 'solid',
                    borderWidth: d.px * 1,
                  }}
                />
              </TouchableOpacity>
              <GenderText style={{ marginLeft: d.px * 10 }}>모든 성</GenderText>
            </CircleTextContatiner>
            <CircleTextContatiner>
              <TouchableOpacity
                onPress={() => {
                  setGender('NONE');
                }}
              >
                <View
                  style={{
                    width: d.height / 20,
                    height: d.height / 20,
                    marginLeft: d.px * 40,
                    marginRight: d.px * 5,
                    borderRadius: 100,
                    backgroundColor: noneColor === null ? 'white' : noneColor,
                    borderColor: noneColor === null ? c.lightGray : noneColor,
                    borderStyle: bothColor === null ? 'dashed' : 'solid',
                    borderWidth: d.px * 1,
                  }}
                />
              </TouchableOpacity>
              <GenderText style={{ marginLeft: d.px * 40 }}>비공개</GenderText>
            </CircleTextContatiner>
          </CircleContainer>
          {/* <Text>수집된 유저 젠더:</Text>
          <Text>{_userGender}</Text>
          <Text>수집된 유저 파트너 젠더:</Text>
          <Text>{_userPartnerGender}</Text> */}
        </Container>
      </BottomBtnCollectData>
    </>
  );
};

export default Join3;

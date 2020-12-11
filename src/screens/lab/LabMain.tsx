import * as React from 'react';
import { useState, useEffect } from "react";
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { StackNavigationProp } from '@react-navigation/stack';

import NavBar from '~/screens/NavBar';
import TopBarLeftIcon from '~/components/universal/topBar/TopBarLeftIcon';
import CardPurpleRight from '~/components/universal/card/CardPurpleRight';
import LabNewCardsContainer from '~/containers/lab/main/LabNewCardsContainer';
import LabIntroducecardsContainer from '~/containers/lab/main/LabIntroduceCardsContainer';
import Blinder from '~/components/product/Blinder';
import MarginBottom from '~/components/universal/margin/MarginBottom';
import { LabStackParamList } from '~/navigation/tabs/LabStack';
import { eventUtil } from '~/utils/firebase/event';
import { useSelector } from 'react-redux';
import { RootState } from '~/store/modules';
import { toast } from '~/utils/toast';
import { alertUtil } from '~/utils/alert';

interface Props {
  navigation: StackNavigationProp<LabStackParamList, 'LabMain'>;
}

const Container = styled.View`
  align-items: flex-start; 
  ${props => props.theme.screenContainer}
`;

const TempButton = styled.TouchableOpacity`

`;

const TempText = styled.Text`

`;

const LabMain = ({ navigation }: Props) => {
  // redux
  const isLoggedin = useSelector((state: RootState) => state.join.auth.isLoggedin);
  // state
  const [newSutraId, setNewSutraId] = useState<number>(null);

  const navigateSutraInfo = () => {
    if (isLoggedin) {
      navigation.navigate('SutraInfo', { newSutraId });
    } else {
      alertUtil.needLogin(() => navigation.navigate('JoinStack'), '로그인');
    }
  }
  const navigateSutraList = () => {
    if (isLoggedin) {
      navigation.navigate('SutraList');
    } else {
      alertUtil.needLogin(() => navigation.navigate('JoinStack'), '로그인');
    }
  }

  useEffect(() => {
    eventUtil.logScreenView(eventUtil.LabMain);
    // navigation.navigate('SutraList'); // for test
  }, []);

  return (
    <>
      <NavBar selectedStack={'LabStack'} navigateToStack={(stackName: string) => navigation.navigate(stackName)}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TopBarLeftIcon />

          <Container>
            <LabNewCardsContainer setNewSutraId={setNewSutraId} onPress={navigateSutraInfo} />
            <LabIntroducecardsContainer onPress={navigateSutraList} />
            <MarginBottom />
          </Container>
        </ScrollView>
      </NavBar >
      <Blinder />
    </>
  );
};

export default LabMain;

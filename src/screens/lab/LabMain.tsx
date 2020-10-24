import * as React from 'react';
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

interface Props {
  navigation: StackNavigationProp<LabStackParamList, 'LabMain'>;
}

const Container = styled.View`
  align-items: flex-start; 
`;

const TempButton = styled.TouchableOpacity`

`;

const TempText = styled.Text`

`;

const LabMain = ({ navigation }: Props) => {
  React.useEffect(() => {
    eventUtil.logScreenView(eventUtil.LabMain);
    navigation.navigate('SutraList');
  }, []);

  return (
    <>
      <NavBar selectedStack={'LabStack'} navigateToStack={(stackName: string) => navigation.navigate(stackName)}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TopBarLeftIcon />

          <Container>
            <LabNewCardsContainer onPress={() => navigation.navigate('SutraInfo')} />
            <LabIntroducecardsContainer onPress={() => navigation.navigate('SutraList')} />
            <MarginBottom />
          </Container>
        </ScrollView>
      </NavBar >
      <Blinder />
    </>
  );
};

export default LabMain;

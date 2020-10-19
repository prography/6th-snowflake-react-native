import * as React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import analytics from '@react-native-firebase/analytics';

import { d, c } from '~/utils/constant';
import NavBar from '~/screens/NavBar';
import TopBarLeftIcon from '~/components/universal/topBar/TopBarLeftIcon';

import Blinder from '~/components/product/Blinder';
import MarginBottom from '~/components/universal/margin/MarginBottom';
import TopBarBackArrow from '~/components/universal/topBar/TopBarBackArrow';
import CharacInfoCard from '~/components/lab/sutra/list/CharacInfoCard';
import SutraCardsList from '~/containers/lab/sutra/list/SutraCardsList';
import SutraInfoContainer from '~/containers/lab/sutra/info/SutraInfoContainer';
import { LabStackParamList } from '~/navigation/tabs/LabStack';
import { StackNavigationProp } from '@react-navigation/stack';

interface Props {
  navigation: StackNavigationProp<LabStackParamList, 'LabMain'>;
}

const Container = styled.View`
  flex-direction: column;
  align-items: flex-start;
`;

const SutraInfo = ({ navigation }: Props) => {
  React.useEffect(() => {
    analytics().setCurrentScreen('SutraInfo');
  }, []);

  return (
    <>
      <NavBar selectedStack={'LabStack'} navigateToStack={(stackName: string) => navigation.navigate(stackName)}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TopBarBackArrow />
          <Container>
            <SutraInfoContainer />
          </Container>
        </ScrollView>
      </NavBar>
      <Blinder />
    </>
  );
};

export default SutraInfo;

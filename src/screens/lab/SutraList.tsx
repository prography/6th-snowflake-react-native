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
import { StackNavigationProp } from '@react-navigation/stack';
import { LabStackParamList } from '~/navigation/tabs/LabStack';

interface Props {
  navigation: StackNavigationProp<LabStackParamList, 'LabMain'>;
}

const Container = styled.View`
  flex-direction: column;
  align-items: flex-start;
`;
//backback
const SutraList = ({ navigation }: Props) => {
  React.useEffect(() => {
    analytics().setCurrentScreen("SutraList");
  }, []);

  return (
    <>
      <NavBar
        selectedStack={"LabStack"}
        navigateToStack={(stackName: string) => navigation.navigate(stackName)}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <TopBarBackArrow />
          <Container>
            <CharacInfoCard />

            <SutraCardsList />
          </Container>
        </ScrollView>
      </NavBar>
      <Blinder />
    </>
  );
};

export default SutraList;

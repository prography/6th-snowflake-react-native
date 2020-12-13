import * as React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';

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
import { eventUtil } from '~/utils/firebase/event';
import { RouteProp } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

interface Props {
  navigation: StackNavigationProp<LabStackParamList, 'LabMain'>;
  route: RouteProp<LabStackParamList, 'SutraInfo'>;
}

const Container = styled.View`
  flex-direction: column;
  align-items: flex-start;
`;

const SutraInfo = ({ navigation, route }: Props) => {
  const {
    newSutraId,
  } = route.params;

  const navigateToJoinStack = () => navigation.navigate('JoinStack');

  React.useEffect(() => {
    eventUtil.logScreenView(eventUtil.SutraInfo)
  }, []);

  return (
    <>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <TopBarBackArrow />
        <Container>
          <SutraInfoContainer
            newSutraId={newSutraId}
            navigateToJoinStack={navigateToJoinStack}
          />
        </Container>
      </KeyboardAwareScrollView>
      <Blinder />
    </>
  );
};

export default SutraInfo;

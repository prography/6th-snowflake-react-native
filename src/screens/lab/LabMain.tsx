import * as React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import analytics from "@react-native-firebase/analytics";
import { StackNavigationProp } from '@react-navigation/stack';

import NavBar from '~/screens/NavBar';
import TopBarLeftIcon from '~/components/universal/topBar/TopBarLeftIcon';
import CardPurpleRight from '~/components/universal/card/CardPurpleRight';
import { LabStackParamList } from '~/navigation/tabs/LabStack';

interface Props {
  navigation: StackNavigationProp<LabStackParamList, 'LabMain'>;
}

const Container = styled.View`
  flex-direction: column;
  align-items: flex-start;
`;

const LabMain = ({ navigation }: Props) => {
  React.useEffect(() => {
    analytics().setCurrentScreen("LabMain");
  }, []);

  return (
    <NavBar selectedStack={'LabStack'} navigateToStack={(stackName: string) => navigation.navigate(stackName)}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TopBarLeftIcon />

        <Container>
          {/* 제목이 보라색인 카드 */}
          <CardPurpleRight
            title={'Getting ready...'}
            content={
              '실험실에서는 궁금하지만 꺼내기 어려웠던\n 재미난 주제의 설문 및 다양한 컨텐츠가 \n 제공될 예정입니다.'
            }
          />
        </Container>
      </ScrollView>
    </NavBar>
  );
};

export default LabMain;

import * as React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';

import NavBar from '~/screens/NavBar';
import TopBarLeftIcon from '~/components/universal/topBar/TopBarLeftIcon';
import CardPurpleRight from '~/components/universal/card/CardPurpleRight';
import { StackNavigationProp } from '@react-navigation/stack';
import { ClinicStackParamList } from '~/navigation/tabs/ClinicStack';

interface Props {
  navigation: StackNavigationProp<ClinicStackParamList, 'ClinicMain'>;
}

const Container = styled.View`
  flex-direction: column;
  align-items: flex-start;
`;

const ClinicMain = ({ navigation }: Props) => {
  return (
    <NavBar selectedStack={'ClinicStack'} navigateToStack={(stackName: string) => navigation.navigate(stackName)}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TopBarLeftIcon />

        <Container>
          {/* 제목이 보라색인 카드 */}
          <CardPurpleRight
            title={'Getting ready...'}
            content={
              '보다 섬세한 대화가 오갈 수 있는 커뮤니티, \n 상담소는 현재 준비 중입니다.'
            }
          />
        </Container>
      </ScrollView>
    </NavBar>
  );
};

export default ClinicMain;

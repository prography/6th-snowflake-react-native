import * as React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

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
import { eventUtil } from '~/utils/firebase/event';
import { useSelector } from 'react-redux';
import { RootState } from '~/store/modules';
import QuestionModal from '~/containers/lab/sutra/QuestionModal';

interface Props {
  navigation: StackNavigationProp<LabStackParamList, 'LabMain'>;
}

const Container = styled.View`
  flex-direction: column;
  align-items: flex-start;
`;
//backback
const SutraList = ({ navigation }: Props) => {
  // state
  const [showQuestionModal, setShowQuestionModal] = React.useState<boolean>(false);
  // redux
  const { data: userInfo } = useSelector((state: RootState) => state.join.userInfo.userInfo);
  // navigate
  const navigateToJoinStack = () => navigation.navigate('JoinStack');

  React.useEffect(() => {
    eventUtil.logScreenView(eventUtil.SutraList);
  }, []);

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TopBarBackArrow />
        <Container>
          {/* [ ] TouchableOpacity는 테스트로 QuestionModal 띄우기 위함. 나중에 삭제하기. */}
          <TouchableOpacity onPress={() => setShowQuestionModal(true)} activeOpacity={1.0}>
            <CharacInfoCard position={userInfo.position} />
          </TouchableOpacity>
          <SutraCardsList
            navigateToJoinStack={navigateToJoinStack}
            openQuestionModal={() => setShowQuestionModal(true)}
            position={userInfo.position} />
        </Container>
        <QuestionModal
          isVisible={showQuestionModal}
          onCancel={() => setShowQuestionModal(false)}
          navigateToJoinStack={navigateToJoinStack}
        />
      </ScrollView>
      <Blinder />
    </>
  );
};

export default SutraList;

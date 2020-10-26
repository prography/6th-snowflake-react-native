import * as React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import { WebView } from 'react-native-webview';
import { StackNavigationProp } from '@react-navigation/stack';

import { d, c, l } from '~/utils/constant';
import { useRemoteConfigs } from '~/context/CommonContext';
import { JoinStackParamList } from '~/navigation/tabs/JoinStack';
import { eventUtil } from '~/utils/firebase/event';

const feedbackLink = 'https://docs.google.com/forms/d/e/1FAIpQLSc7Xar8USMoiSKfV2ucJtlkAw8eZ47MdXSCEk3knbmg1KuyFw/viewform'; // remote config 못불러올 수도 있으니까

const Container = styled.TouchableOpacity`
  height: ${l.bottomBar}px;
  width: ${d.width}px;
  position: absolute;
  bottom: 0px;
  flex: 1;
  flex-direction: row;
  background-color: white;
  justify-content: center;
  align-items: center;
`;
interface Props {
  navigation: StackNavigationProp<JoinStackParamList, 'Feedback'>;
}
const Feedback = ({ navigation }: Props) => {
  const { remoteConfigs } = useRemoteConfigs();
  React.useEffect(() => {
    eventUtil.logScreenView("Feedback");
  }, []);
  return (
    <>
      <WebView source={{ uri: remoteConfigs.feedback_link?.asString() || feedbackLink }} />
      <Container
        activeOpacity={1}
        onPress={() => {
          navigation.navigate('SettimgMain');
        }}
      >
        <Text>설문에서 나가기</Text>
      </Container>
    </>
  );
};

export default Feedback;

import * as React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import { d, c, l } from '~/utils/constant';
import { withNavigation } from '@react-navigation/compat';
import { WebView } from 'react-native-webview';
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
  navigation: any;
}
const Feedback = ({ navigation }: Props) => {
  return (
    <>
      <WebView source={{ uri: 'https://docs.google.com/forms/d/e/1FAIpQLSc7Xar8USMoiSKfV2ucJtlkAw8eZ47MdXSCEk3knbmg1KuyFw/viewform' }} />
      <Container
        activeOpacity={1}
        onPress={() => {
          navigation.navigate('JoinStack', { screen: 'SettingMain' });
        }}
      >
        <Text>설문에서 나가기</Text>
      </Container>
    </>
  );
};

export default withNavigation(Feedback);

import * as React from 'react';
import styled from 'styled-components/native';
import { d, c } from '~/utils/constant';
import { withNavigation } from '@react-navigation/compat';
import TextBottomBtn from '../text/TextBottomBtn';

interface Props {
  buttonText: string;
  link: string;
  navigation: any;
}

const Container = styled.TouchableOpacity`
  background-color: ${c.purple};
  height: ${d.px * 78}px;
  align-items: center;
`;

const BottomButtonLink = ({ buttonText, link, navigation }: Props) => {
  return (
    <Container
      activeOpacity={1}
      onPress={() => {
        navigation.navigate(link);
      }}
    >
      <TextBottomBtn btnName={buttonText} />
    </Container>
  );
};

export default withNavigation(BottomButtonLink);

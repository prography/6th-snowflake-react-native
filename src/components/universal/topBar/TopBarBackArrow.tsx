import * as React from 'react';
import styled from 'styled-components/native';
import { d, l } from '~/utils/constant';
import { withNavigation } from '@react-navigation/compat';
import BackArrow from '~/img/svgIcons/BackArrow';

const Container = styled.View`
  height: ${d.px * l.tB}px;
  padding-left: ${props=> props.theme.paddingWidth.wideLeftRight.paddingLeft};
  align-items: flex-start;
  justify-content: center;
  background-color: ${props => props.theme.themeColor.background}
`;

const Button = styled.TouchableOpacity`
  height: ${l.tB / 2}px;
  width: ${d.px * 50}px;
  align-items: flex-start;
  justify-content: center;
`;

const SnowFlake = styled.Image`
  height: ${d.px * 15}px;
  width: ${d.px * 23}px;
`;
interface Props {
  navigation: any;
}
const TopBarBackArrow = ({ navigation }: Props) => {
  return (
    <Container>
      <Button onPress={() => navigation.pop()}>
        <BackArrow/>
         </Button>
    </Container>
  );
};

export default withNavigation(TopBarBackArrow);

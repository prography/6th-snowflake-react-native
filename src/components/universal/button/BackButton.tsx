import * as React from 'react';
import styled from 'styled-components/native';
import { d, c } from '~/utils/constant';
import { withNavigation } from '@react-navigation/compat';
import { goBack } from '@react-navigation/compat/lib/typescript/src/helpers';

interface Props {
  navigation: any;
}

const Container = styled.TouchableOpacity`
    height: ${d.px * 20}px;
    padding-left: ${d.px * 5}px;
    padding-right: ${d.px * 5}px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `;


const SnowFlake = styled.Image`
  height: ${d.px * 15}px;
  width: ${d.px * 23}px;
  margin-right: ${d.px * 10}px;
`;

const BackButton = ({ navigation }: Props) => {
  const onPressBack = () => {
    navigation.pop()
  };

  return (
    <Container
      activeOpacity={1}
      onPress={onPressBack}
    >

      <SnowFlake
        style={{ resizeMode: 'contain' }}
        source={require('~/img/icon/iconBackArrow.png')}
      />
    </Container>
  );
};

export default withNavigation(BackButton);

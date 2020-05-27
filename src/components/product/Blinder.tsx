import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { d, c } from '~/utils/constant';
import { SafeAreaView, Text, ScrollView } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  background-color: ${c.mint};
  position: absolute;
  right: ${d.px * 20}px;
  top: ${d.px * 12.5}px;
`;

const Blinder = () => {
  const blinder = useSelector((state) => state.blindReducer.blindState);
  console.log('state:', blinder);
  return (
    <Container>{blinder ? <Text>true</Text> : <Text>false</Text>}</Container>
  );
};

export default Blinder;

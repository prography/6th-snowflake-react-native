import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { d, c } from '~/utils/constant';
import { SafeAreaView, Text, ScrollView } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  background-color: ${c.purple};
  right: ${d.px * 20}px;
  top: ${d.px * 12.5}px;
  position: absolute;
`;

const Blinder = () => {
  const dispatch = useDispatch();
  const blindState = useSelector(
    (state: State) => state.blindReducer.blindState
  );
  console.log('blindState:', blindState);

  const setBlinder = () => {
    dispatch({ type: 'SET_BLINDER', blindState: blindState });
  };

  return (
    <Container onPress={setBlinder}>
      {blindState ? <Text>😎</Text> : <Text>🌞</Text>}
    </Container>
  );
};

export default Blinder;

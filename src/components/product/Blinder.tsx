import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { d, c } from '~/utils/constant';
import { SafeAreaView, Text, ScrollView } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
  width: ${d.px * 40}px;
  height: ${d.px * 40}px;
  border-radius: 1000;
  background-color: ${(props) => props.blinderColor || c.mint};
  right: ${d.px * 20}px;
  top: ${d.px * 22.5}px;
  position: absolute;
  justify-content: center;
  align-items: center;
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
    <Container
      onPress={setBlinder}
      blinderColor={blindState ? c.purple : c.mint}
    >
      {blindState ? <Text>😎</Text> : <Text>🌞</Text>}
    </Container>
  );
};

export default Blinder;

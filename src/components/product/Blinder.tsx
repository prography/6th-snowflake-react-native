import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import analytics from "@react-native-firebase/analytics";
import { SafeAreaView, Text, ScrollView } from 'react-native';
import styled from 'styled-components/native';

import { d, c, l } from '~/utils/constant';
import { llog2 } from '~/utils/functions';

const Container = styled.View`
  width: ${d.px * l.tB}px;
  height: ${d.px * l.tB}px;
  right: 0px;
  position: absolute;
  justify-content: center;
  align-items: center;
`;

const BlinderTouchable = styled.TouchableOpacity`
  width: ${d.px * 40}px;
  height: ${d.px * 40}px;
  border-radius: 1000px;
  background-color: ${(props) => props.blinderColor || c.mint};

  justify-content: center;
  align-items: center;
`;

const Blinder = () => {
  const dispatch = useDispatch();
  const blindState = useSelector(
    (state) => state.blindReducer.blindState
  );
  llog2('blindState:', blindState);

  const setBlinder = () => {
    analytics().logEvent(`blinder_to_${blindState ? 'hidden' : 'show'}`);
    dispatch({ type: 'SET_BLINDER', blindState });
  };

  return (
    <Container>
      <BlinderTouchable
        onPress={setBlinder}
        blinderColor={blindState ? c.purple : c.mint}
      >
        {blindState ? <Text>😎</Text> : <Text>🌞</Text>}
      </BlinderTouchable>
    </Container>
  );
};

export default Blinder;

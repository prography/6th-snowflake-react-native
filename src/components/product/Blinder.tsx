import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Text } from 'react-native';
import styled from 'styled-components/native';

import { d, c, l } from '~/utils/constant';
import { llog } from '~/utils/functions';
import { setBlinder } from '~/store/modules/product/blind';
import { RootState } from '~/store/modules';
import { eventUtil } from '~/utils/firebase/event';

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
    (state: RootState) => state.product.blind.blindState,
  );
  llog('blindState:', blindState);

  const onPress = () => {
    eventUtil.logEvent(blindState ? eventUtil.blinder_to_show : eventUtil.blinder_to_hidden)
    dispatch(setBlinder(blindState));
  };

  return (
    <Container>
      <BlinderTouchable
        onPress={onPress}
        blinderColor={blindState ? c.purple : c.mint}
      >
        {blindState ? <Text>😎</Text> : <Text>🌞</Text>}
      </BlinderTouchable>
    </Container>
  );
};

export default Blinder;

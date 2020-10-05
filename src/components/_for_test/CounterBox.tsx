import * as React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '~/store/modules';
import MarginNarrow from '../universal/margin/MarginNarrow';
import { increaseAsync, decreaseAsync } from '~/store/modules/counter-test';

interface Props {

}

const Container = styled.View`
  /* flex-direction: row; */
`;

const Button = styled.TouchableOpacity`
  background-color: lightgreen;
  border-width: 1px;
  border-color: green;
  padding: 10px;
`;

export default ({ }: Props) => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <Container>
      <Text>Count: {count}</Text>

      <MarginNarrow />

      <Button onPress={() => dispatch(increaseAsync())}>
        <Text>+ 1</Text>
      </Button>
      <MarginNarrow />
      <Button onPress={() => dispatch(decreaseAsync())}>
        <Text>- 1</Text>
      </Button>
      <Button onPress={() => null)}>
        <Text>Get User Info</Text>
      </Button>
    <MarginNarrow />
    </Container >
  );
};

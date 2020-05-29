import * as React from 'react';
import styled from 'styled-components/native';
import { d, c } from '~/utils/constant';
import { View, Text } from 'react-native';

interface Props {
  score?: number;
  reviewNum?: number;
}

const TextStyle = styled.Text`
  font-family: 'Jost-Semi';
  line-height: ${d.px * 23}px;
  font-size: ${d.px * 17}px;
  text-align: left;
  color: ${c.purple};
`;

const TextProductScoreBig = ({ score, reviewNum }: Props) => {
  return (
    <>
      {score && <TextStyle>★ {score}</TextStyle>}
      {reviewNum && <TextStyle>{reviewNum}</TextStyle>}
    </>
  );
};

export default TextProductScoreBig;

import * as React from 'react';
import styled from 'styled-components/native';
import { d, c } from '~/utils/constant';

interface Props {
  score: string; // toFixed하면 string이 되므로
}

const TextStyle = styled.Text`
  font-family: 'Jost-Bold';
  line-height: ${d.px * 23}px;
  font-size: ${d.px * 15}px;
  text-align: left;
  color: ${c.purple};
`;

const TextProductScore = ({ score }: Props) => {
  return (
    <>
      {score === '0.00' ? (
        <TextStyle>-</TextStyle>
      ) : (
          <TextStyle>★ {score}</TextStyle>
        )}
    </>
  );
};

export default TextProductScore;

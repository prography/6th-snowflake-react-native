import * as React from 'react';
import styled from 'styled-components/native';
import { d, c } from '~/utils/constant';

interface Props {
  rankNum: number;
}

const TextStyle = styled.Text`
  font-family: 'Jost-Bold';
  line-height: ${d.px * 20}px;
  font-size: ${d.px * 17}px;
  text-align: left;
`;

const TextRankNum = ({ rankNum }: Props) => {
  return (
    <TextStyle style={{ color: rankNum > 3 ? c.lightGray : c.purple }}>
      {rankNum}
    </TextStyle>
  );
};

export default TextRankNum;

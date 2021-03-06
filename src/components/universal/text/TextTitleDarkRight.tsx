import * as React from 'react';
import styled from 'styled-components/native';
import { d, c } from '~/utils/constant';

interface Props {
  title: string;
}

const TextStyle = styled.Text`
  font-family: 'Jost-Bold';
  font-size: ${d.px * 20}px;
  line-height: ${d.px * 30}px;
  text-align: right;
  color: ${c.black};
`;

const TextTitleDarkRight = ({ title }: Props) => {
  return <TextStyle>{title}</TextStyle>;
};

export default TextTitleDarkRight;

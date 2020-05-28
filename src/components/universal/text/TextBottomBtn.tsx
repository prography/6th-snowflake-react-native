import * as React from 'react';
import styled from 'styled-components/native';
import { d, c } from '~/utils/constant';
import { View, Text } from 'react-native';

interface Props {
  content: string;
}

const TextStyle = styled.Text`
  font-family: 'Jost-Book';
  font-size: ${d.px * 15}px;
  line-height: ${d.px * 40}px;
  color: white;
`;

const TextBottomBtn = ({ btnName }: Props) => {
  return <TextStyle>{btnName}</TextStyle>;
};

export default TextBottomBtn;

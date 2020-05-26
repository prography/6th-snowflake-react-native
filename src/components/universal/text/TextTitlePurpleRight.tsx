import * as React from 'react';
import styled from 'styled-components/native';
import { d, c } from '~/utils/constant';
import { View, Text } from 'react-native';

interface Props {
  title: string;
}

const TextStyle = styled.Text`
  font-family: 'Jost-Bold';
  font-size: ${d.px * 20}px;
  text-align: right;
  color: ${c.purple};
`;

const TextTitlePurpleRight = ({ title }: Props) => {
  return <TextStyle>{title}</TextStyle>;
};

export default TextTitlePurpleRight;

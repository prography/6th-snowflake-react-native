import * as React from 'react';
import styled from 'styled-components/native';
import { d, c } from '~/utils/constant';
import { View, Text } from 'react-native';

interface Props {
  title: string;
}

const TextStyle = styled.Text`
  font-family: 'Jost-Medium';
  font-size: ${d.px * 13}px;
  line-height: ${d.px * 17}px;
  text-align: left;
  color: ${c.lightGray};
`;

const TextProductSpecificTitle = ({ title }: Props) => {
  return <TextStyle>{title}</TextStyle>;
};

export default TextProductSpecificTitle;

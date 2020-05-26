import * as React from 'react';
import styled from 'styled-components/native';
import { d, c } from '~/utils/constant';
import { View, Text } from 'react-native';

interface Props {
  productName: string;
}

const TextStyle = styled.Text`
  font-family: 'Jost-Semi';
  font-size: ${d.px * 15}px;
  text-align: left;
  color: ${c.black};
`;

const TextProductName = ({ productName }: Props) => {
  return <TextStyle>{productName}</TextStyle>;
};

export default TextProductName;

import * as React from 'react';
import styled from 'styled-components/native';
import { d, c } from '~/utils/constant';
import { View, Text } from 'react-native';

interface Props {
  productCompany: string;
}

const TextStyle = styled.Text`
  font-family: 'Jost-Medium';
  line-height: ${d.px * 20}px;
  font-size: ${d.px * 13}px;
  text-align: left;
  color: ${c.darkGray};
`;

const TextProductCompany = ({ productCompany }: Props) => {
  return <TextStyle>{productCompany}</TextStyle>;
};

export default TextProductCompany;

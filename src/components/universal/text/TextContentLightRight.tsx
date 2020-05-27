import * as React from 'react';
import styled from 'styled-components/native';
import { d, c } from '~/utils/constant';
import { View, Text } from 'react-native';

interface Props {
  content: string;
}

const TextStyle = styled.Text`
  font-family: 'Jost-Book';
  font-size: ${d.px * 15.5}px;
  line-height: ${d.px * 23.5}px;
  text-align: right;

  color: ${c.darkGray};
`;

const TextContentLightRight = ({ content }: Props) => {
  return <TextStyle>{content}</TextStyle>;
};

export default TextContentLightRight;

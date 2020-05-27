import * as React from 'react';
import styled from 'styled-components/native';
import { d, c } from '~/utils/constant';
import { View, Text } from 'react-native';

interface Props {
  tag: string;
}

const TextStyle = styled.Text`
  font-family: 'Jost-Medium';
  font-size: ${d.px * 12}px;
  line-height: ${d.px * 15}px;
  text-align: left;
  color: ${c.lightGray};
`;

const TextTag = ({ tag }: Props) => {
  return <TextStyle>#{tag}</TextStyle>;
};

export default TextTag;

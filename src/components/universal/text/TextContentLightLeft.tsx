import * as React from 'react';
import styled from 'styled-components/native';
import { d, c } from '~/utils/constant';

interface Props {
  content: string;
}

const TextStyle = styled.Text`
  font-family: 'Jost-Book';
  font-size: ${d.px * 15.5}px;
  line-height: ${d.px * 23.5}px;
  text-align: left;
  color: ${c.darkGray};
`;

const TextContentLightLeft = ({ content }: Props) => {
  return <TextStyle>{content}</TextStyle>;
};

export default TextContentLightLeft;

import * as React from 'react';
import styled from 'styled-components/native';
import { d, c } from '~/utils/constant';

interface Props {
  content: string;
}

const TextStyle = styled.Text`
  font-family: 'Jost-Semi';
  font-size: ${d.px * 12}px;
  line-height: ${d.px * 16}px;
  text-align: right;
  text-decoration-line: underline;
  color: ${c.darkGray};
`;

const TextLink = ({ content }: Props) => {
  return <TextStyle>{content}</TextStyle>;
};

export default TextLink;

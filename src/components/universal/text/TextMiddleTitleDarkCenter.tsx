import * as React from 'react';
import styled from 'styled-components/native';
import { d, c } from '~/utils/constant';

interface Props {
  title: string;
}

const TextStyle = styled.Text`
  font-family: 'Jost-Semi';
  font-size: ${d.px * 17}px;
  text-align: center;
  color: ${c.black};
  line-height: ${d.px * 30}px;
`;

const TextMiddleTitleDarkCenter = ({ title }: Props) => {
  return <TextStyle>{title}</TextStyle>;
};

export default TextMiddleTitleDarkCenter;

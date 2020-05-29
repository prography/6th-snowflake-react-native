import * as React from 'react';
import styled from 'styled-components/native';
import { d, c } from '~/utils/constant';
import { View, Text } from 'react-native';
import TextTitleDarkLeft from '../TextTitleDarkLeft';

interface Props {
  nameKor: string;
  nameEng: String;
}

const Container = styled.Text``;
const SmallGap = styled.View`
  width: ${d.px * 10}px;
`;
const TextEngStyle = styled.Text`
  font-family: 'Jost-Semi';
  font-size: ${d.px * 15}px;
  line-height: ${d.px * 35}px;
  text-align: left;
  color: ${c.lightGray};
`;

const TextProductNameBigEng = ({ nameKor, nameEng }: Props) => {
  return (
    <Container>
      <TextTitleDarkLeft title={nameKor} />
      <SmallGap />
      {nameEng && <TextEngStyle>{nameEng}</TextEngStyle>}
    </Container>
  );
};

export default TextProductNameBigEng;

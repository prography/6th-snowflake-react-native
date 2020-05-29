import * as React from 'react';
import styled from 'styled-components/native';
import { d, c } from '~/utils/constant';

interface Props {
  manufacturerKor: string;
  manufacturerEng: String;
}

const Container = styled.View`
  flex-direction: row;
`;
const SmallGap = styled.View`
  width: ${d.px * 10}px;
`;

const TextProductNameStyle = styled.Text`
  font-family: 'Jost-Medium';
  font-size: ${d.px * 15}px;
  line-height: ${d.px * 20}px;
  text-align: left;
  color: ${c.darkGray};
`;

const TextProductManufacturerBigEng = ({
  manufacturerKor,
  manufacturerEng,
}: Props) => {
  return (
    <Container>
      <TextProductNameStyle>{manufacturerKor}</TextProductNameStyle>
      <SmallGap />
      {manufacturerEng && (
        <TextProductNameStyle>{manufacturerEng}</TextProductNameStyle>
      )}
    </Container>
  );
};

export default TextProductManufacturerBigEng;

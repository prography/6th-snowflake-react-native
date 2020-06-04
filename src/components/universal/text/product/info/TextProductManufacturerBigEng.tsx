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

const TextProductManufacturerKorStyle = styled.Text`
  font-family: 'Jost-Medium';
  font-size: ${d.px * 15}px;
  line-height: ${d.px * 20}px;
  text-align: left;
  color: ${c.darkGray};
`;

const TextProductManufacturerEngStyle = styled.Text`
  font-family: 'Jost-Book';
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
      <TextProductManufacturerKorStyle>
        {manufacturerKor}
      </TextProductManufacturerKorStyle>
      <SmallGap />
      {manufacturerEng && (
        <TextProductManufacturerEngStyle>
          {manufacturerEng}
        </TextProductManufacturerEngStyle>
      )}
    </Container>
  );
};

export default TextProductManufacturerBigEng;

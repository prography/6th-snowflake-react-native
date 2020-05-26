import * as React from 'react';
import styled from 'styled-components/native';
import { d, color } from '~/utils/constant';

const Container = styled.View`
  width: ${d.width / 5}px;
  height: ${d.width / 2.5}px;

  align-items: center;
`;
const TypeText = styled.Text``;
const BoxContainer = styled.View`
  background-color: white;
  width: ${d.width / 4.5}px;
  height: ${d.width / 3}px;
  border-radius: ${d.px * 20}px;
`;
const ImageContainer = styled.View`
  flex: 1.5;
  justify-content: center;
  align-items: center;
`;
const Image = styled.Image`
  width: ${d.width * 0.1}px;
  height: ${d.width / 8}px;
  resize-mode: contain;
`;
const NameContainer = styled.View`
  align-items: center;
`;
const CompanyText = styled.Text`
  color: ${color.grayLight};
  font-weight: 700;
  font-size: ${d.px * 11.5}px;
  margin-bottom: ${d.px * 4}px;
`;
const TitleText = styled.Text`
  font-weight: 500;
  font-size: ${d.px * 14}px;
`;
interface Props {
  type: string;
  company: string;
  title: string;
}
const ProductBox = ({ type, company, title }: Props) => {
  return (
    <Container>
      <TypeText>{type}</TypeText>
      <BoxContainer>
        <ImageContainer>
          <Image source={require('~/img/condom.png')} />
        </ImageContainer>
        <NameContainer>
          <CompanyText>{company}</CompanyText>
          <TitleText>{title}</TitleText>
        </NameContainer>
      </BoxContainer>
    </Container>
  );
};

export default ProductBox;

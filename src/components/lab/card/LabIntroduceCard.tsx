import * as React from 'react';
import styled from 'styled-components/native';
import { d, l } from '../../../utils/constant';
import MarginNarrow from '~/components/universal/margin/MarginNarrow';
import MarginWide from '~/components/universal/margin/MarginWide';
import LineGrayRightLong from '../../universal/line/LineGrayRightLong';
import MarginMedium from '~/components/universal/margin/MarginMedium';

const Container = styled.View`
  margin-right: ${l.mR}px;
  margin-left: ${l.mL}px;
`;

const TitleText = styled.Text``;
const DetailText = styled.Text``;
const Arrow = styled.Image``;
const CardImage = styled.Image``;
const LabIntroduceCard = () => {
  return (
    <>
      <Container>
        <TitleText>눈송수트라</TitleText>
        <DetailText>보라두리와 하늘이가 소개하는 다양한 체위!</DetailText>
      </Container>

      <MarginMedium />
      <LineGrayRightLong />
      <MarginWide />
    </>
  );
};

export default LabIntroduceCard;

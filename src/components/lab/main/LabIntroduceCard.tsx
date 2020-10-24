import * as React from 'react';
import styled from 'styled-components/native';

import { d, l, c } from '~/utils/constant';
import MarginNarrow from '~/components/universal/margin/MarginNarrow';
import MarginWide from '~/components/universal/margin/MarginWide';
import LineGrayRightLong from '~/components/universal/line/LineGrayRightLong';
import { Img } from '~/img';

interface Props {
  onPress: () => void;
}

const Container = styled.TouchableOpacity`
  margin-right: ${l.mR}px;
  margin-left: ${l.mL}px;
`;
const TitleArea = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: ${d.width - l.mR - l.mL}px;
`;
const TitleText = styled.Text`
  font-family: Jost-Bold;
  font-size: ${d.px * 20}px;
  color: ${c.black};
`;
const ArrowBox = styled.View`
  height: ${22 * d.px}px;
  width: ${33 * d.px}px;
  align-items: center;
  justify-content: center;
  background-color: ${c.purple};
`;
const Arrow = styled.Image`
  height: ${15 * d.px}px;
  width: ${20 * d.px}px;
`;
const DetailText = styled.Text`
  font-family: Jost-Medium;
  font-size: ${d.px * 15}px;
  color: ${c.darkGray};
`;

const CardImage = styled.Image`
  width: ${d.width - l.mL}px;
  height: ${d.px * 280}px;
`;

const LabIntroduceCard = ({ onPress }: Props) => {
  return (
    <>
      <Container activeOpacity={1.0} onPress={onPress}>
        <TitleArea>
          <TitleText>눈송수트라</TitleText>
          <ArrowBox>
            <Arrow
              resizeMode="contain"
              source={Img.icon.arrowWhite}
            />
          </ArrowBox>
        </TitleArea>
        <MarginNarrow />
        <DetailText>보라두리와 하늘이가 소개하는 다양한 체위!</DetailText>
        <MarginNarrow />
        <CardImage
          style={{ resizeMode: 'cover' }}
          source={Img.sample.sutra}
        />
      </Container>
      <MarginWide />
      <LineGrayRightLong />
      <MarginWide />
    </>
  );
};

export default LabIntroduceCard;

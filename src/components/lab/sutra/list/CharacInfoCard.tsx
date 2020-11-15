import * as React from 'react';
import styled from 'styled-components/native';

import { d, l, c } from '~/utils/constant';
import MarginMedium from '~/components/universal/margin/MarginMedium';
import LineGrayMiddle from '~/components/universal/line/LineGrayMiddle';
import MarginWide from '~/components/universal/margin/MarginWide';
import MarginNarrow from '~/components/universal/margin/MarginNarrow';
import { Img } from '~/img';
import { Position } from '~/api/interface';

const Container = styled.View`
  margin-right: ${l.mR}px;
  margin-left: ${l.mR}px;
`;
const PurpleArea = styled.View`
  flex-direction: row;
  width: ${d.width - l.mL * 2}px;
  justify-content: space-between;
  align-items: center;
`;
const PurpleDetailText = styled.Text`
  font-family: Jost-Medium;
  color: ${c.darkGray};
  font-size: ${d.px * 12}px;
`;
const PurpleCharac = styled.Image`
  width: ${d.px * 60}px;
  height: ${d.px * 80}px;
  margin-right: ${d.px * 20}px;
`;
const SkyArea = styled.View`
  flex-direction: row;
  width: ${d.width - l.mL * 2}px;
  justify-content: space-between;
  align-items: center;
`;
const SkyDetailText = styled.Text`
  font-family: Jost-Medium;
  color: ${c.darkGray};
  font-size: ${d.px * 12}px;
`;
const SkyCharac = styled.Image`
  width: ${d.px * 70}px;
  height: ${d.px * 100}px;
`;

interface Props {
  position: Position;
}

const CharacInfoCard = ({ position }: Props) => {
  // [ ] position으로 선택된 아이 표시하기 (지원)
  return (
    <>
      <Container>
        <PurpleArea>
          <PurpleCharac
            style={{ resizeMode: 'contain' }}
            source={Img.sample.purpleCharac}
          />
          <PurpleDetailText>
            {position === Position.PURPLE ? '(선택됨) ' : ''}
          </PurpleDetailText>
          <PurpleDetailText>
            ** 이거 클릭하면 포지션 선택 모달 뜹니다~~~ (임시) **{'\n'}
            보라색 친구! 설명은 좀 더 정리가 필요하네용.
          </PurpleDetailText>
        </PurpleArea>
        <MarginNarrow />
        <SkyArea>
          <SkyDetailText>
            {position === Position.SKY ? '(선택됨) ' : ''}
          </SkyDetailText>
          <SkyDetailText>
            하늘색 친구! 설명은 좀 더 정리가 필요하네용
          </SkyDetailText>
          <SkyCharac
            style={{ resizeMode: 'contain' }}
            source={Img.sample.skyCharac}
          />
        </SkyArea>
      </Container>
      <MarginMedium />
      <LineGrayMiddle />
      <MarginWide />
    </>
  );
};

export default CharacInfoCard;

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
  flex-direction: row;
 
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.View`
  flex-direction: row;
  width: ${d.px * 250}px;
  justify-content: space-between;
  
`

const CharacImg = styled.Image`
  width: ${d.px * 90}px;
  height: ${d.px * 90}px;
`;
const CharacArea = styled.View`
   justify-content: center;
   flex-direction: column;
   align-items: center;
`
interface CharacText {
  selected: boolean;
}
const CharacText = styled.Text <CharacText>`
  ${props=> props.theme.fonts.title.semi15};
  color: ${props=> props.selected? props.theme.themeColor.darkGray : props.theme.themeColor.lightGray};
`
interface Props {
  position: Position;
}

const CharacInfoCard = ({ position }: Props) => {
  // [ ] position으로 선택된 아이 표시하기 (지원)
  return (
    <>
      <Container>
        <Wrapper>
          <CharacArea>
          { <CharacImg
              style={{ resizeMode: 'contain' }}
              source={position === Position.PURPLE ?Img.sutra.purpleSelected :Img.sutra.purpleUnselected}
            />}
            <CharacText selected = { position === Position.PURPLE ? true: false}>오목이</CharacText>
          </CharacArea>
          <CharacArea>
          {  <CharacImg
              style={{ resizeMode: 'contain' }}
              source={position === Position.SKY ? Img.sutra.skySelected: Img.sutra.skyUnselected}
            />}
            <CharacText selected = { position === Position.SKY ? true: false}>볼록이</CharacText>
          </CharacArea>
        
        </Wrapper>
      </Container>
     
    </>
  );
};

export default CharacInfoCard;

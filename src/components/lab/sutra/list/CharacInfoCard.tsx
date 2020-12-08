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
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const UsernameArea = styled.View`
  margin-bottom: ${props=> props.theme.dimensions.px * 30}px;
`
const UsernameText = styled.Text`
  ${props=> props.theme.fonts.title.semi15}
`
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
  height: ${props=> props.theme.dimensions.px * 20}px;
  color: ${props=> props.selected? props.theme.themeColor.darkGray : props.theme.themeColor.lightGray};
`
interface Props {
  position?: Position;
  username?: string;
}

const CharacInfoCard = ({ position, username }: Props) => {
  console.log(position)
  // [ ] position으로 선택된 아이 표시하기 (지원)
  return (
    <>
      <Container>
        <UsernameArea>
       { (position !== Position.NONE)&& 
        <UsernameText>
            { username ? `${username}님은...` : '저는...'}     
          </UsernameText>}
        { (position === Position.NONE)&& 
        <UsernameText>
            { username ? `${username}님은 누구에 더 가까운가요?` : '누구에 더 가까운가요?'}     
          </UsernameText>}
        </UsernameArea>
        <Wrapper>
          <CharacArea>
          { <CharacImg
              style={{ resizeMode: 'contain' }}
              source={ position === Position.NONE ?  Img.sutra.purpleUnselected :     position === Position.PURPLE ?Img.sutra.purpleSelected :Img.sutra.purpleUnselectedBW}
            />}
            <CharacText selected = { position === Position.PURPLE ? true: false}>{ position === Position.PURPLE ? '오목이!': '오목이'}</CharacText>
          </CharacArea>
          <CharacArea>
          {  <CharacImg
              style={{ resizeMode: 'contain' }}
              source={position === Position.NONE ?  Img.sutra.skyUnselected :   position === Position.SKY ? Img.sutra.skySelected: Img.sutra.skyUnselectedBW}
            />}
            <CharacText selected = { position === Position.SKY ? true: false}> { position === Position.SKY ? '볼록이!': '볼록이'}</CharacText>
          </CharacArea>
        
        </Wrapper>
      </Container>
     
    </>
  );
};

export default CharacInfoCard;

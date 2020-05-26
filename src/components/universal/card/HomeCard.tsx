import * as React from 'react';
import styled from 'styled-components/native';
import TextTitleDarkRight from '../../universal/text/TextTitleDarkRight';
import ButtonLinkPurpleLarge from '../../universal/button/ButtonLinkPurpleLarge';
// import LineGrayRightLong from '../../universal/line/LineGrayRightLong';
import MarginWide from '../margin/MarginWide';
import { d, color, c } from '../../../utils/constant';

interface Props {
    content: object;
  }

const Container = styled.View`
  height: ${d.px * 173}px;
  margin-top: ${d.px * 30}px;
  margin-left: ${d.px * 30}px;
  padding-right: ${d.px * 20}px;
`;

const TagContainer = styled.View`
  flex-direction: row;
  margin-left: ${d.px * 30}px;
  border-bottom-width: ${d.px * 0.3}px;
  border-color: ${c.extraLightGray};
`;

const TagBox = styled.View`
  margin-top: ${d.px * 13.5}px;
  margin-right: ${d.px * 12}px;
  margin-bottom: ${d.px * 8}px;
`;

const TagText = styled.Text`
  color: ${color.grayLight};
  font-size: ${d.px * 12}px;
`;


const HomeCard = ({ content }: Props) => {
    return (
      <Container>
        <TextTitleDarkRight title={content.title}/>
        <MarginWide/>
        <ButtonLinkPurpleLarge
            buttonText={content.btnText}
            link={content.link}
        />
        <TagContainer>
            <TagBox>
                <TagText>{content.tag1}</TagText>
            </TagBox>
            <TagBox>
                <TagText>{content.tag2}</TagText>
            </TagBox>
            </TagContainer>
      </Container>
    );
  };
  
  export default HomeCard;
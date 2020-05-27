import * as React from 'react';
import styled from 'styled-components/native';
import TextTitleDarkRight from '../../universal/text/TextTitleDarkRight';
import ButtonLinkPurpleLarge from '../../universal/button/ButtonLinkPurpleLarge';
import LineGrayRightLong from '../../universal/line/LineGrayRightLong';
import MarginWide from '../margin/MarginWide';
import { d, color, c } from '../../../utils/constant';
import MarginNarrow from '../margin/MarginNarrow';
import TextTag from '../text/TextTag';

interface Props {
  content: object;
}

const Container = styled.View`
  margin-right: ${d.px * 20}px;
`;

const TagContainer = styled.View`
  margin-left: ${d.px * 30}px;
  flex-direction: row;
`;

const TagBox = styled.View`
  margin-right: ${d.px * 12}px;
`;

const HomeCard = ({ content }: Props) => {
  return (
    <>
      <Container>
        <TextTitleDarkRight title={content.title} />
        <MarginWide />
        <ButtonLinkPurpleLarge
          buttonText={content.btnText}
          link={content.link}
        />
        <MarginNarrow />
        <TagContainer>
          {content.tag.map((tag) => {
            return (
              <TagBox>
                <TextTag tag={tag.tag} />
              </TagBox>
            );
          })}
        </TagContainer>
        <MarginNarrow />
        <LineGrayRightLong />
        <MarginWide />
      </Container>
    </>
  );
};

export default HomeCard;

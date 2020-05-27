import * as React from 'react';
import styled from 'styled-components/native';
import TextTitleDarkRight from '../../universal/text/TextTitleDarkRight';
import ButtonLinkPurpleLarge from '../../universal/button/ButtonLinkPurpleLarge';
import LineGrayRightLong from '../../universal/line/LineGrayRightLong';
import MarginWide from '../../universal/margin/MarginWide';
import { d, color, c } from '../../../utils/constant';
import MarginNarrow from '../../universal/margin/MarginNarrow';
import TextTag from '../../universal/text/TextTag';
import TextTitlePurpleRight from '~/components/universal/text/TextTitlePurpleRight';
import TextContentDarkRight from '~/components/universal/text/TextContentDarkRight';
import MarginMedium from '~/components/universal/margin/MarginMedium';

interface Props {
  tag: any;
  title: string;
  content: string;
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

const HomeCardNoticePurple = ({ tag, title, content }: Props) => {
  return (
    <>
      <Container>
        <TextTitlePurpleRight title={title} />
        <MarginWide />
        <TextContentDarkRight content={content} />
        <MarginWide />
        <TagContainer>
          {tag.map((tag) => {
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

export default HomeCardNoticePurple;

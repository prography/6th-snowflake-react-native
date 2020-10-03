import * as React from 'react';
import styled from 'styled-components/native';

import LineGrayRightLong from '~components/universal/line/LineGrayRightLong';
import MarginWide from '~components/universal/margin/MarginWide';
import MarginNarrow from '~components/universal/margin/MarginNarrow';
import TextTag from '~components/universal/text/TextTag';
import TextTitlePurpleRight from '~/components/universal/text/TextTitlePurpleRight';
import TextContentDarkRight from '~/components/universal/text/TextContentDarkRight';
import { d, c } from '~/utils/constant';

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
        <TextTitlePurpleRight title={`${title}`} />
        <MarginWide />
        <TextContentDarkRight content={content} />
        <MarginWide />
        <TagContainer>
          {tag.map((tag, index: number) => {
            return (
              <TagBox key={index}>
                <TextTag tag={tag} />
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

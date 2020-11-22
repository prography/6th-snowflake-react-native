import * as React from 'react';
import styled from 'styled-components/native';

import TextTitleDarkRight from '~/components/universal/text/TextTitleDarkRight';
import ButtonLinkPurpleLarge from '~/components/universal/button/ButtonLinkPurpleLarge';
import LineGrayRightLong from '~/components/universal/line/LineGrayRightLong';
import MarginWide from '~/components/universal/margin/MarginWide';
import MarginNarrow from '~/components/universal/margin/MarginNarrow';
import TextTag from '~/components/universal/text/TextTag';
import MarginMedium from '~/components/universal/margin/MarginMedium';
import TextContentLightLeft from '~/components/universal/text/TextContentLightLeft';
import { d, l } from '~/utils/constant';

interface Props {
  tag: [string];
  title: string;
  btnText: string;
  link: string;
  content: string;
}

const Container = styled.View`
  margin-right: ${l.mR}px;
  margin-left: ${l.mL}px;
`;

const TagContainer = styled.View`
  flex-direction: row;
`;

const TagBox = styled.View`
  margin-right: ${d.px * 12}px;
`;

const HomeCardDefaultContentPurpleButton = ({
  tag,
  title,
  btnText,
  link,
  content,
}: Props) => {
  return (
    <>
      <Container>
        <TextTitleDarkRight title={title} />
        <MarginWide />

        <TextContentLightLeft content={content} />
        <MarginMedium />
        <ButtonLinkPurpleLarge buttonText={btnText} link={link} />
        <MarginMedium />
        <TagContainer>
          {tag.map((tag, index: number) => {
            return (
              <TagBox key={index}>
                <TextTag tag={tag} />
              </TagBox>
            );
          })}
        </TagContainer>
      </Container>
      <MarginNarrow />
      <LineGrayRightLong />
      <MarginWide />
    </>
  );
};

export default HomeCardDefaultContentPurpleButton;

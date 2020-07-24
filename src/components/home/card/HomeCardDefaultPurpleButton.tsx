import * as React from 'react';
import styled from 'styled-components/native';
import TextTitleDarkRight from '../../universal/text/TextTitleDarkRight';
import ButtonLinkPurpleLarge from '../../universal/button/ButtonLinkPurpleLarge';
import LineGrayRightLong from '../../universal/line/LineGrayRightLong';
import MarginWide from '../../universal/margin/MarginWide';
import { d, c } from '../../../utils/constant';
import MarginNarrow from '../../universal/margin/MarginNarrow';
import TextTag from '../../universal/text/TextTag';

interface Props {
  tag: any;
  title: string;
  btnText: string;
  link: string;
  content: null;
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

const HomeCardDefaultPurpleButton = ({ tag, title, btnText, link }: Props) => {
  return (
    <>
      <Container>
        <TextTitleDarkRight title={title} />
        <MarginWide />
        <ButtonLinkPurpleLarge buttonText={btnText} link={link} />
        <MarginNarrow />
        <TagContainer>
          {tag.map((tag, index: number) => {
            return (
              <TagBox key={index}>
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

export default HomeCardDefaultPurpleButton;

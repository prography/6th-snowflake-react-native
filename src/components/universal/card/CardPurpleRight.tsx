import * as React from 'react';
import styled from 'styled-components/native';

import { d } from '~/utils/constant';
import TextTitlePurpleRight from '~/components/universal/text/TextTitlePurpleRight';
import TextContentDarkRight from '~/components/universal/text/TextContentDarkRight';
import MarginWide from '~/components/universal/margin/MarginWide';

interface Props {
  title: string;
  content: string;
}

const Container = styled.View`
  width: ${d.width - d.px * 50}px;
  margin-left: ${d.px * 30}px;
  margin-right: ${d.px * 20}px;
`;

const CardPurpleRight = ({ title, content }: Props) => {
  return (
    <Container>
      <TextTitlePurpleRight title={title} />
      <MarginWide />
      <TextContentDarkRight content={content} />
    </Container>
  );
};

export default CardPurpleRight;

import * as React from 'react';
import styled from 'styled-components/native';
import { d, color } from '~/utils/constant';
import { View, Text } from 'react-native';
import TextTitlePurpleRight from '../text/TextTitlePurpleRight';
import TextContentDarkRight from '../text/TextContentDarkRight';
import MarginWide from '../margin/MarginWide';
import LineGrayRightLong from '../line/LineGrayRightLong';

interface Props {
  title: string;
  content: string;
}

const Container = styled.View`
  width: ${d.width - d.px * 50}px;
  margin-left: ${d.px * 30}px;
  margin-right: ${d.px * 20}px;
`;

const cardPurpleRight = ({ title, content }: Props) => {
  return (
    <Container>
      <TextTitlePurpleRight title={title} />
      <MarginWide />
      <TextContentDarkRight content={content} />
    </Container>
  );
};

export default cardPurpleRight;

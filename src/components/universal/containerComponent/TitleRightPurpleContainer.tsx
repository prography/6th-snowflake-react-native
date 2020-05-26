import * as React from 'react';
import styled from 'styled-components/native';
import { d, color } from '~/utils/constant';
import { View, Text } from 'react-native';
import TitleRightPurpleText from '../text/TitleRightPurpleText';

interface Props {
  title: string;
}

const Container = styled.View`
  width: ${d.width - d.px * 50}px;
  margin-left: ${d.px * 30}px;
  margin-right: ${d.px * 20}px;
`;

const TitleRightPurpleContainer = ({ title }: Props) => {
  return (
    <Container>
      <TitleRightPurpleText title={title} />
    </Container>
  );
};

export default TitleRightPurpleContainer;

import * as React from 'react';
import styled from 'styled-components/native';
import { d, c } from '~/utils/constant';
import { View, Text } from 'react-native';
import { withNavigation } from '@react-navigation/compat';
import ButtonLinkPurple from '~/components/universal/button/ButtonLinkPurple';

interface Props {
  title: string;
  link: string;
  buttonText: string;
}

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TextStyle = styled.Text`
  font-family: 'Jost-Bold';
  font-size: ${d.px * 20}px;
  text-align: left;
  color: ${c.black};
`;

const TextTitleDarkPurpleLink = ({ title, link, buttonText }: Props) => {
  return (
    <Container>
      <TextStyle>{title}</TextStyle>
      <ButtonLinkPurple buttonText={buttonText} link={link} />
    </Container>
  );
};

export default TextTitleDarkPurpleLink;

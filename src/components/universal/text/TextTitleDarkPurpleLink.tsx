import * as React from 'react';
import styled from 'styled-components/native';
import { d, c } from '~/utils/constant';
import ButtonLinkPurple from '~/components/universal/button/ButtonLinkPurple';

interface Props {
  title: string;
  stack: string;
  screen: string;
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
  line-height: ${d.px * 35}px;
  text-align: left;
  color: ${c.black};
`;

const TextTitleDarkPurpleLink = ({
  title,
  stack,
  screen,
  buttonText,
}: Props) => {
  return (
    <Container>
      <TextStyle>{title}</TextStyle>
      <ButtonLinkPurple buttonText={buttonText} stack={stack} screen={screen} />
    </Container>
  );
};

export default TextTitleDarkPurpleLink;

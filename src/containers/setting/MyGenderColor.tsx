import * as React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { d, BASE_URL, c, l } from '~/utils/constant';
import TextTitleDarkPurpleLink from '~/components/universal/text/TextTitleDarkPurpleLink';

const Container = styled.View`
  margin-left: ${l.mL}px;
  margin-right: ${l.mR}px;
`;

const MyGenderColor = () => {
  return (
    <Container>
      <TextTitleDarkPurpleLink
        title={'성별 색상 변경'}
        buttonText={'Gender Color'}
        stack={'JoinStack'}
        screen={'GenderColor'}
      />
      <Text>Gendercolor관련</Text>
    </Container>
  );
};

export default MyGenderColor;

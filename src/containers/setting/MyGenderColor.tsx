import * as React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { d, BASE_URL, c, l } from '~/utils/constant';
import TextTitleDarkPurpleLink from '~/components/universal/text/TextTitleDarkPurpleLink';
import GenderLoop from '~/components/universal/profile/GenderLoop';
import GenderCircle from '~/components/universal/profile/GenderCircle';
import MarginNarrow from '~/components/universal/margin/MarginNarrow';

const Container = styled.View`
  margin-left: ${l.mL}px;
  margin-right: ${l.mR}px;
`;

const GenderCircleContainer = styled.View`
  flex-direction: row;
`;

const OneGenderCircleWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: ${d.px * 20}px;
`;

const GenderColorText = styled.Text`
  font-family: Jost-Bold;
  color: ${c.darkGray};
`;

const MyGenderColor = () => {
  return (
    <Container>
      <TextTitleDarkPurpleLink
        title={'성별 색상'}
        buttonText={'변경하기'}
        stack={'JoinStack'}
        screen={'GenderColor'}
      />
      <MarginNarrow />
      <GenderCircleContainer>
        <OneGenderCircleWrapper>
          <GenderColorText>여성:</GenderColorText>
          <GenderCircle gender={'WOMAN'} size={30} who={true} />
        </OneGenderCircleWrapper>
        <OneGenderCircleWrapper>
          <GenderColorText>남성:</GenderColorText>
          <GenderCircle gender={'MAN'} size={30} who={true} />
        </OneGenderCircleWrapper>
      </GenderCircleContainer>
    </Container>
  );
};

export default MyGenderColor;

import * as React from 'react';
import styled from 'styled-components/native';
import { ScrollView } from 'react-native';
import { d, color } from '~/utils/constant';

const Container = styled.View`
  background-color: lightgray;
`;

const ReviewText = styled.Text`
  height: ${d.width * 0.35}px;
  width: ${d.width}px;
  padding: ${d.width * 0.05}px;
  color: ${color.grayDark};
  font-size: ${d.px * 14}px;
  font-weight: 500;
`;

const RegisterContainer = styled.View``;

const RegisterButton = styled.TouchableOpacity`
  height: ${d.width * 0.17}px;
  width: ${d.width}px;
  align-items: center;
  justify-content: center;
  background-color: ${color.mainLight};
`;

const RegisterText = styled.Text`
  font-weight: 300;
  font-size: ${d.px * 17}px;
  color: white;
`;

const ReviewRegisterContainer = (props) => {
  return (
    <Container>
      <ScrollView>
        <ReviewText>{props.reviewText.text}</ReviewText>
      </ScrollView>
      <RegisterContainer>
        <RegisterButton title={'등록하기'} onPress={() => alert('등록하기')}>
          <RegisterText>등록하기</RegisterText>
        </RegisterButton>
      </RegisterContainer>
    </Container>
  );
};

export default ReviewRegisterContainer;

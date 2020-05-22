import * as React from 'react';
import styled from 'styled-components/native';
import { ScrollView } from 'react-native';
import { device, color } from '~/utils/constant';

const Container = styled.View`
  background-color: lightgray;
`;

const ReviewText = styled.Text`
  height: ${device.width * 0.35}px;
  width: ${device.width}px;
  padding: ${device.width * 0.05}px;
  color: ${color.grayDark};
  font-size: ${device.px * 14}px;
  font-weight: 500;
`;

const RegisterContainer = styled.View``;

const RegisterButton = styled.TouchableOpacity`
  height: ${device.width * 0.17}px;
  width: ${device.width}px;
  align-items: center;
  justify-content: center;
  background-color: ${color.mainLight};
`;

const RegisterText = styled.Text`
  font-weight: 300;
  font-size: ${device.px * 17}px;
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

import React from 'react';
import { SafeAreaView, Text, ScrollView } from 'react-native';
import styled from 'styled-components';
import { device } from '../../utils/constant';

const Container = styled.View`
    height: ${device.width / 10}px
    width: 100%
    
    justify-content:center
`;

const Title = styled.Text`
  font-size: ${device.px * 18}px;
  font-weight: 600;
`;

const TitleText = (props) => {
  return (
    <Container>
      <Title>{props.title}</Title>
    </Container>
  );
};

export default TitleText;

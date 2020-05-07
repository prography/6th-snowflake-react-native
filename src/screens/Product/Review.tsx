import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
`;


export default () => {
    return (
        <Container>
            <Text>리뷰 화면</Text>
        </Container>
    
    )
}
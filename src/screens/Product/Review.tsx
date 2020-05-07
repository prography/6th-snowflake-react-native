import React from 'react';
import { SafeAreaView, Text, Image, Dimensions } from 'react-native';
import styled from 'styled-components/native';

const sWidth = Dimensions.get('screen').width;
const sHeight = Dimensions.get('screen').height;

const Container = styled.SafeAreaView`
    flex: 1;
`;

const Title = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: ${sHeight/20}px;
    width: ${sWidth}px;
`;

const TitleText = styled.Text`
    justify-content: center;
    font-weight: bold;
`;

const ImageContainer = styled.View`
    align-items: center;
    height: ${sHeight/20}px;
    width: ${sWidth}px;
`;

export default () => {
    return (
        <Container>
            <Title>
                <Image 
                    source={require('../../img/img1.jpeg')}
                    style={{width: sWidth/10, height: sHeight/20}}/>
                <TitleText>리뷰</TitleText>
                <Image 
                    source={require('../../img/img1.jpeg')}
                    style={{width: sWidth/10, height: sHeight/20}}/>
            </Title>
            <ImageContainer>
                <Image 
                        source={require('../../img/img1.jpeg')}
                        style={{width: sWidth/2, height: sWidth/2, borderRadius: sWidth/4, margin: 20}}/>
            </ImageContainer>
        </Container>
    
    )
}
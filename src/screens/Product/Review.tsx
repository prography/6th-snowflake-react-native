import React from 'react';
import { SafeAreaView, Text, Image, Dimensions } from 'react-native';
import styled from 'styled-components/native';

const sWidth = Dimensions.get('screen').width;
const sHeight = Dimensions.get('screen').height;

const Container = styled.SafeAreaView`
    flex: 1;
`;

const TitleContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: ${sHeight/20}px;
    width: ${sWidth}px;
`;

const TitleText = styled.Text`
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
`;

const ProductContainer = styled.View`
    border-bottom-width: 1px;
`;

const ImageShadow = styled.View`
    shadowColor: black;
    shadowOffset: {
        width: 0,
        height: 12,
    };
    shadowOpacity: 0.58;
    shadowRadius: 16.00;

    elevation: 24;
`

const ImageContainer = styled.View`
    align-items: center;
    height: ${sWidth/2}px;
    width: ${sWidth}px;
    margin-top: 20px;
    margin-bottom: 20px;
`;

const ProductInfoContainer = styled.View`
    align-items: center;
    height: ${sHeight/5}px;
    width: ${sWidth}px;
`;

const BrandName = styled.Text`
    font-size: 16px;
    margin-top: 15px;
`;

const ProductName = styled.Text`
    font-size: 22px;
    font-weight: bold;
    margin-top: 5px;
`;

const TotalScore = styled.Text`
    font-size: 30px;
    font-weight: bold;
    margin-top: 13px;
`;

const ScoreContainer = styled.View`
    width: ${sWidth}px;
    margin-top: 10px;
    flex-direction: row;
    justify-content: space-between;
`;

const ScoreInfo = styled.View`
    margin-left: ${sWidth/10}px;
    margin-right: ${sWidth/10}px;
    align-items: center;
`;

const ScoreTitle = styled.Text`
    font-size: 16px;
`;

const Score = styled.Text`
    font-size: 16px;
    margin-top: 7px;
`;

const ReviewContainer = styled.View`
    
`;

const ReviewListTitleContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 20px;
`;

const ReviewTitle = styled.Text`
    font-size: 20px;
    font-weight: bold;
`;

const ReviewFilter = styled.Text`
    font-size: 16px;
`;

const ReviewListContainer = styled.View`
    align-items: center;
`;

const ReviewListScrollContainer = styled.ScrollView`
`;

const ReviewBox = styled.View`
    height: ${sHeight/5.5}px;
    width: ${sWidth*0.8}px;
    margin-bottom: 20px;
    background-color: red;
`;


export default () => {
    return (
        <Container>
            <TitleContainer>
                <ImageShadow>
                    <Image 
                        source={require('../../img/img1.jpeg')}
                        style={{width: sWidth/10, height: sHeight/20}}/>
                </ImageShadow>
                <TitleText>리뷰</TitleText>
                <ImageShadow>
                    <Image 
                        source={require('../../img/img1.jpeg')}
                        style={{width: sWidth/10, height: sHeight/20}}/>
                </ImageShadow>
            </TitleContainer>
            <ProductContainer>
                <ImageContainer>
                    <ImageShadow>
                        <Image 
                                source={require('../../img/img1.jpeg')}
                                style={{width: sWidth/2, height: sWidth/2, borderRadius: sWidth/4}}/>
                    </ImageShadow>
                </ImageContainer>
                <ProductInfoContainer>
                    <BrandName>듀렉스</BrandName>
                    <ProductName>필 울트라씬</ProductName>
                    <TotalScore>4.71</TotalScore>
                    <ScoreContainer>
                        <ScoreInfo>
                            <ScoreTitle>얇기</ScoreTitle>
                            <Score>⭐x5</Score>
                        </ScoreInfo>
                        <ScoreInfo>
                            <ScoreTitle>얇기</ScoreTitle>
                            <Score>⭐x5</Score>
                        </ScoreInfo>
                        <ScoreInfo>
                            <ScoreTitle>얇기</ScoreTitle>
                            <Score>⭐x5</Score>
                        </ScoreInfo>
                    </ScoreContainer>
                </ProductInfoContainer>
            </ProductContainer>

            <ReviewContainer>
                <ReviewListTitleContainer>
                    <ReviewTitle>리뷰</ReviewTitle>
                    <ReviewFilter>최신등록순</ReviewFilter>
                </ReviewListTitleContainer>
                <ReviewListScrollContainer>
                    <ReviewListContainer>
                        <ImageShadow>
                            <ReviewBox></ReviewBox>
                        </ImageShadow>
                        <ImageShadow>
                            <ReviewBox></ReviewBox>
                        </ImageShadow>
                        <ImageShadow>
                            <ReviewBox></ReviewBox>
                        </ImageShadow>
                        <ImageShadow>
                            <ReviewBox></ReviewBox>
                        </ImageShadow>
                    </ReviewListContainer>
                </ReviewListScrollContainer>
            </ReviewContainer>
            
        </Container>
    
    )
}
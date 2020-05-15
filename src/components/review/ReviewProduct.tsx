import React from 'react';
import styled from 'styled-components';
import { device, color } from '../../utils/constant';

const Container = styled.View`
    height: ${device.width * 0.8}px
    width: ${device.width}px
    background-color: white;
    border-radius: 50px;
    shadow-color: "#000"
    shadow-offset: {
        width: 10,
        height: 10,
    }
    shadow-opacity: 0.6
    shadow-radius: 10
    elevation: 10
`;

const BackContainer = styled.View`
    height: ${device.width * 0.6}px;
    width: ${device.width}px;
    background-color: white;
    flex-direction: row;
`;

const ProductInfoContainer = styled.View`
    height: ${device.width * 0.45}px;
    width: ${device.width * 0.38}px;
    margin-top: ${device.width * 0.05}px;
    margin-left: ${device.width * 0.1}px;
`;

const RankNumText = styled.Text`
    color: ${color.grayDark};
    font-weight: 900;
    font-size: ${device.px * 13}px;
`;

const BrandText = styled.Text`
    color: ${color.grayLight};
    font-weight: 900;
    margin-top: ${device.width * 0.03}px;
    font-size: ${device.px * 16}px;
`;

const NameText = styled.Text`
    color: ${color.grayDark}
    font-weight: 900;
    margin-top: ${device.width * 0.02}px;
    font-size: ${device.px * 23}px;
`;

const ThreeInfoContainer = styled.View`
    margin-top: ${device.width * 0.04}px;
`;

const InfoText = styled.Text`
    color: ${color.grayLight};
    margin-top: ${device.width * 0.01}px;
`;

const TotalScoreText = styled.Text`
    color: ${color.grayDark};
    margin-top: ${device.width * 0.02}px;
    font-weight: 700;
    font-size: ${device.px * 42}px;
`;

const ImageContainer = styled.View`
    margin-top: ${device.width * 0.05}px;
`;

const Image = styled.Image`
    height: ${device.width * 0.52}px;
    width: ${device.width * 0.5}px;
    resize-mode: contain;
`;

const TrioScoreContainer = styled.View`
    height: ${device.width * 0.1}px;
    width: ${device.width}px;
    margin-top: ${device.width * 0.02}px;
    flex-direction: row;
    justify-content: space-around;
`;

const EachScoreContainer = styled.View`
    align-items: center;
`;

const ScoreTitle = styled.Text`
    margin-top: ${device.width * 0.01}px;
    color: ${color.grayDark};
    font-weight: 700;
    font-size: ${device.px * 15}px;
`;

const Score = styled.Text`
    color: ${color.grayDark};
    margin-top: ${device.width * 0.01}px;
    font-weight: 700;
    font-size: ${device.px * 13}px;
`;


const ReviewProduct = (props) => {
    return (
        <Container>
            <BackContainer>
                <ProductInfoContainer>
                    <RankNumText>
                        {props.rankInfo.style} {props.rankInfo.rank}위
                    </RankNumText>
                    <BrandText>
                        {props.productInfo.brand}
                    </BrandText>
                    <NameText>
                        {props.productInfo.name}
                    </NameText>
                    <ThreeInfoContainer>
                        <InfoText>길이 {props.productInfo.length}mm</InfoText>
                        <InfoText>폭 {props.productInfo.width}mm</InfoText>
                        <InfoText>두께 {props.productInfo.thickness}mm</InfoText>
                    </ThreeInfoContainer>
                    <TotalScoreText>
                        {props.score.totalScore}
                    </TotalScoreText>
                </ProductInfoContainer>
                <ImageContainer>
                    <Image source={require('../../img/ultraThin.png')}/>
                </ImageContainer>
            </BackContainer>
            <TrioScoreContainer>
                <EachScoreContainer>
                    <ScoreTitle>얇기</ScoreTitle>
                    <Score>{props.score.thinScore}</Score>
                </EachScoreContainer>
                <EachScoreContainer>
                    <ScoreTitle>내구성</ScoreTitle>
                    <Score>{props.score.durableScore}</Score>
                </EachScoreContainer>
                <EachScoreContainer>
                    <ScoreTitle>윤활제</ScoreTitle>
                    <Score>{props.score.slushScore}</Score>
                </EachScoreContainer>
            </TrioScoreContainer>
        </Container>
    );
};

export default ReviewProduct;
import React from 'react';
import styled from 'styled-components/native';
import { device, color } from '../../../utils/constant';

const Container = styled.SafeAreaView`
    
`;

const ContentContainer = styled.View`
    margin-top: ${device.px * 28}px;
    height: ${device.px * 396}px;
    width: ${device.px * 231}px;
    margin-left: ${device.px * 20}px;
    border-width: ${device.px * 2}px;
    border-color: ${color.grayLight};
`;

const TagContainer = styled.View`
    flex-direction: row;
`;

const TagBox = styled.View`
    margin-top: ${device.px * 17}px;
    margin-left: ${device.px * 13}px;
    margin-right: ${device.px * 4}px;
`;

const TagText = styled.Text`
    color: ${color.grayLight};
    font-weight: 700;
    font-size: ${device.px * 13}px;
`;

const DescContainer = styled.View`
    margin-top: ${device.px * 19}px;
    margin-left: ${device.px * 13}px;
`;

const DescText = styled.Text`
    padding: ${device.px * 3}px;
    font-weight: 600;
    font-size: ${device.px * 20}px;
    line-height: ${device.px * 35}px;
`;

const MoveBtn = styled.TouchableOpacity`
    height: ${device.px * 40}px;
    width: ${device.px * 93}px;
    background-color: black;
    border-color: ${color.grayLight};
    border-width: ${device.px}px;
    margin-top: ${device.px * 35}px;
    margin-left: ${device.px * 120}px;
    justify-content: center;
    align-items: center;
`;

const RelatedImage = styled.Image`
    margin-top: ${device.px * 152}px;
    margin-left: ${device.px * 116}px;
    height: ${device.px * 70}px;
    width: ${device.px * 137}px;
`;

const BtnText = styled.Text`
    font-size: ${device.px * 15}px;
    color: white;
`;

const ContentBox = ({content}) => {
    return(
        <Container>
            <ContentContainer>
               <TagContainer>
                    <TagBox>
                        <TagText>{content.tag1}</TagText>
                    </TagBox>
                    <TagBox>
                        <TagText>{content.tag2}</TagText>
                    </TagBox>
               </TagContainer>
               <DescContainer>
                   <DescText>
                        {content.desc}
                   </DescText>
               </DescContainer>
               <MoveBtn
                title={'이동버튼'}
                onPress={() => alert('이동')}
               >
                    <BtnText>{content.btnText}</BtnText>
               </MoveBtn>
               <RelatedImage
                source={require('../../../img/condom.png')}
               />
            </ContentContainer>
        </Container>
    );
};

export default ContentBox;
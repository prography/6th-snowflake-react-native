import * as React from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';
import { d, l, c } from '~/utils/constant';
import { Img } from '~/img';
const Container = styled.View`
  margin-right: ${l.mR}px;
  margin-left: ${l.mR}px;
  width: ${d.width - l.mR * 2}px;
  flex-direction: row;
  align-items: center;
`;
const PurpleHead = styled.Image`
  height: ${d.px * 23}px;
  width: ${d.px * 35}px;
  margin-right: ${d.px * 5}px;
`;
const SkyHead = styled.Image`
  height: ${d.px * 23}px;
  width: ${d.px * 35}px;
  margin-right: ${d.px * 5}px;
`;
const UserName = styled.Text`
  font-family: Jost-Medium;
  font-size: ${d.px*15}px;
  color:${c.lightGray};
`
const CommentInput = styled.View``
const CommentText = styled.Text``
const SaveComment = styled.TouchableOpacity``
const SaveText = styled.Text`` 

const SutraInfoWriteComment = () => {
  return (
    <>
      <Container>
   
        <PurpleHead
                  style={{ resizeMode: 'contain' }}
                  source={Img.sample.purpleCharacHead}
        />
        <UserName>지그레기</UserName>
        <CommentInput><CommentText>
          인풋창 생성 필요합니당...
        </CommentText></CommentInput>
        <SaveComment>
          <SaveText>작성</SaveText>
        </SaveComment>
      </Container>
    </>
  );
};

export default SutraInfoWriteComment;

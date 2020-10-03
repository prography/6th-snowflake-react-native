import * as React from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';
import { d, l, c } from '~/utils/constant';
import { useState } from 'react';

const Container = styled.View`
  margin-right: ${l.mR}px;
  margin-left: ${l.mR}px;
`;
const ImageContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const BookmarkContainer = styled.TouchableOpacity`
  position: absolute;
  width: ${d.px * 40}px;
  height: ${d.px * 45}px;
  top: ${-d.px * 1}px;
  margin-left: ${d.px * 10}px;

  align-items: center;
`;
const BookmarkImage = styled.Image`
  width: ${d.px * 33}px;
  height: ${d.px * 40}px;
`;
const SutraImage = styled.Image`
  width: ${d.px * 120}px;
  height: ${d.px * 120}px;
`;

const SutraInfoGoodBad = () => {
  const [bookmarked, setBookmarked] = useState(false);
  return (
    <>
      <Container>
        <ImageContainer>
          <SutraImage
            style={{ resizeMode: 'cover' }}
            source={require('~/img/sample/sutraSample.jpg')}
          />
          <BookmarkContainer activeOpacity={1}>
            {/* 찜했으면 보라색으로, 찜 안 한 건 하얀색으로 */}
            {bookmarked ? (
              <BookmarkImage
                style={{ resizeMode: 'contain' }}
                source={require('~/img/icon/iconBookmarkSelected.png')}
              />
            ) : (
              <BookmarkImage
                style={{ resizeMode: 'contain' }}
                source={require('~/img/icon/iconBookmarkUnselected.png')}
              />
            )}
          </BookmarkContainer>
        </ImageContainer>
      </Container>
    </>
  );
};

export default SutraInfoGoodBad;

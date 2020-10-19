import * as React from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';
import { d, l, c } from '~/utils/constant';
import { Img } from '~/img';
const Container = styled.View`
  margin-right: ${l.mR}px;
  margin-left: ${l.mR}px;
  width: ${d.width - l.mR * 2}px;
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
const SutraInfoComment = () => {
  return (
    <>
       <Container>
      
        <SkyHead
                  style={{ resizeMode: 'contain' }}
                  source={Img.sample.skyCharacHead}
      /> 
      
      </Container>
    </>
  );
};

export default SutraInfoComment;

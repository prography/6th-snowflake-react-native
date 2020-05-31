import * as React from 'react';
import {useState} from 'react';
import styled from 'styled-components/native';
import { withNavigation } from '@react-navigation/compat';
import { View, Text } from 'react-native';
import NavBar from '~/screens/NavBar';
import { c, d, l } from '~/utils/constant';
import TopBarWithIcon from '~/components/universal/topBar/TopBarRightIcon';
import NickNameInputForm from '~/components/universal/input/NickNameInputForm'

import MarginWide from '~/components/universal/margin/MarginWide';
import MarginNarrow from '~/components/universal/margin/MarginNarrow';
import BottomButtonLink from '~/components/universal/button/BottomButtonLink';
import Login from './Login';
import MarginMedium from '~/components/universal/margin/MarginMedium';
import YearInputForm from '~/components/universal/input/YearInputForm';

const Container = styled.View`
  flex:1
`;

const InputContainer = styled.View`
  flex: 1
  margin-right: ${l.mR}px;
  margin-left: ${l.mL}px;
`;

const JoinSecond = () => {
    return (
        <Container>
            
            <InputContainer>
                <TopBarWithIcon/>
                <NickNameInputForm/>
                <YearInputForm/>
            </InputContainer>
            
            <BottomButtonLink
                buttonText={'다음'}
                link={'JoinThird'}
            />
        </Container>
    );
};

export default JoinSecond;

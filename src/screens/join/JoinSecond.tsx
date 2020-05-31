import * as React from 'react';
import {useState} from 'react';
import styled from 'styled-components/native';
import { withNavigation } from '@react-navigation/compat';
import { View, Text } from 'react-native';
import NavBar from '~/screens/NavBar';
import { c, d, l } from '~/utils/constant';
import TopBarWithIcon from '~/components/universal/topBar/TopBarRightIcon';
import EmailInputForm from '~/components/universal/input/EmailInputForm'
import PasswdInputForm from '~/components/universal/input/PasswdInputForm';
import MarginWide from '~/components/universal/margin/MarginWide';
import MarginNarrow from '~/components/universal/margin/MarginNarrow';
import BottomButtonLink from '~/components/universal/button/BottomButtonLink';
import Login from './Login';
import {Picker} from '@react-native-community/picker';

const Container = styled.View`
  flex:1
`;

const InputContainer = styled.View`
  flex: 1
  margin-right: ${l.mR}px;
  margin-left: ${l.mL}px;
`;

const JoinSecond = () => {
    const [year, setyear] = useState("1997");
    return (
        <Container>
            
            <InputContainer>
                <TopBarWithIcon/>
                <EmailInputForm/>
                <Text>2번쨰</Text>

                <PasswdInputForm/>  
                <Picker
                selectedValue={year}
                style={{height: 50, width: 100}}
                onValueChange={(itemValue, itemIndex) =>
                    setyear(itemValue)
                }>
                <Picker.Item label="1995" value="1995" />
                <Picker.Item label="1996" value="1996" />
                <Picker.Item label="1997" value="1997" />
                <Picker.Item label="1998" value="1998" />
                <Picker.Item label="1999" value="1999" />
                <Picker.Item label="2000" value="2000" />
                <Picker.Item label="2001" value="2001" />
                <Picker.Item label="2002" value="2002" />
            </Picker> 
            </InputContainer>
            
            <BottomButtonLink
                buttonText={'다음'}
                link={'JoinThird'}
            />
        </Container>
    );
};

export default JoinSecond;

import * as React from 'react';
import { useState } from 'react'; 
import { TextInput } from 'react-native';
import styled from 'styled-components/native';
import { c, d, l } from '~/utils/constant';
import {Picker} from '@react-native-community/picker';

const YearInputContainer = styled.View`
    flex-direction: row;
`;

const YearText = styled.Text`
    font-family: 'Jost-Semi';
    font-size: ${d.px * 23}px;
    color: ${c.darkGray}
    margin-top: ${d.px * 84}px;
`;

// const InputContainer = styled.TextInput`
//     height: ${d.px * 28}px;
//     border-color: ${c.extraLightGray};
//     border-bottom-width: ${d.px * 2}px;
//     font-size: ${d.px * 23}px;
//     font-family: 'Jost-Light'
// `;

const YearInputForm = () => {   
    const labelStyle = {
        height: d.px*50,
        width: d.px*100
    };
    const [year, setyear] = useState("1997");

    return(
        <YearInputContainer>
            <Picker
                selectedValue={year}
                style={labelStyle}
                onValueChange={(itemValue, itemIndex) => setyear(itemValue)}>
                <Picker.Item label="1995" value="1995" />
                <Picker.Item label="1996" value="1996" />
                <Picker.Item label="1997" value="1997" />
                <Picker.Item label="1998" value="1998" />
                <Picker.Item label="1999" value="1999" />
                <Picker.Item label="2000" value="2000" />
                <Picker.Item label="2001" value="2001" />
                <Picker.Item label="2002" value="2002" />
            </Picker> 
            <YearText>년생이에요.</YearText>
        </YearInputContainer>
    )
}

export default YearInputForm;

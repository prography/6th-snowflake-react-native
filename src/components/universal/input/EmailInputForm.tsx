import * as React from 'react';
import { useState } from 'react'; 
import { TextInput } from 'react-native';
import styled from 'styled-components/native';
import { c, d, l } from '~/utils/constant';

const EmailText = styled.Text`
    font-family: 'Jost-Semi'
    font-size: ${d.px * 15}px;
    color: ${c.darkGray}
    margin-top: ${d.px * 20.6}px;
`;

const InputContainer = styled.TextInput`
    height: ${d.px * 28}px;
    border-color: ${c.extraLightGray};
    border-bottom-width: ${d.px * 2}px;
    margin-top: ${d.px * 13}px;
    font-size: ${d.px * 23}px;
    font-family: 'Jost-Light'
`;

const EmailInputForm = () => {
    const [isFocused, setFocused] = useState(false);
    const handlefocus = () => {setFocused(true)};
    const handleblur = () => {setFocused(false)};
    const labelStyle = {
        color: !isFocused ? c.darkGray : c.black,
        borderColor: !isFocused ? c.lightGray : c.purple
    };
    
    return(
        <>
            <EmailText>이메일</EmailText>
            <InputContainer
                style={labelStyle}
                placeholder="이메일 입력"
                // onChangeText={text => onChangeText(text)}
                // value={value}
                onFocus={handlefocus}
                onBlur={handleblur}
                blurOnSubmit
            />
        </>
    )
}

export default EmailInputForm;
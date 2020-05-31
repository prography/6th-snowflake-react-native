import * as React from 'react';
import { useState } from 'react'; 
import { TextInput } from 'react-native';
import styled from 'styled-components/native';
import { c, d, l } from '~/utils/constant';

const NickNameContainer = styled.View`
    flex-direction: row;
    margin-top: ${d.px * 26.6}px;
`;

const NickNameText = styled.Text`
    font-family: 'Jost-Semi';
    font-size: ${d.px * 23}px;
    color: ${c.darkGray}
`;

const InputContainer = styled.TextInput`
    height: ${d.px * 28}px;
    border-color: ${c.extraLightGray};
    border-bottom-width: ${d.px * 2}px;
    font-size: ${d.px * 23}px;
    font-family: 'Jost-Light'
`;

const NickNameInputForm = () => {
    const [isFocused, setFocused] = useState(false);
    const handlefocus = () => {setFocused(true)};
    const handleblur = () => {setFocused(false)};
    const labelStyle = {
        color: !isFocused ? c.darkGray : c.black,
        borderColor: !isFocused ? c.lightGray : c.purple
    };
    
    return(
        <NickNameContainer>
            <NickNameText>닉네임은 </NickNameText>
            <InputContainer
                style={labelStyle}
                placeholder="2~10자"
                // onChangeText={text => onChangeText(text)}
                // value={value}
                onFocus={handlefocus}
                onBlur={handleblur}
                blurOnSubmit
            />
            <NickNameText>,</NickNameText>
        </NickNameContainer>
    )
}

export default NickNameInputForm;
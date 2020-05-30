import * as React from 'react';
import { useState } from 'react'; 
import { TextInput } from 'react-native';
import styled from 'styled-components/native';
import { c, d, l } from '~/utils/constant';

const InputContainer = styled.TextInput`
    height: ${d.px * 28}px;
    border-color: ${c.extraLightGray};
    border-bottom-width: ${d.px * 3}px;
`;

const EmailInput = () => {
    const [value, onChangeText] = useState('');
    
    return(
        <InputContainer
            placeholder="이메일 입력"
            onChangeText={text => onChangeText(text)}
            value={value}
        />
    )
}

export default EmailInput;
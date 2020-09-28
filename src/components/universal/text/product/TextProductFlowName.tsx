import * as React from 'react';
import styled from 'styled-components/native';
import { d, c } from '~/utils/constant';
import TextTicker from 'react-native-text-ticker'

interface Props {
    productName: string;
}

const Container = styled.View`
    justify-content: center;
    margin-right: ${d.px * 2}px;
`;

const TextStyle = styled.Text`
  font-family: 'Jost-Semi';
  line-height: ${d.px * 23}px;
  font-size: ${d.px * 15}px;
  text-align: left;
  color: ${c.black};
`;

const TextProductFlowName = ({ productName }: Props) => {
    return (
        <Container>
            <TextTicker
                duration={3000}
                loop
                bounce
                repeatSpacer={50}
                marqueeDelay={1000}
            >
                <TextStyle>{productName}</TextStyle>
            </TextTicker>
        </Container>
    )
};

export default TextProductFlowName;

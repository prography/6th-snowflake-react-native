import * as React from 'react';
import styled from 'styled-components/native';

import { d, c, l } from '~/utils/constant';

const Container = styled.View`
  width: ${d.width - l.mR * 2}px;
  height: ${d.px * 1}px;
  border-width: ${d.px * 0.5}px;
  border-color: ${(props) => (props.focused ? c.purple : c.extraLightGray)};
`;

interface Props {
  focused: boolean;
}

const LinePurpleWhenFocused = ({ focused }: Props) => {
  return <Container focused={focused} />;
};
export default LinePurpleWhenFocused;

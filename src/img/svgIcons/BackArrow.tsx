import * as React from 'react';
import Back_Arrow from '~/img/svgIcons/svgFiles/back_arrow.svg';
import {Img} from '~/img'

const BackArrow = () =>{
    const ICON_WIDTH = Img.iconWidthSize.small
    const ICON_HEIGHT = ICON_WIDTH /73 *43
    return (
        <Back_Arrow width={ICON_WIDTH} height={ICON_HEIGHT}/>
    );
};

export default BackArrow;
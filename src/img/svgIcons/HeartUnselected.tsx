import * as React from 'react';
import Heart_Unselected from '~/img/svgIcons/svgFiles/heart_unselected.svg';
import {Img} from '~/img'

const HeartUnselected = () =>{
    const ICON_WIDTH = Img.iconWidthSize.medium
    const ICON_HEIGHT = ICON_WIDTH /72 *62
    return (
        <Heart_Unselected width={ICON_WIDTH} height={ICON_HEIGHT}/>
    );
};

export default HeartUnselected;
import * as React from 'react';
import Heart_Selected from '~/img/svgIcons/svgFiles/heart_selected.svg';
import {Img} from '~/img'

const HeartSelected = () =>{
    const ICON_WIDTH = Img.iconWidthSize.small
    const ICON_HEIGHT = ICON_WIDTH /72 *62
    return (
        <Heart_Selected width={ICON_WIDTH} height={ICON_HEIGHT}/>
    );
};

export default HeartSelected;
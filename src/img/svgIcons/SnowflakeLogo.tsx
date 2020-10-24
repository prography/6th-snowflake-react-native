import * as React from 'react';
import Snowflake_Logo from '~/img/svgIcons/svgFiles/snowflakeLogo.svg';
import {Img} from '~/img'

const SnowflakeLogo = () =>{
    const ICON_WIDTH = Img.iconWidthSize.big
    const ICON_HEIGHT = ICON_WIDTH
    return (
        <Snowflake_Logo width={ICON_WIDTH} height={ICON_HEIGHT}/>
    );
};

export default SnowflakeLogo;
import * as React from 'react';
import Search_Glass from '~/img/svgIcons/svgFiles/search_glass.svg';
import {Img} from '~/img'

const SearchGlass = () =>{
    const ICON_WIDTH = Img.iconWidthSize.extraSmall
    const ICON_HEIGHT = ICON_WIDTH /72 *62
    return (
        <Search_Glass width={ICON_WIDTH} height={ICON_HEIGHT}/>
    );
};

export default SearchGlass;
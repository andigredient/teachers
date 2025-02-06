import { FC } from 'react';
import {imageLink} from '../../DATA/DATA';
import { SliderUIProps, TPhoto, TSlider } from 'src/components/slider/type';

//import { TImageLink } from 'src/utils/type';

import { SliderPhotoUI } from '../ui/sliderPhoto'

export const SliderPhoto: FC<TSlider> = ({photo, onState}) => {

return <SliderPhotoUI 
        photo = {photo} 
        onState = {onState}
        />;
};

import { FC } from 'react';
import {imageLink} from '../../DATA/DATA';
//import { TImageLink } from 'src/utils/type';

import { SliderUI } from '../ui/slider';

export const Slider: FC = () => {

return <SliderUI imageLink = {imageLink}/>;
};

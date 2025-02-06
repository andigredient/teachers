import { FC } from 'react';

import { Biografy } from '../../components'
import { Achievements } from '../../components';
import { Slider } from '../../components';

export const MainInfo: FC = () => {


    return (
        <>
        <Biografy />
        <Achievements />
        <Slider />
        </>
    )
};
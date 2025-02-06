import React, { FC } from 'react';
import styles from './slider.module.css';
import clsx from 'clsx';
import { TImageLink } from 'src/utils/type';
import { SliderUIProps } from 'src/components/slider/type';
import { SliderPhoto } from '../../sliderPhoto'
import { useState } from 'react';


export const SliderUI: FC<SliderUIProps> = ({imageLink}) => {
    const [state, onState] = useState(imageLink[0].link)
    return (
        <div className={styles.main}>
            <img className={styles.mainImg} src = {state} />
            <ul className={styles.photos}>
                {imageLink.map((photo) => (
                <SliderPhoto photo = {photo.link} onState = {onState} />                 
                ))} 
            </ul>
        </div>
    );
};

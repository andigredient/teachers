import React, { FC, ReactElement, SyntheticEvent } from 'react';
import styles from './sliderPhoto.module.css';
import clsx from 'clsx';
import { TImageLink } from 'src/utils/type';
import { SliderUIProps, TPhoto } from 'src/components/slider/type';


export const SliderPhotoUI: FC<TPhoto> = ({photo, onState}) => {
console.log("aaaa")

    function onClick(event:any) {
        event.preventDefault();
        event.stopPropagation();
        console.log(event.target);
        onState(event.target.src) 
    }


    return (
        <li className={styles.listItem}>  
                <img onClick={onClick} className={styles.photo} src={photo} />              
        </li>                 
    );
};

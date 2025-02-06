import React, { FC } from 'react';
import styles from './achievements.module.css';
import clsx from 'clsx';

import achievment from '../../../images/achievement_1.jpg'

export const AchievementsUI: FC = () => (
    <div className="achievment">
        <h2 className={styles.title}>ДОСТИЖЕНИЯ</h2>
        <div className={styles.description}>
            <img className={styles.img} src={achievment} />
            <p className="achievment__content_description_p font_ubuntu">2020 год, Федеральное государственное бюджетное образовательное учреждение высшего образования «Пензенский государственный университет» г. Пенза, номер диплома: 105832 0002801, направление подготовки 44.04.01 Педагогическое образование, квалификация – магистр.</p>
        </div>
    </div>
);
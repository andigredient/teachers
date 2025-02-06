import React, { FC } from 'react';
import styles from './biografy.module.css';
import clsx from 'clsx';

import biografy from '../../../images/biografy.png'

export const BiografyUI: FC = () => (
    <div className={styles.biografy}>
        <div className={styles.content}>
            <div className="biografy__content_text">
                <h3 className={styles.name}>ЕНДУЛОВА Ольга Николаевна</h3>
                <p className="biografy__content_p font_ubuntu">Закончила Пензенский педагогический университет. Работаю учителем математики. Стаж работы 17 лет. Первая квалификационная категория. Тема по самообразованию: "Деятельностный подход в обучении математики". Мои жизненные принципы-любить, понимать, принимать, сострадать, помогать. В свободное время люблю читать.</p>
            </div>
            <img className={styles.img} src={biografy} />
        </div>        
    </div>
);

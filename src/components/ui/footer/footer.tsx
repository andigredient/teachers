import React, { FC } from 'react';
import styles from './footer.module.css';
import clsx from 'clsx';

import biografy from '../../../images/biografy.png'

export const FooterUI: FC = () => (
    <div className={styles.footer}>
        <div className={styles.footerMenu}>
            <ul className={styles.footerList}>
                <li className={styles.footerListItem}>Главная</li>
                <li className={styles.footerListItem}>О себе</li>
            </ul>

            <ul className={styles.footerList}>
                <li className={styles.footerListItem + ' ' + styles.footerListItemBold}>Ученикам</li>
                <li className={styles.footerListItem}>Подготовка к ОГЭ</li>
                <li className={styles.footerListItem}>Подготовка к ЕГЭ</li>
                <li className={styles.footerListItem}>Подготовка к урокам</li>
                <li className={styles.footerListItem}>Задания на свободные часы</li>
            </ul>

            <ul className={styles.footerList}>
                <li className={styles.footerListItem  + ' ' + styles.footerListItemBold}>Родителям</li>
                <li className={styles.footerListItem}>Памятки</li>
                <li className={styles.footerListItem}>Родительское собрание</li>
            </ul>

            <ul className={styles.footerList}>
                <li className={styles.footerListItem  + ' ' + styles.footerListItemBold}>Полезные ссылки</li> 
            </ul>

            <ul className={styles.footerList}>
                <li className={styles.footerListItem  + ' ' + styles.footerListItemBold}>Классное руководство</li>
                <li className={styles.footerListItem}>Наша классная жизнь</li>
                <li className={styles.footerListItem}>Актив класса</li>
                <li className={styles.footerListItem}>Расписание уроков</li>
            </ul>

            <ul className={styles.footerList}>
                <li className={styles.footerListItem  + ' ' + styles.footerListItemBold}>Связаться со мной</li>  
            </ul>

            


        </div>            
    </div>
);

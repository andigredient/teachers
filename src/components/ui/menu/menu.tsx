import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import styles from './menu.module.css';

import { useState } from 'react';


export const MenuUI: FC = () => {
    const [open, setOpen] = useState(false)
    console.log(open);

    window.addEventListener("scroll", onScroll)
    
    function onScroll () {
        if (scrollY >= window.innerHeight) 
        {
            setOpen(true);
        }
        else
        {
            setOpen(false);
        }
    }

    const menuStyle = clsx({
        [styles.nav] : true, // будет добавлен всегда
        [styles.navFixed] : open // будет добавлен только когда open === true
    })

return (
    <nav className={menuStyle}>
        <ul className={styles.navList}>
            <li className={styles.navListRouter}>
            <Link className={styles.linkNoUnderline} to="/">
                    <button className={styles.dropdownButton}>Главная</button>
                </Link>
            </li>

            <li className={styles.navListRouter}>
                <Link className={styles.linkNoUnderline} to="/students">
                    <button className={styles.dropdownButton}>Ученикам</button>
                </Link>
                <ul className={styles.subMenuList}>
                    <li className={styles.subMenuListRouter}>Подготовка к ЕГЭ</li>
                    <li className={styles.subMenuListRouter}>Подготовка к ОГЭ</li>
                    <li className={styles.subMenuListRouter}>Подготовка к урокам</li>                
                    <li className={styles.subMenuListRouter}>Задания на свободные часы</li>              
                </ul>                
            </li>

            <li className={styles.navListRouter}>
            <Link className={styles.linkNoUnderline} to="/students">
                    <button className={styles.dropdownButton}>Родителям</button>
                </Link>
                <ul className={styles.subMenuList}>
                    <li className={styles.subMenuListRouter}>Памятки</li>
                    <li className={styles.subMenuListRouter}>Родительское собрание</li>             
                </ul>

            </li>
            <li className={styles.navListRouter}>
            <Link className={styles.linkNoUnderline} to="/students">
                    <button className={styles.dropdownButton}>Полезные ссылки</button>
                </Link>
            </li>

            <li className={styles.navListRouter}>
            <Link className={styles.linkNoUnderline} to="/students">
                    <button className={styles.dropdownButton}>Классное руководство</button>
                </Link>
                <ul className={styles.subMenuList}>
                    <li className={styles.subMenuListRouter}>Наша классная жизнь</li>
                    <li className={styles.subMenuListRouter}>Актив класса</li>
                    <li className={styles.subMenuListRouter}>Расписание уроков</li>                
                </ul>
            </li>

            <li className={styles.navListRouter}>
                <Link className={styles.linkNoUnderline} to="/students">
                    <button className={styles.dropdownButton}>Связаться со мной</button>
                </Link>
            </li>
        </ul>
    </nav>

    
);

}
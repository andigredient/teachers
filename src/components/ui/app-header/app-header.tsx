import React, { FC } from 'react';
import styles from './app-header.module.css';
import clsx from 'clsx';

export const AppHeaderUI: FC = () => (
    <header className={styles.header}>
        <div className={styles.title}>
            <h2 className={styles.special}>math teacher</h2>
            <h1 className={styles.name}>ENDULOVA Olga Nikolaevna</h1>
        </div>
    </header>
);


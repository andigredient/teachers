
import { MainInfo } from '../../pages/main-info';
import { Students } from '../../pages/students';

import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';
import { Routes, Route } from 'react-router-dom';


//import './styles/index.scss';
import '../../index.css';
import styles from './app.module.css';
import { AppHeader } from '../app-header';
import { Menu } from '../menu'
import { Footer } from '../footer'




const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {


    return (
        <>
            <AppHeader />            
            <Menu />            
            <main className={styles.main}>
                <Routes>
                    <Route path="/" element={<MainInfo/>} />
                    <Route path="/students" element={<Students/>} />
                </Routes>          
            </main>
            <footer>
                <Footer />
            </footer>

        </>


        

    );
        
    
};
export default App;

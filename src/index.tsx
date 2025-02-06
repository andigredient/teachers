import React from 'react';
import { StrictMode, CSSProperties, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import * as ReactDOMClient from 'react-dom/client';
import App from './components/app/app';



const container = document.getElementById('root') as HTMLElement;
const root = ReactDOMClient.createRoot(container!);

root.render(
<StrictMode>
        <BrowserRouter>
                <App />
        </BrowserRouter>
</StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import "reset-css"
import "@/assets/style/global.scss"
import App from './App';
import {BrowserRouter} from "react-router-dom"

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Expenses from './routes/expenses';
import Invoices from './routes/invoices';
import Layer from './Layer';
import Hooks from './routes/hooks';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>} />
            <Route path="expenses" element={<Expenses />} />
            <Route path="invoices" element={<Invoices />}/>
            <Route path="hooks" element={<Hooks />}/>
            <Route path="*" element={
                <main style={{ padding: "1rem" }}>
                    <p>There's nothing here</p>
                </main>
            }/>
        </Routes>
        <Layer />
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

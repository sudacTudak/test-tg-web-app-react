import React, { useEffect } from 'react';
import './App.scss';
import { Button } from './components/Button/Button';
import { Header } from './layout/Header/Header';
const tg = (window as any).Telegram?.WebApp;

function App() {

    useEffect(() => {
        tg.ready();
    }, [])

    return (
        <div className="app">
            <Header/>
            <div className='container'>
            </div>
        </div>
    );
}

export default App;

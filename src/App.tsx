import React, { useEffect } from 'react';
import './App.scss';
import { Button } from './components/Button/Button';
import { useTelegram } from './hooks/use-telegram';
import { Header } from './layout/Header/Header';

function App() {
    const { tg, onToggleButton } = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [])

    return (
        <div className="app">
            <Header/>
            <div className='container'>
                <Button text='toggle' onClick={onToggleButton}/>
            </div>
        </div>
    );
}

export default App;

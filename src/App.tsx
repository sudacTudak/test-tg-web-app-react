import React, { useEffect } from 'react';
import './App.scss';
const tg = (window as any).Telegram?.WebApp;

function App() {

    useEffect(() => {
        tg.ready();
    }, [])

    const onClose = () => {
        tg.close()
    }

    return (
        <div className="app">
            <div className='container'>
                <button onClick={onClose}>Закрыть</button>
            </div>
        </div>
    );
}

export default App;

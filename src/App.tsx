import React, { useEffect } from 'react';
import './App.scss';
import { Button } from './components/Button/Button';
import { useTelegram } from './hooks/use-telegram';
import { Header } from './layout/Header/Header';
import { Route, Routes } from 'react-router-dom';
import { ProductList } from './components/ProductList/ProductList';
import { Form } from './components/Form/Form';

function App() {
    const { tg, onToggleButton } = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [])

    return (
        <div className="app">
            <Header/>
            <div className='container'>
                <Routes>
                    <Route index element={<ProductList/>}/>
                    <Route path={'form'} element={<Form/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;

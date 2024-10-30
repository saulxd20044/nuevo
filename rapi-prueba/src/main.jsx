import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Inicio from './Inicio';
import App from './App';
import FormularioEvaluacion from './components/FormularioEvaluacion';
import Header from './components/Header';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <HashRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/login" element={<App />} />
                <Route path="/form" element={<FormularioEvaluacion />}/>
            </Routes>

        </HashRouter>
    </React.StrictMode>
);

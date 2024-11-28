import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Inicio from './Inicio';
import App from './App';
import FormularioEvaluacion from './components/FormularioEvaluacion';
import Header from './components/Header';
import Usuario from './Usuario'; // Cambié el nombre para evitar confusión con el componente Rapimoney.

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <HashRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/login" element={<App />} />
                <Route path="/form" element={<FormularioEvaluacion />} />
                <Route path="/dashboard" element={<Usuario />} /> {/* Renderiza Usuario */}
            </Routes>
        </HashRouter>
    </React.StrictMode>
);

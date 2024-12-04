import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Inicio from './Inicio';
import App from './App';
import FormularioEvaluacion from './components/FormularioEvaluacion';
import Usuario from './usuario';
import Persona from './Persona';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <HashRouter>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/login" element={<App />} />
                <Route path="/form" element={<FormularioEvaluacion />} />
                <Route path="/dashboard" element={<Usuario />} /> {/* Renderiza Usuario */}
                <Route path="/persona" element={<Persona/>}/>

            </Routes>
        </HashRouter>
    </React.StrictMode>
);

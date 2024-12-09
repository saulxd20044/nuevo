import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './Inicio';
import App from './App';
import FormularioEvaluacion from './components/FormularioEvaluacion';
import Usuario from './usuario';
import Persona from './Persona';
import LoanDetailPage from './components/pages/LoandDetailPage';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/login" element={<App />} />
                <Route path="/form" element={<FormularioEvaluacion />} />
                <Route path="/dashboard" element={<Usuario />} /> {/* Renderiza Usuario */}
                <Route path="/persona" element={<Persona/>}/>
                <Route path="/loanDetails/:loanId" element={<LoanDetailPage/>}/>

            </Routes>
        </Router>
    </React.StrictMode>
);

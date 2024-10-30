// components/LoginForm.js
import React from 'react';

function LoginForm() {
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        console.log('Iniciando sesión...');
    };

    return (
        <form className="formulario__login" onSubmit={handleLoginSubmit}>
            <h2>Iniciar sesión</h2>
            <input type="text" placeholder="Correo Electronico" required />
            <input type="password" placeholder="Contraseña" required />
            <button type="submit">Entrar</button>
        </form>
    );
}

export default LoginForm;

// components/RegisterForm.js
import React from 'react';


function RegisterForm() {
    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        console.log('Registrando usuario...');
    };

    return (
        <form className="formulario__register" onSubmit={handleRegisterSubmit}>
            <h2>Registrate</h2>
            <input type="text" placeholder="Nombre completo" required />
            <input type="email" placeholder="Correo Electronico" required />
            <input type="text" placeholder="Usuario" required />
            <input type="password" placeholder="Contraseña" required />
            <button type="submit">Registrarse</button>
        </form>
    );
}

export default RegisterForm;

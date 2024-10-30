// components/ToggleBox.js
import React from 'react';

function ToggleBox({ isLoginForm, isWideScreen, mostrarLogin, mostrarRegistro }) {
    return (
        <div className="caja__trasera">
            <div className="caja__trasera-login"
                 style={{ display: isWideScreen || !isLoginForm ? 'block' : 'none' }}>
                <h3>¿Ya tienes una cuenta?</h3>
                <p>Inicia sesión para entrar a la página</p>
                <button onClick={mostrarLogin}>Iniciar sesión</button>
            </div>
            <div className="caja__trasera-register"
                 style={{ display: isWideScreen || isLoginForm ? 'block' : 'none' }}>
                <h3>¿Aún no tienes una cuenta?</h3>
                <p>Regístrate para que puedas iniciar sesión</p>
                <button onClick={mostrarRegistro}>Registrarse</button>
            </div>
        </div>
    );
}

export default ToggleBox;

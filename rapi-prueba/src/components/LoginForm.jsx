import React , { useState }from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const navigate = useNavigate();
    const END_POINT_CREATE = "http://localhost:8080/api/v1/auth/login"

    const handleLoginSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = Object.fromEntries(new FormData(e.target));
            console.log(data);

            const response = await fetch(END_POINT_CREATE, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                console.error("Error al iniciar sesión:", response.statusText);
                alert("Error al iniciar sesión. Por favor verifica tus datos.");
                return;
            }

            const customerData = await response.json();
            console.log("Customer Data:", customerData);

            localStorage.setItem('customerData', JSON.stringify(customerData));

            // Redirección al componente Rapimoney
            navigate('/dashboard');
            
        } catch (error) {
            console.error("Error en la solicitud:", error);
            alert("Ocurrió un problema al conectar con el servidor.");
        }
    };

    return (
        <form className="formulario__login" onSubmit={handleLoginSubmit}>
            <h2>Iniciar sesión</h2>
            <input type="text" placeholder="Correo Electronico" name='email' required />
            <input type="password" placeholder="Contraseña" name='password' required />
            <button type="submit">Entrar</button>
        </form>
    );
}

export default LoginForm;
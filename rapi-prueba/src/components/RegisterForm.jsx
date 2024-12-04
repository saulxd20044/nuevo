// components/RegisterForm.js
import React from 'react';


function RegisterForm() {

    const ENP_POINT_REGISTER_USER = 'http://localhost:8080/api/v1/auth/register'

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();

        const data = Object.fromEntries(new FormData(e.target))

        console.log(data)
        try {
            const response = await fetch(ENP_POINT_REGISTER_USER, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                console.error("Error en el registro:", response.statusText);
                alert("Error al registrarse. Verifica tus datos e inténtalo de nuevo.");
                return;
            }

            const userData = await response.json();
            console.log("Registro exitoso:", userData);

            alert("¡Registro exitoso!");
        } catch (error) {
            console.error("Error en la solicitud:", error);
            alert("Ocurrió un problema al conectar con el servidor.");
        }

    };

    return (
        <form className="formulario__register" onSubmit={handleRegisterSubmit}>
            <h2>Registrate</h2>
            <input type="text" placeholder="Nombre" name="username" required />
            <input type="text" placeholder="Apellido" name="lastName" required />
            <input type="email" placeholder="Correo Electrónico" name="email" required />
            <input type="password" placeholder="Contraseña" name="password" required />
            <input type="text" placeholder="Teléfono" name="phone" required />
            <input type="text" placeholder="Dirección" name="address" required />
            <button type="submit">Registrarse</button>
        </form>
    );
}

export default RegisterForm;

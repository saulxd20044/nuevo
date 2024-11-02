import React, { useState } from 'react';
import '../styles/SimuladorPrestamo.css'; // Importar los estilos

const SimuladorPrestamo = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    dni: '',
    monto: '',
    plazo: '',
    email: '',
    aceptaTerminos: false,
  });

  const ENP_POINT_REGISTER_USER = 'http://localhost:8080/api/v1/simulateLoan'

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target))

    console.log(data)

    try {
      
      if (!formData.aceptaTerminos) {
        alert('Debes aceptar los términos y condiciones.');
        return;
      }

      await fetch(ENP_POINT_REGISTER_USER, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      alert('Solicitud enviada exitosamente.');


    } catch (error) {
      console.error("Error en la solicitud:", error);
      alert("Ocurrió un problema al conectar con el servidor.");
    }


  };

  return (
    <div className="simulador-container">
      <h1>Simulador de Préstamo</h1>
      <form className="simulador-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre y Apellido"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="dni"
          placeholder="N° DNI"
          value={formData.dni}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="amount"
          placeholder="Monto del Préstamo"
          value={formData.amount}
          onChange={handleChange}
          required
        />
        <select name="installments" value={formData.installments} onChange={handleChange} required>
          <option value="" disabled>Seleccione el plazo</option>
          <option value="3">3 meses</option>
          <option value="6">6 meses</option>
          <option value="12">12 meses</option>
        </select>
        <input
          type="email"
          name="email"
          placeholder="Correo Electrónico"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <div className="terms">
          <input
            type="checkbox"
            id="terms"
            name="aceptaTerminos"
            checked={formData.aceptaTerminos}
            onChange={handleChange}
            required
          />
          <label htmlFor="terms">He leído y acepto los <a href="#">T&C y las políticas de privacidad</a></label>
        </div>
        <button type="submit">Solicitar Préstamo</button>
      </form>
    </div>
  );
};

export default SimuladorPrestamo;

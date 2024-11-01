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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.aceptaTerminos) {
      alert('Debes aceptar los términos y condiciones.');
      return;
    }
    alert('Solicitud enviada exitosamente.');
  };

  return (
    <div className="simulador-container">
      <h1>Simulador de Préstamo</h1>
      <form className="simulador-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="nombre" 
          placeholder="Nombre y Apellido" 
          value={formData.nombre} 
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
          name="monto" 
          placeholder="Monto del Préstamo" 
          value={formData.monto} 
          onChange={handleChange} 
          required 
        />
        <select name="plazo" value={formData.plazo} onChange={handleChange} required>
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

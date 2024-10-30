import React, { useState } from 'react';
import debitocard from '../images/debitocard.png';
import creditcard from '../images/creditcard.png';

const styles = {
  formWrapper: {
    width: '100%',
    maxWidth: '400px',
    padding: '20px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff',
    borderRadius: '15px',
    margin: '0 auto',
    animation: 'fadeIn 0.8s ease-in-out'
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    color: 'rgb(69, 129, 143)',
    fontWeight: 600
  },
  input: {
    width: '100%',
    padding: '12px',
    marginBottom: '15px',
    border: '2px solid rgb(69, 129, 143)',
    borderRadius: '8px',
    outline: 'none',
    fontSize: '16px',
    transition: 'border-color 0.3s'
  },
  select: {
    width: '100%',
    padding: '12px',
    marginBottom: '15px',
    border: '2px solid rgb(69, 129, 143)',
    borderRadius: '8px',
    outline: 'none',
    fontSize: '16px',
    transition: 'border-color 0.3s'
  },
  button: {
    width: '100%',
    padding: '15px',
    backgroundColor: '#0984e3',
    color: 'white',
    fontSize: '18px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  },
  errorMessage: {
    backgroundColor: '#ff7675',
    color: 'white',
    padding: '10px',
    borderRadius: '8px',
    marginBottom: '15px',
    textAlign: 'center'
  },
  cardOptions: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '15px',
    gap: '20px'
  },
  card: {
    position: 'relative',
    cursor: 'pointer'
  },
  cardImage: {
    borderRadius: '10px',
    transition: 'transform 0.3s, box-shadow 0.3s',
    width: '100%',
    height: 'auto'
  },
  cardImageSelected: {
    transform: 'scale(1.1)',
    boxShadow: '0 0 10px rgba(9, 132, 227, 0.3)'
  },
  radioInput: {
    position: 'absolute',
    opacity: 0
  },
  terms: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
    gap: '10px'
  },
  checkbox: {
    width: 'auto',
    marginRight: '10px'
  },
  labelText: {
    textAlign: 'center',
    marginBottom: '15px',
    color: '#2d3436'
  }
};

// Añadimos los keyframes para la animación
const keyframes = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const FormularioEvaluacion = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    numCelular: '',
    ingresos: '',
    banco: '',
    tipoTarjeta: '',
    aceptaTerminos: false
  });

  const [error, setError] = useState('');

  // Añadimos los keyframes al documento
  React.useEffect(() => {
    const styleSheet = document.createElement('style');
    styleSheet.innerText = keyframes;
    document.head.appendChild(styleSheet);
    return () => styleSheet.remove();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nombre || !formData.correo || !formData.ingresos) {
      setError('Por favor, completa los campos obligatorios.');
      return;
    }
    setError('');
    alert('Formulario enviado con éxito.');
  };

  return (
    <div style={styles.formWrapper}>
      <form onSubmit={handleSubmit}>
        <h1 style={styles.title}>Evaluación Crediticia</h1>

        {error && <div style={styles.errorMessage}>{error}</div>}

        <input 
          style={styles.input}
          type="text" 
          name="nombre" 
          placeholder="Nombre *" 
          value={formData.nombre}
          onChange={handleChange} 
        />
        <input 
          style={styles.input}
          type="text" 
          name="apellido" 
          placeholder="Apellido" 
          value={formData.apellido}
          onChange={handleChange} 
        />
        <input 
          style={styles.input}
          type="email" 
          name="correo" 
          placeholder="Correo Electrónico *" 
          value={formData.correo}
          onChange={handleChange} 
        />
        <input 
          style={styles.input}
          type="text" 
          name="numCelular" 
          placeholder="Numero celular (WhatsApp) *" 
          value={formData.numCelular}
          onChange={handleChange} 
        />
        <input 
          style={styles.input}
          type="number" 
          name="ingresos" 
          placeholder="Ingresos Mensuales (S/.) *" 
          value={formData.ingresos}
          onChange={handleChange} 
        />

        <select 
          style={styles.select}
          name="banco" 
          value={formData.banco} 
          onChange={handleChange} 
          required
        >
          <option value="" disabled>Banco Interbank</option>
          <option value="BCP">BCP</option>
          <option value="BBVA">BBVA</option>
          <option value="Scotiabank">Scotiabank</option>
          <option value="Interbank">Interbank</option>
        </select>

        <p style={styles.labelText}>Tipo de tarjeta con el que deseas retirar:</p>
        <div style={styles.cardOptions}>
          <label style={styles.card}>
            <input
              style={styles.radioInput}
              type="radio"
              name="tipoTarjeta"
              value="credito"
              checked={formData.tipoTarjeta === 'credito'}
              onChange={handleChange}
              required
            />
            <img 
              src={creditcard} 
              alt="Credito" 
              style={{
                ...styles.cardImage,
                ...(formData.tipoTarjeta === 'credito' ? styles.cardImageSelected : {})
              }} 
            />
          </label>
          <label style={styles.card}>
            <input
              style={styles.radioInput}
              type="radio"
              name="tipoTarjeta"
              value="debito"
              checked={formData.tipoTarjeta === 'debito'}
              onChange={handleChange}
              required
            />
            <img 
              src={debitocard} 
              alt="Debito" 
              style={{
                ...styles.cardImage,
                ...(formData.tipoTarjeta === 'debito' ? styles.cardImageSelected : {})
              }} 
            />
          </label>
        </div>

        <div style={styles.terms}>
          <input
            style={styles.checkbox}
            type="checkbox"
            id="terms"
            name="aceptaTerminos"
            checked={formData.aceptaTerminos}
            onChange={handleChange}
            required
          />
          <label htmlFor="terms">
            He leído y acepto los <a href="#">T&C y las políticas de privacidad</a>
          </label>
        </div>

        <button 
          type="submit" 
          style={styles.button}
          onMouseOver={e => e.target.style.backgroundColor = '#74b9ff'}
          onMouseOut={e => e.target.style.backgroundColor = '#0984e3'}
        >
          Enviar Evaluación
        </button>
      </form>
    </div>
  );
};

export default FormularioEvaluacion;
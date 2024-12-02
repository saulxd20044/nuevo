import React, { useState } from 'react';
import '../styles/RapimoneyUser.css'; // Importar los estilos

function Rapimoney() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [accountType, setAccountType] = useState('loan');
  const [userData] = useState(
    // {
    //   "username": null,
    //   "lastName": null,
    //   "email": "perezlincoln3@gmail.com",
    //   "message": "Login successfully",
    //   "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwZXJlemxpbmNvbG4zQGdtYWlsLmNvbSIsIm5iZiI6MTczMzA4NzI1NSwiaXNzIjoiUkFQSS1NT05FWSIsImV4cCI6MTczMzA4OTA1NSwiaWF0IjoxNzMzMDg3MjU1LCJhdXRob3JpdGllcyI6IkNSRUFURSxSRUFELFJPTEVfY29tLmV4YW1wbGUuYXBpX3Njb3RpYS5lbnRpdGllcy5Sb2xlRW50aXR5QDE2YWM5OTNjLFVQREFURSIsImp0aSI6IjVlMjQwZjcxLTU5NGUtNDNkOC04ODMwLTc3NTgyYjFhN2FlNiJ9.kVUtuz3yQlT0naKK2dIHfaXpP7bV6HVOtF9d_MVsKhw",
    //   "status": false
    // }
  )

  console.log(userData)

  const [accounts, setAccounts] = useState([
    {
      id: '1',
      name: 'Cuenta Digital Soles',
      number: 'XXXX-XXXX',
      balance: '0.00'
    }
  ]);
  const [formData, setFormData] = useState({
    loanType: '',
    loanAmount: '',
    loanTerm: '',
    cardName: '',
    cardType: '',
    cardBalance: ''
  });

  const showToast = (message) => {
    alert(message);
  };

  const handleAction = (action) => {
    switch (action) {
      case 'addAccount':
        setIsModalOpen(true);
        break;
      default:
        showToast('Función en desarrollo');
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (accountType === 'loan') {
      const { loanType, loanAmount, loanTerm } = formData;
      showToast(`Cuenta de Préstamo Añadida: ${loanType}, ${loanAmount}, ${loanTerm} meses`);
    } else {
      const { cardName, cardType, cardBalance } = formData;
      const newAccount = {
        id: Date.now().toString(),
        name: cardName,
        type: cardType,
        balance: cardBalance
      };

      setAccounts(prev => [...prev, newAccount]);
      showToast(`Tarjeta Añadida: ${cardName}, Tipo: ${cardType}, Saldo inicial: ${cardBalance}`);
    }

    setFormData({
      loanType: '',
      loanAmount: '',
      loanTerm: '',
      cardName: '',
      cardType: '',
      cardBalance: ''
    });
    setIsModalOpen(false);
  };

  const deleteAccount = (accountId) => {
    setAccounts(prev => prev.filter(account => account.id !== accountId));
    showToast('¡Cuenta eliminada con éxito!');
  };

  return (
    <div className="rapimoney">
      {/*El encabezado */}
      <header>
        <div className="header-container">
          <h1>Rapimoney</h1>
          <nav>
            <a href="#">Inicio</a>
            <a href="#">Operaciones</a>
            <a href="#">Explora</a>
            <a href="#">Cerrar Sesión</a>
          </nav>
        </div>
        <p>
          Bienvenido, <strong>XXXXX</strong>
        </p>
      </header>
      {/* Cuerpo */}
      {/* Contenido left */}
      <main>
        <article className="main-container">
          {/* Contenido left */}
          <section className="actions">
            <h2>¿Qué te gustaría hacer hoy?</h2>
            <div className="action-buttons">
              <button onClick={() => showToast('Función en desarrollo')}>
                Transferir dinero
              </button>
              <button onClick={() => showToast('Función en desarrollo')}>
                Pagar Tarjeta
              </button>
              {/* <button onClick={() => handleAction('addAccount')}>
                Añadir Cuenta
              </button> */}
              <button onClick={() => showToast('Función en desarrollo')}>
                Plin
              </button>
            </div>
          </section>

          {/* Contenido right */}
          <section className="accounts">
            <h2>Mis cuentas</h2>
            <div className="account-list">
              {accounts.map(account => (
                <div key={account.id} className="account">
                  <p className="account-name">{account.name}</p>
                  {account.type && <p className="account-type">{account.type}</p>}
                  {account.number && <p className="account-number">{account.number}</p>}
                  <p className="account-balance">S/. {account.balance}</p>
                  <p>Saldo disponible</p>
                  <button
                    className="delete-btn"
                    onClick={() => deleteAccount(account.id)}
                  >
                    Eliminar
                  </button>
                </div>


              ))}
              {/* <div className="add-account" onClick={() => handleAction('addAccount')}>
                <i className="fas fa-plus-circle"></i>
              </div>
            </div> */}

              <button className="add-account" onClick={() => handleAction('addAccount')}>
                <i className="fas fa-plus-circle"></i>
                <h1>+</h1>
                <p>Añadir nueva cuenta</p>
              </button>

            </div>
          </section>

          {/* Historial de transacciones */}
          <section id="transactionHistory" className="transactions">
            <h2>Historial de Transacciones</h2>
            <div className="transaction">
              No hay transacciones aún.
            </div>
          </section>
        </article>


        <div className={`modal ${isModalOpen ? 'open' : ''}`}>
          <div className="modal-content">
            <span
              className="close"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </span>
            <h2>Añadir Cuenta</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Selecciona el tipo de cuenta:
                <select
                  value={accountType}
                  onChange={(e) => setAccountType(e.target.value)}
                  required
                >
                  <option value="loan">Cuenta de Préstamo</option>
                  <option value="card">Tarjeta Virtual</option>
                </select>
              </label>

              {accountType === 'loan' ? (
                <div className="form-fields">
                  <label>
                    Tipo de Préstamo:
                    <input
                      type="text"
                      name="loanType"
                      value={formData.loanType}
                      onChange={handleFormChange}
                      placeholder="Ej. Personal, Hipotecario"
                      required
                    />
                  </label>

                  <label>
                    Monto del Préstamo:
                    <input
                      type="number"
                      name="loanAmount"
                      value={formData.loanAmount}
                      onChange={handleFormChange}
                      placeholder="Monto"
                      required
                    />
                  </label>

                  <label>
                    Plazo (meses):
                    <input
                      type="number"
                      name="loanTerm"
                      value={formData.loanTerm}
                      onChange={handleFormChange}
                      placeholder="Meses"
                      required
                    />
                  </label>
                </div>
              ) : (
                <div className="form-fields">
                  <label>
                    Nombre de la Tarjeta:
                    <input
                      type="text"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleFormChange}
                      placeholder="Ej. Mi Tarjeta"
                      required
                    />
                  </label>

                  <label>
                    Tipo de Tarjeta:
                    <input
                      type="text"
                      name="cardType"
                      value={formData.cardType}
                      onChange={handleFormChange}
                      placeholder="Ej. Débito, Crédito"
                      required
                    />
                  </label>

                  <label>
                    Saldo Inicial:
                    <input
                      type="number"
                      name="cardBalance"
                      value={formData.cardBalance}
                      onChange={handleFormChange}
                      placeholder="Saldo"
                      required
                    />
                  </label>
                </div>
              )}

              <button type="submit">Añadir Cuenta</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Rapimoney;
import React, { useState } from 'react';

function Rapimoney() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [accountType, setAccountType] = useState('loan');
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
      <style>{`
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Poppins', sans-serif;
            background-color: #f8f9fa;
            color: #333;
        }

        header {
            background-color: #007bff;
            color: #fff;
            padding: 20px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .header-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        header h1 {
            font-size: 30px;
        }

        nav a {
            color: #fff;
            text-decoration: none;
            margin-left: 20px;
            font-size: 16px;
            transition: color 0.3s;
        }

        nav a:hover {
            color: #ffc107;
        }

        p {
            font-size: 18px;
            margin-top: 10px;
        }

        main {
            max-width: 1200px;
            margin: 30px auto;
            padding: 20px;
        }

        .actions h2, .accounts h2, #transactionHistory h2 {
            color: #333;
            font-size: 24px;
            margin-bottom: 20px;
        }

        .action-buttons button {
            background-color: #28a745;
            color: white;
            border: none;
            padding: 15px;
            margin: 10px 0;
            width: 100%;
            border-radius: 8px;
            cursor: pointer;
            transition: background-color 0.3s;
            font-size: 16px;
        }

        .action-buttons button:hover {
            background-color: #218838;
        }

        .account-list {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
        }

        .account {
            background-color: #fff;
            border-radius: 12px;
            padding: 20px;
            border: 1px solid #ddd;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
            flex: 1;
            min-width: 280px;
            transition: transform 0.3s;
        }

        .account:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        }

        .account-name {
            font-size: 20px;
            font-weight: 600;
            color: #333;
        }

        .account-number, .account-balance, .account-type {
            font-size: 16px;
            color: #666;
            margin-top: 5px;
        }

        .delete-btn {
            background-color: #e74c3c;
            color: #fff;
            border: none;
            padding: 10px 15px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 14px;
            margin-top: 10px;
            transition: background-color 0.3s;
        }

        .delete-btn:hover {
            background-color: #c0392b;
        }

        .add-account {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 20px;
            cursor: pointer;
        }

        .add-account i {
            font-size: 40px;
            color: #28a745;
            transition: color 0.3s;
        }

        .add-account i:hover {
            color: #218838;
        }

        .modal {
            display: none;
            position: fixed;
            z-index: 1000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            padding-top: 50px;
        }

        .modal.open {
            display: block;
        }

        .modal-content {
            background-color: #fff;
            margin: auto;
            padding: 30px;
            width: 90%;
            max-width: 600px;
            border-radius: 12px;
            position: relative;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .close {
            position: absolute;
            right: 20px;
            top: 10px;
            color: #aaa;
            font-size: 28px;
            font-weight: bold;
            cursor: pointer;
        }

        .close:hover {
            color: #333;
        }

        .form-fields {
            margin-top: 20px;
        }

        .form-fields label {
            display: block;
            margin-top: 15px;
            color: #333;
        }

        .form-fields input,
        .form-fields select {
            width: 100%;
            padding: 10px;
            margin-top: 5px;
            border: 1px solid #ddd;
            border-radius: 8px;
            font-size: 16px;
        }

        form button[type="submit"] {
            width: 100%;
            padding: 12px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 8px;
            margin-top: 20px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s;
        }

        form button[type="submit"]:hover {
            background-color: #0056b3;
        }

        @media (max-width: 768px) {
            .modal-content {
                width: 95%;
                margin: 20px auto;
            }

            .account {
                min-width: 100%;
            }

            .header-container {
                flex-direction: column;
                text-align: center;
            }

            nav {
                margin-top: 15px;
            }

            nav a {
                margin: 0 10px;
            }
        }
      `}</style>

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

      <main>
        <section className="actions">
          <h2>¿Qué te gustaría hacer hoy?</h2>
          <div className="action-buttons">
            <button onClick={() => showToast('Función en desarrollo')}>
              Transferir dinero
            </button>
            <button onClick={() => showToast('Función en desarrollo')}>
              Pagar Tarjeta
            </button>
            <button onClick={() => handleAction('addAccount')}>
              Añadir Cuenta
            </button>
            <button onClick={() => showToast('Función en desarrollo')}>
              Plin
            </button>
          </div>
        </section>

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
            <div className="add-account" onClick={() => handleAction('addAccount')}>
              <i className="fas fa-plus-circle"></i>
            </div>
          </div>
        </section>

        <section id="transactionHistory">
          <h2>Historial de Transacciones</h2>
          <div className="transaction">
            No hay transacciones aún.
          </div>
        </section>

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
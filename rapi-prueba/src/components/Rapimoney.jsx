import React, { useEffect, useState } from 'react';
import '../styles/RapimoneyUser.css';
import Logo from './Logo';
import Swal from 'sweetalert2';
import { AddCardForm, LoanForm } from './ui/AddNewAcountForm';
import { CardAccount } from './ui/CardAccount';
import { TransferModal } from './ui/TransferModal';

function Rapimoney() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTransferModalOpen, setIsTransferModalOpen] = useState(false);
  const [accountType, setAccountType] = useState('loan');
  const [userData, setUserData] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const CUSTOMER_CARDS_ENDPOINT = 'http://localhost:8080/api/v1/getCardsByCustomerId/'

  useEffect(() => {
    const customerData = localStorage.getItem('customerData');
    if (customerData) {
      setUserData(JSON.parse(customerData));
    }
  }, [])

  useEffect(() => {
    if (userData && userData.customerId && userData.token) {
      fetch(CUSTOMER_CARDS_ENDPOINT + userData.customerId, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${userData.token}`,
        },
      })
        .then(response => response.json())
        .then(data => setAccounts(data))
        .catch(error => console.error('Error al obtener los datos:', error));
    }
  }, [userData])


  const showToast = (message, icon = 'success') => {
    Swal.fire({
      title: message,
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      icon: icon,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    });
  };

  const handleAction = (action) => {
    switch (action) {
      case 'addAccount':
        setIsModalOpen(true);
        break;
      case 'transfer':
        setIsTransferModalOpen(true);
        break;
      case 'payCard':
        Swal.fire({
          icon: 'info',
          title: 'Pago de Tarjeta',
          text: 'El pago de tarjetas estará disponible próximamente',
          showConfirmButton: true,
          confirmButtonText: 'Entendido',
          confirmButtonColor: '#3085d6'
        });
        break;
      case 'plin':
        Swal.fire({
          icon: 'info',
          title: 'Plin',
          text: 'La función Plin estará disponible próximamente',
          showConfirmButton: true,
          confirmButtonText: 'Entendido',
          confirmButtonColor: '#3085d6'
        });
        break;
      default:
        showToast('Función en desarrollo', 'info');
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="rapimoney">
      <header>
        <div className="header-container">
          <Logo />
          <nav>
            <a href="#">Operaciones</a>
            <a href="#">Explora</a>
            <a href="#">Cerrar Sesión</a>
          </nav>
        </div>
        {userData ? (
          <p>
            Bienvenido, <strong>{userData.username} {userData.lastName}</strong>
          </p>
        ) : (
          <p>Cargando...</p>
        )}
      </header>

      <main>
        <article className="main-container">
          <section className="actions">
            <h2>¿Qué te gustaría hacer hoy?</h2>
            <div className="action-buttons">
              <button onClick={() => handleAction('transfer')}>
                Transferir dinero
              </button>
              <button onClick={() => handleAction('payCard')}>
                Pagar Tarjeta
              </button>
              <button onClick={() => handleAction('plin')}>
                Plin
              </button>
            </div>
          </section>

          <section className="accounts">
            <h2>Mis cuentas</h2>
            <div className="account-list">
              {accounts.map(account => (
                <CardAccount key={account.cardId} card={account} />
              ))}

              <button className="add-account" onClick={() => handleAction('addAccount')}>
                <i className="fas fa-plus-circle"></i>
                <h1>+</h1>
                <p>Añadir nueva cuenta</p>
              </button>
            </div>
          </section>

          <section id="transactionHistory" className="transactions">
            <h2>Historial de Préstamos</h2>
            <div className="transaction">
              No hay transacciones aún.
            </div>
          </section>
        </article>

        {/* Modal para añadir cuenta */}
        {isModalOpen && (
          <div className="modal open">
            <div className="modal-content">
              <span
                className="close"
                onClick={() => setIsModalOpen(false)}
              >
                &times;
              </span>
              <h2>Añadir Cuenta</h2>
              <div>
                <label>
                  Selecciona el tipo de cuenta:
                  <select
                    value={accountType}
                    onChange={(e) => {
                      console.log(e.target.value)
                      setAccountType(e.target.value)
                    }}
                    required
                  >
                    <option value="loan">Cuenta de Préstamo</option>
                    <option value="card">Tarjeta Virtual</option>
                  </select>
                </label>
                {accountType === 'loan' ? (
                  <LoanForm token={userData.token} handleFormChange={handleFormChange} />
                ) : (
                  <AddCardForm token={userData.token} customerId={userData.customerId} handleFormChange={handleFormChange} />
                )
                }
              </div>
            </div>
          </div>
        )}

        {/* Modal de Transferencia */}
        {isTransferModalOpen && (
          <div className="modal open">
            <span
              className="close"
              onClick={() => setIsTransferModalOpen(false)}
            >
              &times;
            </span>
            <TransferModal accounts={accounts} token={userData.token}/>
          </div>
        )}
      </main>
    </div>
  );
}

export default Rapimoney;

import React, { useState } from 'react';
import '../styles/RapimoneyUser.css';
import Logo from './Logo';
import Swal from 'sweetalert2';

function Rapimoney() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTransferModalOpen, setIsTransferModalOpen] = useState(false);
  const [accountType, setAccountType] = useState('loan');
  const [userData] = useState();
  
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

  // Estado para el formulario de transferencia
  const [transferFormData, setTransferFormData] = useState({
    sourceAccount: '',
    destinationType: 'own',
    destinationBank: '',
    destinationAccount: '',
    amount: '',
    description: '',
    recipientName: '',
    recipientDocument: '',
    documentType: 'dni',
  });

  const [transferErrors, setTransferErrors] = useState({});
  const [showTransferConfirmation, setShowTransferConfirmation] = useState(false);

  // Lista de bancos disponibles
  const banks = [
    'BCP', 'BBVA', 'Interbank', 'Scotiabank', 'Pichincha'
  ];

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

  const validateTransferForm = () => {
    const newErrors = {};
    
    if (!transferFormData.sourceAccount) {
      newErrors.sourceAccount = 'Seleccione una cuenta origen';
    }

    if (!transferFormData.amount || transferFormData.amount <= 0) {
      newErrors.amount = 'Ingrese un monto válido';
    } else {
      const sourceAccount = accounts.find(acc => acc.id === transferFormData.sourceAccount);
      if (sourceAccount && parseFloat(transferFormData.amount) > parseFloat(sourceAccount.balance)) {
        newErrors.amount = 'Saldo insuficiente';
      }
    }

    if (!transferFormData.destinationAccount.match(/^\d{14,20}$/)) {
      newErrors.destinationAccount = 'Número de cuenta inválido';
    }

    if (transferFormData.destinationType !== 'own') {
      if (!transferFormData.recipientName) {
        newErrors.recipientName = 'Ingrese el nombre del beneficiario';
      }
      if (!transferFormData.recipientDocument) {
        newErrors.recipientDocument = 'Ingrese el documento del beneficiario';
      }
    }

    setTransferErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleTransferSubmit = (e) => {
    e.preventDefault();
    if (validateTransferForm()) {
      setShowTransferConfirmation(true);
    }
  };

  const confirmTransfer = async () => {
    await Swal.fire({
      icon: 'success',
      title: '¡Transferencia Exitosa!',
      html: `
        <p><strong>Monto:</strong> S/. ${transferFormData.amount}</p>
        <p><strong>A la cuenta:</strong> ${transferFormData.destinationAccount}</p>
        ${transferFormData.destinationType !== 'own' ? `<p><strong>Beneficiario:</strong> ${transferFormData.recipientName}</p>` : ''}
        ${transferFormData.description ? `<p><strong>Descripción:</strong> ${transferFormData.description}</p>` : ''}
      `,
      showConfirmButton: true,
      confirmButtonText: 'Excelente',
      confirmButtonColor: '#3085d6'
    });

    setShowTransferConfirmation(false);
    setIsTransferModalOpen(false);
    setTransferFormData({
      sourceAccount: '',
      destinationType: 'own',
      destinationBank: '',
      destinationAccount: '',
      amount: '',
      description: '',
      recipientName: '',
      recipientDocument: '',
      documentType: 'dni',
    });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (accountType === 'loan') {
      const { loanType, loanAmount, loanTerm } = formData;
      
      await Swal.fire({
        icon: 'success',
        title: '¡Préstamo Añadido!',
        html: `
          <p><strong>Tipo:</strong> ${loanType}</p>
          <p><strong>Monto:</strong> S/. ${loanAmount}</p>
          <p><strong>Plazo:</strong> ${loanTerm} meses</p>
        `,
        showConfirmButton: true,
        confirmButtonText: 'Excelente',
        confirmButtonColor: '#3085d6'
      });
    } else {
      const { cardName, cardType, cardBalance } = formData;
      const newAccount = {
        id: Date.now().toString(),
        name: cardName,
        type: cardType,
        balance: cardBalance
      };

      setAccounts(prev => [...prev, newAccount]);
      
      await Swal.fire({
        icon: 'success',
        title: '¡Tarjeta Añadida!',
        html: `
          <p><strong>Nombre:</strong> ${cardName}</p>
          <p><strong>Tipo:</strong> ${cardType}</p>
          <p><strong>Saldo inicial:</strong> S/. ${cardBalance}</p>
        `,
        showConfirmButton: true,
        confirmButtonText: 'Excelente',
        confirmButtonColor: '#3085d6'
      });
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
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Esta acción no se puede revertir",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        setAccounts(prev => prev.filter(account => account.id !== accountId));
        Swal.fire(
          '¡Eliminado!',
          'La cuenta ha sido eliminada exitosamente.',
          'success'
        )
      }
    })
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
        <p>
          Bienvenido, <strong>XXXXX</strong>
        </p>
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

              <button className="add-account" onClick={() => handleAction('addAccount')}>
                <i className="fas fa-plus-circle"></i>
                <h1>+</h1>
                <p>Añadir nueva cuenta</p>
              </button>
            </div>
          </section>

          <section id="transactionHistory" className="transactions">
            <h2>Historial de Transacciones</h2>
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
                      <select
                        name="loanType"
                        value={formData.loanType}
                        onChange={handleFormChange}
                        required
                      >
                        <option value="">Seleccione tipo de préstamo</option>
                        <option value="personal">Personal</option>
                        <option value="hipotecario">Hipotecario</option>
                        <option value="automotriz">Automotriz</option>
                        <option value="estudiantil">Estudiantil</option>
                      </select>
                    </label>

                    <label>
                      Monto del Préstamo:
                      <input
                        type="number"
                        name="loanAmount"
                        value={formData.loanAmount}
                        onChange={handleFormChange}
                        placeholder="Monto"
                        min="0"
                        step="100"
                        required
                      />
                    </label>

                    <label>
                      Plazo (meses):
                      <select
                        name="loanTerm"
                        value={formData.loanTerm}
                        onChange={handleFormChange}
                        required
                      >
                        <option value="">Seleccione el plazo</option>
                        <option value="3">3 meses</option>
                        <option value="6">6 meses</option>
                        <option value="12">12 meses</option>
                        <option value="18">18 meses</option>
                        <option value="24">24 meses</option>
                        <option value="36">36 meses</option>
                      </select>
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
                      <select 
                        name="cardType"
                        value={formData.cardType}
                        onChange={handleFormChange}
                        required
                      >
                        <option value="">Seleccione tipo de tarjeta</option>
                        <option value="debito">Débito</option>
                        <option value="credito">Crédito</option>
                      </select>
                    </label>

                    <label>
                      Saldo Inicial:
                      <input
                        type="number"
                        name="cardBalance"
                        value={formData.cardBalance}
                        onChange={handleFormChange}
                        placeholder="Saldo"
                        min="0"
                        step="150"
                        required
                      />
                    </label>
                  </div>
                )}

                <button type="submit">Añadir Cuenta</button>
              </form>
            </div>
          </div>
        )}

        {/* Modal de Transferencia */}
        {isTransferModalOpen && (
          <div className="modal open">
            <div className="modal-content">
              <span
                className="close"
                onClick={() => setIsTransferModalOpen(false)}
              >
                &times;
              </span>
              <h2>Transferencia Bancaria</h2>
              <form onSubmit={handleTransferSubmit}>
                <div className="form-fields">
                  <label>
                    Cuenta Origen:
                    <select
                      value={transferFormData.sourceAccount}
                      onChange={(e) => setTransferFormData({...transferFormData, sourceAccount: e.target.value})}
                      required
                    >
                      <option value="">Seleccione una cuenta</option>
                      {accounts.map(account => (
                        <option key={account.id} value={account.id}>
                          {account.name} - S/. {account.balance}
                        </option>
                      ))}
                    </select>
                    {transferErrors.sourceAccount && (
                      <span className="error">{transferErrors.sourceAccount}</span>
                    )}
                  </label>

                  <label>
                    Tipo de Transferencia:
                    <select
                      value={transferFormData.destinationType}
                      onChange={(e) => setTransferFormData({...transferFormData, destinationType: e.target.value})}
                      required
                    >
                      <option value="own">A mis cuentas</option>
                      <option value="thirdParty">A terceros - Mismo banco</option>
                      <option value="interbank">Interbancaria</option>
                    </select>
                  </label>

                  {transferFormData.destinationType === 'interbank' && (
                    <label>
                      Banco Destino:
                      <select
                        value={transferFormData.destinationBank}
                        onChange={(e) => setTransferFormData({...transferFormData, destinationBank: e.target.value})}
                        required
                      >
                        <option value="">Seleccione un banco</option>
                        {banks.map(bank => (
                          <option key={bank} value={bank}>{bank}</option>
                        ))}
                      </select>
                    </label>
                  )}

                  {transferFormData.destinationType !== 'own' && (
                    <>
                      <label>
                        Tipo de Documento:
                        <select
                          value={transferFormData.documentType}
                          onChange={(e) => setTransferFormData({...transferFormData, documentType: e.target.value})}
                          required
                        >
                          <option value="dni">DNI</option>
                          <option value="ce">Carné de Extranjería</option>
                          <option value="passport">Pasaporte</option>
                        </select>
                      </label>

                      <label>
                        Número de Documento:
                        <input
                          type="text"
                          value={transferFormData.recipientDocument}
                          onChange={(e) => setTransferFormData({...transferFormData, recipientDocument: e.target.value})}
                          placeholder="Ingrese número de documento"
                          required
                        />
                        {transferErrors.recipientDocument && (
                          <span className="error">{transferErrors.recipientDocument}</span>
                        )}
                      </label>

                      <label>
                        Nombre del Beneficiario:
                        <input
                          type="text"
                          value={transferFormData.recipientName}
                          onChange={(e) => setTransferFormData({...transferFormData, recipientName: e.target.value})}
                          placeholder="Nombre completo"
                          required
                        />
                        {transferErrors.recipientName && (
                          <span className="error">{transferErrors.recipientName}</span>
                        )}
                      </label>
                    </>
                  )}

                  <label>
                    Cuenta Destino:
                    <input
                      type="text"
                      value={transferFormData.destinationAccount}
                      onChange={(e) => setTransferFormData({...transferFormData, destinationAccount: e.target.value})}
                      placeholder="Número de cuenta"
                      required
                    />
                    {transferErrors.destinationAccount && (
                      <span className="error">{transferErrors.destinationAccount}</span>
                    )}
                  </label>

                  <label>
                    Monto a Transferir (S/.):
                    <input
                      type="number"
                      value={transferFormData.amount}
                      onChange={(e) => setTransferFormData({...transferFormData, amount: e.target.value})}
                      placeholder="0.00"
                      step="0.01"
                      min="0"
                      required
                    />
                    {transferErrors.amount && (
                      <span className="error">{transferErrors.amount}</span>
                    )}
                  </label>

                  <label>
                    Descripción (opcional):
                    <input
                      type="text"
                      value={transferFormData.description}
                      onChange={(e) => setTransferFormData({...transferFormData, description: e.target.value})}
                      placeholder="Motivo de la transferencia"
                      maxLength={30}
                    />
                  </label>
                </div>

                <button type="submit">Continuar</button>
              </form>
            </div>
          </div>
        )}

        {/* Modal de Confirmación de Transferencia */}
        {showTransferConfirmation && (
          <div className="modal open">
            <div className="modal-content">
              <h3>Confirmar Transferencia</h3>
              <div className="confirmation-details">
                <p><strong>De:</strong> {accounts.find(acc => acc.id === transferFormData.sourceAccount)?.name}</p>
                <p><strong>A:</strong> {transferFormData.destinationType === 'interbank' ? `${transferFormData.destinationBank} - ` : ''}{transferFormData.destinationAccount}</p>
                <p><strong>Monto:</strong> S/. {transferFormData.amount}</p>
                {transferFormData.destinationType !== 'own' && (
                  <p><strong>Beneficiario:</strong> {transferFormData.recipientName}</p>
                )}
                {transferFormData.description && (
                  <p><strong>Descripción:</strong> {transferFormData.description}</p>
                )}
              </div>
              <div className="confirmation-buttons">
                <button onClick={confirmTransfer} className="confirm-button">
                  Confirmar
                </button>
                <button onClick={() => setShowTransferConfirmation(false)} className="cancel-button">
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Rapimoney;

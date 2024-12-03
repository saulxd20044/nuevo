
export function LoanForm({ token, handleFormChange }) {

    const CREATE_LOAN_ENDPOINT = 'http://localhost:8080/api/v1/createLoan'
    /*const DELETE_CARD = 'http://localhost:8080/api/v1/deletebynumbercard/' */


    const handleSubmit = async (e) => {
        e.preventDefault();

        let data = Object.fromEntries(new FormData(e.target))

        console.log(data)

        const response = fetch(CREATE_LOAN_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(data)
        })

        if (response.ok) {
            alert("Préstamo creado")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-fields">
                <label>
                    Tipo de Préstamo:
                    <select
                        name="loanType"
                        //value={formData.loanType}
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
                        //value={formData.loanAmount}
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
                        //value={formData.loanTerm}
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
            <button type="submit">Solicitar préstamo</button>
        </form>
    )
}

export function AddCardForm({ token, customerId, handleFormChange }) {

    const REGISTER_CARD_ENDPOINT = 'http://localhost:8080/api/v1/createCArd/'
    const cardTypes = ['BBVA', 'BCP', 'CMR', 'Interbank',
        'OH', 'Ripley', 'Scotiabank']

    const registerCard = async (e) => {
        e.preventDefault()

        const data = Object.fromEntries(new FormData(e.target))

        const requestBody = {
            clientId: customerId,
            cardNumber: data.cardNumber,
            nameType: data.nameType,
            cardType: data.cardType,
            cardLimit: data.cardLimit,
            expirationDate: `${data.expirationDate}T00:00:00`
        }

        console.log(requestBody)

        const response = await fetch(REGISTER_CARD_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(requestBody)
        }).catch(e => console.log(e))

        if (response.ok) {
            alert('Tarjeta registrada')
        } else {
            alert('La tarjeta no se registró')
        }

    }

    return (
        <form onSubmit={registerCard}>
            <div className="form-fields">
                <label>
                    Número de la tarjeta:
                    <input
                        type="number"
                        name="cardNumber"
                        placeholder="Ej. Mi Tarjeta"
                        required
                    />
                </label>

                <label>
                    Tipo de Tarjeta:
                    <select
                        name="nameType"
                        onChange={() => handleFormChange}
                        required
                    >
                        <option value="">Seleccione tipo de tarjeta</option>
                        <option value="debito">Débito</option>
                        <option value="credito">Crédito</option>
                    </select>
                </label>
                <label>
                    Tipo de Tarjeta:
                    <select
                        name="cardType"
                        //value={formData.nameType}
                        onChange={() => handleFormChange}
                        required
                    >
                        {cardTypes.map((type, index) => {
                            return (
                                <option key={index} value={type}>{type}</option>
                            )
                        })
                        }
                    </select>
                </label>

                <label>
                    Límite crediticio:
                    <input
                        type="number"
                        name="cardLimit"
                        required
                    />
                </label>

                <label>
                    Fecha de caducidad:
                    <input
                        type="date"
                        name="expirationDate"
                        onChange={() => handleFormChange}
                        required
                    />
                </label>
            </div>
        </form>
    )
}

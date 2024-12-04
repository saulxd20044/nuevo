export function TransferModal({ accounts, token }) {
    console.log('transferencias')

    const LIQUIDITY_TRANSACTION_EDNPINT = 'http://localhost:8080/api/v1/createLiquidityTransaction';
    const date = new Date();
    const today = date.toISOString().split('T')[0];

    const handleTransferSubmit = async (e) => {
        e.preventDefault();

        const data = Object.fromEntries(new FormData(e.target))
        const numberCard = data.numberCard.split(' ')[0]
        const request = {
            numberCard: Number(numberCard),
            amount: parseFloat(data.amount),
            status: 'Pendiente'
        }

        console.log(request)

        const response = await fetch(LIQUIDITY_TRANSACTION_EDNPINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(request)
        }).catch(e => console.log(e))

        console.log(response)

        if (response.ok) {
            alert('Liquidez en proceso')
        }

    };

    return (
        <div className="modal-content">
            <h2>Transferencia Bancaria</h2>
            <form onSubmit={handleTransferSubmit}>
                <div className="form-fields">
                    <label>
                        Cuenta Origen:
                        <select
                            type='number'
                            name="numberCard"
                            required
                        >
                            {accounts.map(account => (
                                <option key={account.cardId} value={account.id}>
                                    {account.cardNumber} - S/. {account.cardLimit}
                                </option>
                            ))}
                        </select>
                    </label>

                    <label>
                        Fecha de transacción: {today}
                    </label>

                    <label>
                        Monto de liquidéz (S/.):
                        <input
                            type="number"
                            name="amount"
                            placeholder="0.00"
                            required
                        />
                    </label>

                    <label>
                        Descripción (opcional):
                        <input
                            type="text"
                            placeholder="Motivo de la transferencia"
                            maxLength={30}
                        />
                    </label>
                </div>

                <button type="submit">Continuar</button>
            </form>
        </div>


    )
}


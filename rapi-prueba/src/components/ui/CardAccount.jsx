
export function CardAccount({ card, token }) {

    const DELETE_ACCOUNT_ENDPOINT = 'http://localhost:8080/api/v1/deletebynumbercard/'
    const cardId = card.cardId;

    const deleteAccount = async (cardId) => {
        
        const response = await fetch(DELETE_ACCOUNT_ENDPOINT+cardId, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        }).catch(e => console.log(e))

        console.log(response)

        if(response.ok){
            console.log("Cuenta eliminada")
        }

    }

    return (
        <div className="card">
            <p className="card-name">{card.cardNumber}</p>
            <p className="card-type">{card.nameType}</p>
            <p className="card-number">{card.cardNumber}</p>
            <p className="card-balance">S/. {card.cardLimit}</p>
            <p>Saldo disponible</p>
            <button
                className="delete-btn"
                onClick={() => deleteAccount(cardId)}
            >
                Eliminar
            </button>
        </div>
    )

}

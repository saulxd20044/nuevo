
export function CardAccount({ card }) {

    /* const deleteAccount = (accountId) => {
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
                setAccounts(prev => prev.filter(card => card.id !== accountId));
                Swal.fire(
                    '¡Eliminado!',
                    'La cuenta ha sido eliminada exitosamente.',
                    'success'
                )
            }
        }) */

    return (
        <div className="card">
            <p className="card-name">{card.cardNumber}</p>
            <p className="card-type">{card.nameType}</p>
            <p className="card-number">{card.cardNumber}</p>
            <p className="card-balance">S/. {card.cardLimit}</p>
            <p>Saldo disponible</p>
            <button
                className="delete-btn"
                /* onClick={() => deleteAccount(card.cardId)} */
            >
                Eliminar
            </button>
        </div>
    )

}

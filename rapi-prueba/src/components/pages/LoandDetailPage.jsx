import { useEffect, useState } from "react";
import Logo from "../Logo";
import '../../styles/LoanDetailPage.css'
import UserHomeHeader from "../ui/UserHomeHeader";

function LoanDetailPage() {

    const [loan, setLoan] = useState(null)
    const [payments, setPayments] = useState([])
    const [userData] = useState(JSON.parse(localStorage.getItem('customerData')))
    const FIND_LOAN_BY_ID_ENDPOINT = 'http://localhost:8080/api/v1/findLoanById/'
    const loanId = window.location.pathname.split('/').pop()
    console.log(loanId)

    useEffect(() => {
        fetch(FIND_LOAN_BY_ID_ENDPOINT + loanId, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userData.token}`,
            }
        })
            .then(response => response.json())
            .then(data => {
                setPayments(data.payments)
                console.log(data.payments)
                setLoan(data)
            }).catch(e => console.log(e))
    }, [])

    return (
        <main>
            <UserHomeHeader userData={userData}/>
            {/* <header>
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
            </header> */}

            <div className="main-content">
                <div className="loan-detail-container">
                    {loan ? (
                        <>
                            <div className="details-container">
                                <h3>Id de préstamo: {loan.loanId}</h3>
                                <h3>Tipo de préstamo: {loan.requestType}</h3>
                                <h3>Estado del préstamo: {loan.requestStatus}</h3>
                                <h3>Fecha de solicitud: {loan.requestDate}</h3>
                                <h3>Cantidad de cuotas: {loan.installments}</h3>
                            </div>
                            <div className="amount-container">
                                <h2>Monto: {loan.amount}</h2>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Estado</th>
                                        <th>Monto</th>
                                        <th>Fecha de pago</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {payments.map(payment => (
                                        <tr key={payment.id}>
                                            <td>{payment.id}</td>
                                            <td>{payment.status == 0 ? 'Pendiente' : 'Pagado'}</td>
                                            <td>{payment.amount}</td>
                                            <td>{payment.paymentDate}</td>
                                        </tr>
                                    ))
                                    }
                                </tbody>
                            </table>
                        </>
                    ) : (
                        <h1>Cargando...</h1>
                    )}
                </div>
            </div>

        </main>
    )
}

export default LoanDetailPage;

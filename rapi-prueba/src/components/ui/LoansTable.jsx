import { useNavigate } from "react-router-dom";

function LoanTables({ loans }) {

    const navigate = useNavigate()

    return (

        <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
                <tr>
                    <th>Loan ID</th>
                    <th>Request Type</th>
                    <th>Amount</th>
                    <th>Request Date</th>
                    <th>Installments</th>
                </tr>
            </thead>
            <tbody>
                {loans.map((loan, index) => (
                    <tr key={index} onClick={() => navigate(`/loanDetails/${loan.loanId}`)}>
                        <td>{loan.loanId}</td>
                        <td>{loan.requestType}</td>
                        <td>{loan.amount}</td>
                        <td>{new Date(loan.requestDate).toLocaleString()}</td>
                        <td>{loan.installments}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default LoanTables;

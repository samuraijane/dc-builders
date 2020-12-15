import { connect } from "react-redux";

const Checking = ({ balance, billpayTransactions, transactions }) => {

  const chkTransactions = transactions.map((transaction, index) => {
    const { amount, date, destination } = transaction;
    return (
      <li key={`date-index`}>
        <span>{date}</span>
        <span>{destination}</span>
        <span>{amount}</span>
      </li>
    )
  });

  const billPayTrans = billpayTransactions.map((transaction, index) => {
    const { amount, date, destination } = transaction;
    return (
      <li key={`date-index`}>
        <span>{date}</span>
        <span>{destination}</span>
        <span>- {amount}</span>
      </li>
    )
  });

  return (
    <div className="view">
      <h2>{balance}</h2>
      <h3>Transfers</h3>
      <ul className="checking-transactions">{chkTransactions}</ul>
      <h3>Bill Pay</h3>
      <ul className="checking-transactions">{billPayTrans}</ul>
    </div>
  );
};

const mapStateToProps = state => ({
  balance: state.checking.balance,
  transactions: state.checking.transactions,
  billpayTransactions: state.billpay.transactions
})

export default connect(mapStateToProps)(Checking);

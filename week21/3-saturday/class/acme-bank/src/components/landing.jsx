import { connect } from "react-redux";
import { useState } from "react";
import { doBillPay, txfrFromChecking } from '../redux/actions';

const Landing = props => {

  const [amount, setAmount]                           = useState('');
  const [billPayVendor, setBillPayVendor]             = useState('');
  const [billPayAmt, setBillPayAmt]                   = useState('');

  const handleChange = e => {
    if (isNaN(parseInt(e.target.value))) {
      setAmount("");
    } else {
      setAmount(parseInt(e.target.value));
    };
  }

  const handleSubmit = () => {
    if (!amount) return;
    props.txfrFromChecking(amount);
    setAmount("");
  }

  const handleBillPaySubmit = () => {
    props.doBillPay(billPayAmt, billPayVendor);
    setBillPayAmt("");
    setBillPayVendor("");
  }

  const handleBillPayChange = e => {
    if (e.target.name === "billPayAmt") setBillPayAmt(parseInt(e.target.value));
    if (e.target.name === "billPayVendor") setBillPayVendor(e.target.value);
  };

  return (
    <div className="view">
      <p>{billPayAmt} - {billPayVendor}</p>
      <h1>Welcome to ACME Bank</h1>

      <div className="view__block">
        <h2>Account Balances</h2>
        <div className="accounts">
          <div className="accounts__account">
            <h3>Checking</h3>
            <p>{props.checking}</p>
          </div>
          <div className="accounts__account">
            <h3>Savings</h3>
            <p>{props.savings}</p>
          </div>
        </div>
      </div>

      <div className="view__block">
        <h2>Transfer Between Accounts</h2>
        <div className="pform">
          <div className="pform__column">
            <h3>Transfer from</h3>
            <p>Checking</p>
          </div>
          <div className="pform__column">
            <h3>Transfer to</h3>
            <p>Savings</p>
          </div>
          <div className="pform__column">
            <h3>Amount</h3>
            <input onChange={handleChange} value={amount} />
          </div>
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </div>

      <div className="view__block">
        <h2>Pay A Bill</h2>
        <div className="pform">
          <div className="pform__column">
            <h3>Vendor Name</h3>
            <input
              name="billPayVendor"
              onChange={handleBillPayChange}
              value={billPayVendor}
            />
          </div>
          <div className="pform__column">
            <h3>Account</h3>
            <p>Checking</p>
          </div>
          <div className="pform__column">
            <h3>Amount</h3>
            <input
              name="billPayAmt"
              onChange={handleBillPayChange}
              value={billPayAmt}
            />
          </div>
        </div>
        <button onClick={handleBillPaySubmit}>Submit</button>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  doBillPay: (amount, vendor) => dispatch(doBillPay(amount, vendor)),
  txfrFromChecking: (val) => dispatch(txfrFromChecking(val))
});

// TODO implement this later
// const mapDispatchToProps = {
//   doBillPay,
//   txfrFromChecking
// };

const mapStateToProps = state => ({
  checking: state.checking.balance,
  savings: state.savings.balance
})

export default connect(mapStateToProps, mapDispatchToProps)(Landing);

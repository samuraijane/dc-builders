import { connect } from "react-redux";
import { useState } from "react";
import { txfrFromChecking } from '../redux/actions';

const Landing = props => {

  const [amount, setAmount] = useState();

  const handleChange = e => {
    setAmount(e.target.value);
  }

  return (
    <div className="view">
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
            <input onChange={handleChange} />
          </div>
        </div>
        <button onClick={() => props.txfrFromChecking(amount)}>Submit</button>
      </div>

      <div className="view__block">
        <h2>Pay A Bill</h2>
        <div className="pform">
          <div className="pform__column">
            <h3>Vendor Name</h3>
            <p>Jimmy John's</p>
          </div>
          <div className="pform__column">
            <h3>Account</h3>
            <p>Checking</p>
          </div>
          <div className="pform__column">
            <h3>Amount</h3>
            <p>$0</p>
          </div>
        </div>
        <button onClick={()=>alert('savings')}>Submit</button>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  txfrFromChecking: (val) => dispatch(txfrFromChecking(val*1))
});

const mapStateToProps = state => ({
  checking: state.checking.balance,
  savings: state.savings.balance
})

export default connect(mapStateToProps, mapDispatchToProps)(Landing);

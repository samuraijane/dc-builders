import {
  DO_BILL_PAY,
  REQUEST_REPRESENTATIVE,
  TXFR_FROM_CHECKING,
  TXFR_FROM_SAVINGS
} from "./actionTypes";

export const txfrFromChecking = amount => {
  return {
    type: TXFR_FROM_CHECKING,
    payload: {
      amount,
      transaction: {
        amount,
        date: Date.now(),
        destination: 'savings',
        source: 'checking'
      }
    }
  }
};

export const doBillPay = (amount, vendor) => dispatch => {
  console.log('pota', amount, vendor);
  dispatch(adjustCheckingBalance(-1 * amount));
  dispatch(recordBillPay(amount, vendor));
};

const adjustCheckingBalance = amount => {
  return {
    type: TXFR_FROM_CHECKING,
    payload: {
      amount,
      type: 'modify'
    }
  }
};

const recordBillPay = (amount, vendor) => {
  return {
    type: DO_BILL_PAY,
    payload: {
      amount,
      date: Date.now(),
      destination: vendor,
      source: 'checking'
    }
  }
};

export const requestRepresentative = () => dispatch => {
  fetch('https://randomfox.ca/floof/')
    .then(response => response.json())
    .then(data => dispatch(fetchSuccess(true, data.image)))
    .catch(err => dispatch(fetchSuccess(false, err.message)))
};

const fetchSuccess = (isSuccess, data) => {
  return {
    type: REQUEST_REPRESENTATIVE,
    payload: {
      avatar: isSuccess ? data : null,
      error: !isSuccess ? data : null
    }
  }
};

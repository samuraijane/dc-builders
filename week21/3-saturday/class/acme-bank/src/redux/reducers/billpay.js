import { DO_BILL_PAY } from "../actionTypes";

const initialState = {
  transactions: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case DO_BILL_PAY: {
      return {
        ...state,
        transactions: [
          ...state.transactions,
          {
            ...action.payload
          }
        ]
      }
    }
    default:
      return state;
  }
}

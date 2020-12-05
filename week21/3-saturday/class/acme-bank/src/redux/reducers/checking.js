import { TXFR_FROM_CHECKING } from "../actionTypes";

const initialState = {
  balance: 139
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TXFR_FROM_CHECKING: {
      return {
        ...state,  // balance: 139
        balance: state.balance + action.payload.amount
      }
    }
    default:
      return state;
  }
}
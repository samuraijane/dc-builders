import { TXFR_FROM_CHECKING, TXFR_FROM_SAVINGS } from "./actionTypes";

export const txfrFromChecking = amount => {
  return {
    type: TXFR_FROM_CHECKING,
    payload: {
      amount
    }
  }
}
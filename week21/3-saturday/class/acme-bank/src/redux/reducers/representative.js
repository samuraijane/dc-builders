import { REQUEST_REPRESENTATIVE } from "../actionTypes";

const initialState = {
  avatar: null,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REQUEST_REPRESENTATIVE: {
      // 10 points to the student who can tell me why we're not concerned about immutability here
      return action.payload;
    }
    default:
      return state;
  }
}

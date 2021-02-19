import userTypes from "./user.types";

const initialState = {
  currentUser: null,
  userError: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userTypes.USER_ERROR:
      return {
        ...state,
        userError: action.payload,
      };
    case userTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        userError: [],
      };
    case userTypes.SIGN_OUT_USER_SUCCESS:
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
};

export default userReducer;

import userTypes from "./user.types";

export const signupUserStart = (user) => ({
  type: userTypes.SIGN_UP_USER_START,
  payload: user,
});

export const userError = (error) => ({
  type: userTypes.USER_ERROR,
  payload: error,
});

export const signInSuccess = (user) => ({
  type: userTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const emailSignInStart = (user) => ({
  type: userTypes.EMAIL_SIGN_IN_START,
  payload: user,
});

export const checkUserSession = () => ({
  type: userTypes.CHECK_USER_SESSION,
});

export const signOutUserStart = () => ({
  type: userTypes.SIGN_OUT_USER_START,
});

export const signOutUserSuccess = () => ({
  type: userTypes.SIGN_OUT_USER_SUCCESS,
});

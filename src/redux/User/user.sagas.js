import { takeLatest, call, all, put } from "redux-saga/effects";

import userTypes from "./user.types";
import { auth, getCurrentUser, handleUserProfile } from "../../firebase/utils";
import {
  signInSuccess,
  signOutUserSuccess,
  userError,
} from "../User/user.actions";

export function* getSnapshotFromUserAuth(user, additionalUserData = {}) {
  try {
    const userRef = yield call(handleUserProfile, {
      userAuth: user,
      aditionalUserData: additionalUserData,
    });

    const snapshot = yield userRef.get();
    yield put(
      signInSuccess({
        id: snapshot.id,
        ...snapshot.data(),
      })
    );
  } catch (error) {
    // console.log(error);
  }
}

export function* signOutUser() {
  try {
    yield auth.signOut();

    yield put(signOutUserSuccess());
  } catch (error) {
    // console.log(error);
  }
}

export function* onSignoutUserStart() {
  yield takeLatest(userTypes.SIGN_OUT_USER_START, signOutUser);
}

export function* checkUserSession() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    // console.log(error);
  }
}

export function* onCheckUserSession() {
  yield takeLatest(userTypes.CHECK_USER_SESSION, checkUserSession);
}

export function* emailSignIn({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    // console.log(error);
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(userTypes.EMAIL_SIGN_IN_START, emailSignIn);
}

export function* signupUser({
  payload: { name, surname, email, password, confirmPassword, selectedDate },
}) {
  if (password !== confirmPassword) {
    const err = ["Password's don't match!"];
    yield put(userError(err));
    return;
  }

  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    const additionalUserData = {
      name,
      surname,
      selectedDate,
    };
    yield getSnapshotFromUserAuth(user, additionalUserData);
  } catch (error) {
    // console.log(error);
  }
}

export function* onSignupUserStart() {
  yield takeLatest(userTypes.SIGN_UP_USER_START, signupUser);
}

export default function* userSagas() {
  yield all([
    call(onSignupUserStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignoutUserStart),
  ]);
}

import { all, put, takeLatest, call } from "redux-saga/effects";
import AuthActionTypes from "@actions/auth/actionTypes";
import actions from "@actions/auth/auth.action";
import { signUpApiRequest, signInApiRequest } from "@api/auth";

export function* signUpAsync({ payload }: any): any {
  try {
    yield call(signUpApiRequest, payload);
    yield put(actions.signUpSucceeded(payload));
  } catch (error) {
    yield put(actions.signUpFailed(error));
  }
}

export function* signInAsync({ payload }: any): any {
  try {
    yield call(signInApiRequest, payload);
    yield put(actions.signInSucceeded(payload));
  } catch (error) {
    yield put(actions.signInFailed(error));
  }
}

export default function* sagaCollections() {
  yield all([
    takeLatest(AuthActionTypes.SIGN_UP_REQUEST, signUpAsync),
    takeLatest(AuthActionTypes.SIGN_IN_REQUEST, signInAsync),
  ]);
}

import { ValueOf } from "@type/global.d";
import AuthActionTypes from "./actionTypes";

const signUpRequest = ({ email, password, name }: any) => {
  return {
    type: AuthActionTypes.SIGN_UP_REQUEST,
    payload: { email, password, name },
  };
};

const signUpSucceeded = ({ email, name }: any) => ({
  type: AuthActionTypes.SIGN_UP_SUCCESS,
  payload: { email, name },
});

const signUpFailed = (error: any) => ({
  type: AuthActionTypes.SIGN_UP_ERROR,
  payload: { error },
});

const signInRequest = ({ email, password, name }: any) => ({
  type: AuthActionTypes.SIGN_IN_REQUEST,
  payload: { email, password, name },
});

const signInSucceeded = ({ email, name }: any) => ({
  type: AuthActionTypes.SIGN_IN_SUCCESS,
  payload: { email, name },
});

const signInFailed = (error: any) => ({
  type: AuthActionTypes.SIGN_IN_ERROR,
  payload: { error },
});

const actionsCreators = Object.freeze({
  signUpRequest,
  signUpSucceeded,
  signUpFailed,
  signInRequest,
  signInSucceeded,
  signInFailed,
});

export type ActionsCreators = ReturnType<ValueOf<typeof actionsCreators>>;
export default actionsCreators;

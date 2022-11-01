import { ActionsCreators } from "@actions/auth/auth.action";
import AuthActionTypes from "@actions/auth/actionTypes";
import InitialAuth from "./auth";

const INITIAL_AUTH: InitialAuth = {
  authenticated: false,
  isAuthenticating: false,
  error: false,
  user: undefined,
};

const authReducer = (state = INITIAL_AUTH, action: ActionsCreators) => {
  switch (action.type) {
    case AuthActionTypes.SIGN_IN_REQUEST:
    case AuthActionTypes.SIGN_UP_REQUEST:
      return {
        ...state,
        user: undefined,
        isAuthenticating: true,
        error: false,
      };

    case AuthActionTypes.SIGN_IN_SUCCESS:
    case AuthActionTypes.SIGN_UP_SUCCESS:
      return { ...state, user: action.payload, isAuthenticating: false };

    case AuthActionTypes.SIGN_IN_ERROR:
    case AuthActionTypes.SIGN_UP_ERROR:
      return { ...state, isAuthenticating: false, error: true };

    default:
      return state;
  }
};

export default authReducer;

import { AUTH_SIGN_UP_ENDPOINT, AUTH_SIGN_IN_ENDPOINT } from "./endpoints";
import { AuthGenericError, AuthEmailAlreadyExistsError } from "../errors/auth";
import { ConnectionError } from "../errors/general";
import httpClient from "@config/http.client";

const axiosInstance = httpClient();

export const handleAPIError = (error: any) => {
  if (error.response?.data?.error) {
    if (error.response.status === 422) {
      return new AuthEmailAlreadyExistsError(error.response.data.code);
    }
  } else if (error.response) {
    return new AuthGenericError(error.response);
  } else {
    return new ConnectionError(error);
  }
};

export const signUpApiRequest = async (user: any) => {
  try {
    const response = await axiosInstance.post(AUTH_SIGN_UP_ENDPOINT, user);
    return response.data;
  } catch (error) {
    throw handleAPIError(error);
  }
};

export const signInApiRequest = async (user: any) => {
  try {
    const response = await axiosInstance.post(AUTH_SIGN_IN_ENDPOINT, user);
    return response.data;
  } catch (error) {
    throw handleAPIError(error);
  }
};

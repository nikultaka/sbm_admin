import {
  SET_TOKEN,
  SET_USER_DETAILS,
  SET_LOADER,
  SET_LOGOUT,
  SET_FORGOT_PASSWROD_EMAIL,
  SET_PASSWORD_TOKEN
} from "./user.type";

export const setToken = (data) => ({
  type: SET_TOKEN,
  payload: data,
});

export const setUserDetails = (data) => ({
  type: SET_USER_DETAILS,
  payload: data,
});

export const setLoading = (data) => ({
  type: SET_LOADER,
  payload: data,
});

export const setForgotPasswordEmail = (data) => ({
  type: SET_FORGOT_PASSWROD_EMAIL,
  payload: data,
});

export const setChangePasswordToken = (data) => ({
  type: SET_PASSWORD_TOKEN,
  payload: data,
});

export const setLogout = () => ({
  type: SET_LOGOUT,
});

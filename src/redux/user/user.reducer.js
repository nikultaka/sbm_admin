import {
  SET_TOKEN,
  SET_USER_DETAILS,
  SET_LOADER,
  SET_LOGOUT,
  SET_FORGOT_PASSWROD_EMAIL,
  SET_PASSWORD_TOKEN,
} from "./user.type";
import userInitialstate from "./user.initialstate";

const userReducer = (state = userInitialstate, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        userToken: action.payload,
      };
    case SET_USER_DETAILS:
      return {
        ...state,
        userDeatils: action.payload,
      };
    case SET_LOADER:
      return {
        ...state,
        isLoading: action.payload,
      };
    case SET_LOGOUT:
      return {
        ...state,
        isLoading: false,
        userToken: "",
        userDeatils: "",
      };
    case SET_FORGOT_PASSWROD_EMAIL:
      return {
        ...state,
        isLoading: false,
        forgotEmail: action.payload,
      };
    case SET_PASSWORD_TOKEN:
      return {
        ...state,
        isLoading: false,
        token: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;

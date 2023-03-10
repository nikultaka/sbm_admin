import { combineReducers } from "redux";
import userReducer from "./redux/user/user.reducer";

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;

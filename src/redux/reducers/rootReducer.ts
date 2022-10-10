import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import layoutReducer from "./layout/layout.reducer";
import authReducer from "./auth/auth.reducer";

export const rootReducer = {
  Layout: layoutReducer,
  Auth: authReducer,
};

const persistConfig = {
  key: "root",
  storage,
};

const combinedRootReducer = combineReducers(rootReducer);

export default persistReducer(persistConfig, combinedRootReducer);

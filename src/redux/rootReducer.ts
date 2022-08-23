import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import layoutReducer from "./reducers/layout/layout.reducer";

export const rootReducer = {
  Layout: layoutReducer,
};

const persistConfig = {
  key: "root",
  storage,
};

const combinedRootReducer = combineReducers(rootReducer);

export default persistReducer(persistConfig, combinedRootReducer);

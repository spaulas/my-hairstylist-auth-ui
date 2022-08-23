import { ValueOf } from "@type/global.d";
import LayoutActionTypes from "./actionTypes";

const setBackgroundFocus = (isFocused: boolean) => ({
  type: LayoutActionTypes.SET_BACKGROUND_FOCUS,
  payload: { isFocused },
});

const actionsCreators = Object.freeze({
  setBackgroundFocus,
});

export type ActionsCreators = ReturnType<ValueOf<typeof actionsCreators>>;
export default actionsCreators;

import { ActionsCreators } from "@actions/layout/layout.action";
import PagesActionTypes from "@actions/layout/actionTypes";
import InitialLayout from "./layout.d";

const INITIAL_LAYOUT: InitialLayout = {
  isBackgroundFocused: false,
};

const layoutReducer = (state = INITIAL_LAYOUT, action: ActionsCreators) => {
  console.log('state = ', state)
  console.log('action = ', action)
  switch (action.type) {
    case PagesActionTypes.SET_BACKGROUND_FOCUS:
      return { ...state, isBackgroundFocused: action.payload.isFocused };

    default:
      return state;
  }
};

export default layoutReducer;

import { useSelector, useDispatch } from "react-redux";
import { RootReducerState } from "@type/global";
import layoutActions from "@actions/layout/layout.action";

const useLayout = () => {
  const dispatch = useDispatch();

  const { isBackgroundFocused } = useSelector(
    ({ Layout }: RootReducerState) => {
      return { isBackgroundFocused: Layout.isBackgroundFocused };
    }
  );

  const setBackgroundFocus = (focused: boolean) => {
    dispatch(layoutActions.setBackgroundFocus(focused));
  };

  return { isBackgroundFocused, setBackgroundFocus };
};

export default useLayout;

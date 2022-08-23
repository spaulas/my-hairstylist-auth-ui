import { useSelector, useDispatch } from "react-redux";
import { RootReducerState } from "@type/global";
import layoutActions from "@actions/layout/layout.action";

const useLayout = () => {
  console.log("===================");
  const dispatch = useDispatch();

  const { isBackgroundFocused } = useSelector(
    ({ Layout }: RootReducerState) => {
      console.log("LAYOUT = ", Layout);
      return { isBackgroundFocused: Layout.isBackgroundFocused };
    }
  );
 

  useSelector((state) =>
    console.log("state - ", state)
  );
  const setBackgroundFocus = (focused: boolean) => {
    console.log("setBackgroundFocus focused = ", focused);
    dispatch(layoutActions.setBackgroundFocus(focused));
  };

  console.log("isBackgroundFocused = ", isBackgroundFocused);
  return { isBackgroundFocused, setBackgroundFocus };
};

export default useLayout;

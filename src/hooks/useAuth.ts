import { useDispatch } from "react-redux";
import actions from "@actions/auth/auth.action";

const useAuth = () => {
  const dispatch = useDispatch();

  const signUp = ({ email, password, name }: any) => {
    dispatch(actions.signUpRequest({ email, password, name }));
  };

  const signIn = ({ email, password }: any) => {
    dispatch(actions.signInRequest({ email, password }));
  };

  return { signUp, signIn };
};

export default useAuth;

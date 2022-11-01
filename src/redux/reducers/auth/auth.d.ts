type InitialAuth = {
  authenticated: boolean;
  isAuthenticating: boolean;
  error: boolean;
  user?: User;
};

type User = {
  name: string;
  email: string;
  id: string;
};

export default InitialAuth;

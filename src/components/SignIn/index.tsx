import { useState } from "react";
import Form from "@components/generics/Form";
import EmailField from "@components/generics/Form/Field/Email";
import PasswordField from "@components/generics/Form/Field/Password";
import useAuth from "@hooks/useAuth/index.hooks";

const SignIn = () => {
  const { signIn } = useAuth();
  const [fields, setFields] = useState<Record<string, string>>({
    password: "",
    email: "",
  });
  
  const handleSignIn = () => {
    signIn(fields);
  };

  return (
    <Form
      handleSubmit={handleSignIn}
      buttonTitle="Login"
      showForgotPassword
      link={{
        message: "Don't have an account?",
        title: "Sign up",
        url: "/auth/sign-up",
      }}
    >
      {(isFocused: Record<string, boolean>, setIsFocused: any) => (
        <>
          <EmailField
            email={fields.email}
            setEmail={(value: string) => setFields({ ...fields, email: value })}
            isFocused={isFocused.email}
            setIsFocused={(value: any) =>
              setIsFocused({ ...isFocused, email: value })
            }
          />
          <PasswordField
            password={fields.password}
            setPassword={(value: string) =>
              setFields({ ...fields, password: value })
            }
            isFocused={isFocused.password}
            setIsFocused={(value: any) =>
              setIsFocused({ ...isFocused, password: value })
            }
          />
        </>
      )}
    </Form>
  );
};

export default SignIn;

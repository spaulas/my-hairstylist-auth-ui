import React, { useState } from "react";
import Form from "@components/generics/Form";
import EmailField from "@components/generics/Form/Field/Email";
import PasswordField from "@components/generics/Form/Field/Password";
import useAuth from "@hooks/useAuth";

const SignIn = () => {
  const { signIn } = useAuth();
  const [fields, setFields] = useState({ password: "", email: "" });
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
      {(isFocused: any, setIsFocused: any) => (
        <>
          <EmailField
            email={fields.email}
            setEmail={(value: string) => setFields({ ...fields, email: value })}
            isFocused={isFocused}
            setIsFocused={setIsFocused}
          />
          <PasswordField
            password={fields.password}
            setPassword={(value: string) =>
              setFields({ ...fields, password: value })
            }
            isFocused={isFocused}
            setIsFocused={setIsFocused}
          />
        </>
      )}
    </Form>
  );
};

export default SignIn;

import React from "react";
import Form from "@components/generics/Form";
import EmailField from "@components/generics/Form/Field/Email";
import PasswordField from "@components/generics/Form/Field/Password";

const SignIn = () => {
  const handleSignIn = () => {};

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
          <EmailField isFocused={isFocused} setIsFocused={setIsFocused} />
          <PasswordField isFocused={isFocused} setIsFocused={setIsFocused} />
        </>
      )}
    </Form>
  );
};

export default SignIn;

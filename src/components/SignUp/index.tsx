import React from "react";
import Form from "@components/generics/Form";
import EmailField from "@components/generics/Form/Field/Email";
import PasswordField from "@components/generics/Form/Field/Password";
import NameField from "@components/generics/Form/Field/Name";

const SignUp = () => {
  const handleSignUp = () => {};

  return (
    <Form handleSubmit={handleSignUp} buttonTitle="Sign Up">
      {(isFocused: any, setIsFocused: any) => (
        <>
          <NameField isFocused={isFocused} setIsFocused={setIsFocused} />
          <EmailField isFocused={isFocused} setIsFocused={setIsFocused} />
          <PasswordField isFocused={isFocused} setIsFocused={setIsFocused} />
        </>
      )}
    </Form>
  );
};

export default SignUp;

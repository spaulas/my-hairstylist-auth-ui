import React, { useState } from "react";
import Form from "@components/generics/Form";
import EmailField from "@components/generics/Form/Field/Email";
import PasswordField from "@components/generics/Form/Field/Password";
import NameField from "@components/generics/Form/Field/Name";
import useAuth from "@hooks/useAuth";

const SignUp = () => {
  const { signUp } = useAuth();
  const [fields, setFields] = useState({ name: "", password: "", email: "" });

  const handleSignUp = () => {
    signUp(fields);
  };

  return (
    <Form
      handleSubmit={handleSignUp}
      buttonTitle="Sign Up"
      link={{
        message: "Already have an account?",
        title: "Sign in",
        url: "/auth/sign-in",
      }}
    >
      {(isFocused: any, setIsFocused: any) => (
        <>
          <NameField
            name={fields.name}
            setName={(value: string) => setFields({ ...fields, name: value })}
            isFocused={isFocused}
            setIsFocused={setIsFocused}
          />
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

export default SignUp;

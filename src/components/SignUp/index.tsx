import React, { useState } from "react";
import Form from "@components/generics/Form";
import EmailField from "@components/generics/Form/Field/Email";
import PasswordField from "@components/generics/Form/Field/Password";
import NameField from "@components/generics/Form/Field/Name";
import useAuth from "@hooks/useAuth/index.hooks";

const SignUp = () => {
  const { signUp } = useAuth();
  const [fields, setFields] = useState({ name: "", password: "", email: "" });

  const handleSignUp = () => {
    signUp(fields);
  };

  return (
    <Form
      handleSubmit={handleSignUp}
      buttonTitle="Sign up"
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
            setIsFocused={(value: any) =>
              setIsFocused({ ...isFocused, name: value })
            }
          />
          <EmailField
            email={fields.email}
            setEmail={(value: string) => setFields({ ...fields, email: value })}
            isFocused={isFocused}
            setIsFocused={(value: any) =>
              setIsFocused({ ...isFocused, email: value })
            }
          />
          <PasswordField
            password={fields.password}
            setPassword={(value: string) =>
              setFields({ ...fields, password: value })
            }
            isFocused={isFocused}
            setIsFocused={(value: any) =>
              setIsFocused({ ...isFocused, password: value })
            }
          />
        </>
      )}
    </Form>
  );
};

export default SignUp;

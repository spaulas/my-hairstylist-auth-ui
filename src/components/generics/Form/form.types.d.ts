import React from "react";

export type FormProps = {
  children: (
    isFocused: Record<string, boolean>,
    setIsFocused: Dispatch<SetStateAction<{}>>
  ) => React.ReactElement;
  handleSubmit: () => void;
  buttonTitle: string;
  showForgotPassword?: boolean;
  link: { message: string; title: string; url: string };
};

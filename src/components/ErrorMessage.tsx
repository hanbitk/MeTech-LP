import React from "react";

interface IErrorMsgProp {
  children: React.ReactNode;
}

function ErrorMessage({ children }: IErrorMsgProp) {
  return <span className="pl-2 text-xs text-red font-light">{children}</span>;
}

export default ErrorMessage;

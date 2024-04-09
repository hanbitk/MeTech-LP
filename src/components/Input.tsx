import React from "react";
import { IInputProps } from "../utils/constants";
import ErrorMessage from "./ErrorMessage";

function Input({
  label,
  identifier,
  placeholder,
  register,
  errors,
}: IInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label>
        {label}
        <ErrorMessage>{errors[identifier]?.message}</ErrorMessage>
      </label>
      <input
        {...register(`${identifier}`)}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;

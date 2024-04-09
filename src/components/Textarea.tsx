import React from "react";
import { IInputProps } from "../utils/constants";
import ErrorMessage from "./ErrorMessage";

function Textarea({
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
      <textarea
        {...register(`${identifier}`)}
        placeholder={placeholder}
        rows={8}
      />
    </div>
  );
}

export default Textarea;

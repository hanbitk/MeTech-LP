import { FieldErrors, UseFormRegister } from "react-hook-form";

export const PATH_URL = {
  ABOUT: "/about",
  SERVICE: "/service",
  RELEASE: "/releases",
};

export const NAVBAR_TABS = [
  { title: "Home", path: "/" },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Service",
    path: "/service",
  },
  {
    title: "Releases",
    path: "/releases",
  },
  {
    title: "Contact",
    path: "/contact", // Contact path to be decided
  },
];

// Input, Textarea Prop Types
export type FormValues = {
  fullName: string;
  email: string;
  message: string;
};

export interface IInputProps {
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  identifier: keyof FormValues;
  label: string;
  placeholder: string;
}

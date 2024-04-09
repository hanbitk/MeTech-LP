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

export const LOCATION = [
  {
    country: "South Korea",
    address: "524, Bongeunsa-ro, Gangnam-gu, Seoul, 06164, Republic of Korea",
  },
  {
    country: "Singapore",
    address: "10 Anson Road #34-10 International Plaza, 079903, Singapore",
  },
  {
    country: "United States",
    address: "524, Bongeunsa-ro, Gangnam-gu, Seoul, 06164, Republic of Korea",
  },
];

export const FOOTER_NAVBAR_TABS = [
  {
    title: "About",
    to: "/about",
    description: {
      one: "Our Company",
      two: "Methane Capsule",
    },
  },
  {
    title: "Service",
    to: "/service",
    description: {
      one: "Our Company",
      two: "Methane Capsule",
    },
  },
  {
    title: "Releases",
    to: "/releases",
    description: {
      one: "Latest News",
    },
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

import { FieldErrors, UseFormRegister } from "react-hook-form";

export const PATH_URL = {
  ABOUT: "/about",
  SERVICE: "/service",
  RELEASE: "/releases",
  CONTACT: "/contact",
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
      one: "About Us",
      two: "Our Mission",
    },
  },
  {
    title: "Service",
    to: "/service",
    description: {
      one: "Our Service",
      two: "Methane Capsule RAW-DATA",
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

export const HISTORY_LIST = [
  { date: "'24.02.28", title: "USA-Arkeabio export contract signed" },
  { date: "'24.11.20", title: "USA-USDA joint R&D and export contract signed" },
  { date: "'23.11.01", title: "Australia Rumin8 contract signed" },
  {
    date: "'23.04.01",
    title: "Methane reduction capsule development completed",
  },
  { date: "'23.02.28", title: "Conversion to corporation established" },
  {
    date: "'23.01.20",
    title: "Methane reduction capsule development completed",
  },
  { date: "'22.12.22", title: "Business (sole proprietorship) registration" },
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

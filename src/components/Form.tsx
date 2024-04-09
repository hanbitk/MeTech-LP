import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormValues } from "../utils/constants";
import * as yup from "yup";
import axios from "axios";
import Input from "./Input";
import Textarea from "./Textarea";
import Button from "./Button";

function Form() {
  const schema = yup.object().shape({
    fullName: yup.string().required("*Your Full Name is Required"),
    email: yup
      .string()
      .required("*Your E-mail is Required")
      .matches(
        /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
        "*Please enter a valid email address"
      ),
    message: yup
      .string()
      .min(20, "*The Message must be at least 20 characters")
      .max(500)
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data, e) => {
    e?.preventDefault();

    const formData = {
      service_id: process.env.REACT_APP_SERVICE_ID,
      template_id: process.env.REACT_APP_TEMPLATE_ID,
      user_id: process.env.REACT_APP_PUBLIC_KEY,
      template_params: data,
    };

    try {
      axios
        .post("https://api.emailjs.com/api/v1.0/email/send", formData)
        .then(({ data, status }) => {
          if (data === "OK" && status === 200)
            alert("Your message has been successfully sent!");
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, formState, reset]);

  return (
    <div className="w-1/2 h-full flex flex-col justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full h-full flex flex-col justify-between"
      >
        <div className="w-full flex flex-col gap-4">
          {/* Full Name Field */}
          <Input
            label="Full Name"
            identifier="fullName"
            placeholder="Enter your First and Last name"
            register={register}
            errors={errors}
          />
          {/* Email Field */}
          <Input
            label="E-mail"
            identifier="email"
            placeholder="email@email.com"
            register={register}
            errors={errors}
          />
          {/* Message Field */}
          <Textarea
            label="Message"
            identifier="message"
            placeholder="Enter your message"
            register={register}
            errors={errors}
          />
        </div>
        <div className="flex self-end">
          <Button bg="bg-darkGreen">Submit</Button>
        </div>
      </form>
    </div>
  );
}

export default Form;

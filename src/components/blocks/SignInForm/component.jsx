import React, { useState, useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { Button, Input } from "@/components/controls";

import { VALID_EMAIL, VALID_PASSWORD } from "@/constants/validation";

import { toastOptions } from "@/constants/toastOptions";

import "./style.css";

const SignInForm = ({ onLoginUser, loginErrors, from }) => {
  const { handleSubmit, register, errors } = useForm();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (loginErrors) {
      loginErrors.forEach((error) => {
        toast.error(`🦄 ${error}`, toastOptions);
      });
    }
  }, [loginErrors]);

  const handleFormSubmit = useCallback(
    (data, event) => {
      event.preventDefault();

      onLoginUser({ formData, from });
    },
    [formData, onLoginUser, from]
  );

  const handleChange = useCallback(
    (event) => {
      const { name, value } = event.target;

      setFormData({ ...formData, [name]: value });
    },
    [formData]
  );

  return (
    <form
      className="registration-from"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <Input
        name="email"
        myRef={register(VALID_EMAIL)}
        validationErrors={errors.email ? errors.email.message : null}
        placeholder="Email"
        type="email"
        onInputChange={handleChange}
      />

      <Input
        name="password"
        myRef={register(VALID_PASSWORD)}
        validationErrors={errors.password ? errors.password.message : null}
        placeholder="Password"
        type="password"
        onInputChange={handleChange}
      />

      <Button size="lg" type="submit" text="Sign In" />
    </form>
  );
};

export default SignInForm;

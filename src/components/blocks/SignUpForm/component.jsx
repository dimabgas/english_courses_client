import React, { useState, useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { Button, Input, Select } from "@/components/controls";

import objectToArray from "@/helpers/objectToArray";

import userConstants from "@/constants/userConstants";
import { toastOptions } from "@/constants/toastOptions";

import {
  VALID_EMAIL,
  VALID_FIRST_NAME,
  VALID_SECOND_NAME,
  VALID_PASSWORD,
} from "@/constants/validation";

import "./style.css";

const SignUpForm = ({ onRegisterUser, registerErrors }) => {
  const { handleSubmit, register, errors, watch } = useForm();
  const userRoles = objectToArray(userConstants.roles);

  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    email: "",
    password: "",
    repeatPassword: "",
    roles: userRoles[0],
  });

  useEffect(() => {
    if (registerErrors) {
      registerErrors.forEach((error) => {
        toast.error(`🦄 ${error}`, toastOptions);
      });
    }
  }, [registerErrors]);

  const handleFormSubmit = useCallback(
    (data, event) => {
      event.preventDefault();

      onRegisterUser(formData);
    },
    [formData, onRegisterUser]
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
        name="firstName"
        myRef={register(VALID_FIRST_NAME)}
        validationErrors={errors.firstName ? errors.firstName.message : null}
        placeholder="First name"
        onInputChange={handleChange}
      />

      <Input
        name="secondName"
        myRef={register(VALID_SECOND_NAME)}
        validationErrors={errors.secondName ? errors.secondName.message : null}
        placeholder="Second name"
        onInputChange={handleChange}
      />

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

      <Input
        name="repeatPassword"
        myRef={register({
          required: {
            value: true,
            message: "This field is required",
          },
          validate: (value) =>
            value === watch("password") || "Passwords don't match.",
        })}
        validationErrors={
          errors.repeatPassword ? errors.repeatPassword.message : null
        }
        placeholder="Repeat password"
        type="password"
        onInputChange={handleChange}
      />

      <div className="registration-from__select-wrap">
        <Select
          name="roles"
          textLabel="Select the role"
          values={userRoles}
          onChange={handleChange}
        />
      </div>
      <Button size="lg" type="submit" text="Registration" />
    </form>
  );
};

export default SignUpForm;

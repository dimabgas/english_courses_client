import React from "react";
import { Link } from "react-router-dom";

import { FormHeader, SignUpForm } from "@/components/blocks";

import "./style.css";

const SignUpPage = () => {
  return (
    <div className="sign-up sign-up-wrapper form-wrapper-center">
      <FormHeader
        title="Create a new account"
        subtitle="We are glad to see you here! Let's create a new account so that you can
        work with our app."
      />
      <SignUpForm />
      <Link className="form-link-bottom" to="/sign-in">
        Back to Login
      </Link>
    </div>
  );
};

export default SignUpPage;

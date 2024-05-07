import React from "react";
import { Link } from "react-router-dom";

import { SignInForm, FormHeader } from "@/components/blocks";

import "./style.css";

const SignInPage = ({ location }) => {
  const { from } = location.state || { from: { pathname: "/" } };

  return (
    <div className="sign-in sign-in-wrapper form-wrapper-center">
      <FormHeader
        title="Welcome back ☃️"
        subtitle="Hi! We are glad to see that you are with us. To continue, log in to the app using your username and password."
      />
      <SignInForm from={from} />
      <Link className="form-link-bottom" to="/sign-up">
        Registration
      </Link>
    </div>
  );
};

export default SignInPage;

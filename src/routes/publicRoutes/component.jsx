import React from "react";
import { Route } from "react-router-dom";

import {
  BASE_URL,
  SIGN_IN_URL,
  SIGN_UP_URL,
  STUDY_URL,
} from "@/constants/routes";

import PrivateRoutes from "@/routes/privateRoutes";
import { withoutLogin } from "@/hocs/withAuthorization";

import SignInPage from "@/pages/SignIn";
import SignUpPage from "@/pages/SignUp";

const PublicRoutes = () => (
  <>
    <Route exact path={BASE_URL} component={withoutLogin(SignInPage)} />
    <Route exact path={SIGN_IN_URL} component={withoutLogin(SignInPage)} />
    <Route exact path={SIGN_UP_URL} component={withoutLogin(SignUpPage)} />

    <Route path={STUDY_URL} component={PrivateRoutes} />
  </>
);

export default PublicRoutes;

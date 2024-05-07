import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { getUserAuth } from "@/selectors";
import { SIGN_IN_URL, STUDY_URL } from "@/constants/routes";

export const withAuthorization = (Component) => {
  const ComponentWithAuthorization = (props) => {
    const {
      isAuthenticated: { isAuthenticated },
      location: { pathname, search },
    } = props;

    if (isAuthenticated) {
      return <Component {...props} />;
    }

    return (
      <Redirect
        to={{
          pathname: SIGN_IN_URL,
          state: { from: `${pathname}${search}` },
        }}
      />
    );
  };

  return connect(
    (state) => ({
      isAuthenticated: getUserAuth(state),
    }),
    () => ({})
  )(ComponentWithAuthorization);
};

export const withoutLogin = (Component) => {
  const ComponentWithoutLogin = (props) => {
    const {
      isAuthenticated: { isAuthenticated },
    } = props;

    if (isAuthenticated) {
      return <Redirect to={STUDY_URL} />;
    }

    return <Component {...props} />;
  };

  return connect(
    (state) => ({
      isAuthenticated: getUserAuth(state),
    }),
    () => ({})
  )(ComponentWithoutLogin);
};

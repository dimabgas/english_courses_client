import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { STUDY_URL } from "@/constants/routes";
import userConstants from "@/constants/userConstants";

export const withTeacher = (Component) => {
  const ComponentWithTeacher = (props) => {
    const { roles } = props;

    if (roles.includes(userConstants.roles.teacher)) {
      return <Component {...props} />;
    }

    return <Redirect to={STUDY_URL} />;
  };

  return connect(
    (state) => ({
      roles: state.user.userData.data.roles,
    }),
    () => ({})
  )(ComponentWithTeacher);
};

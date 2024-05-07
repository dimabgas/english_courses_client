import React from "react";
import { Route } from "react-router-dom";
import {
  ABOUT_URL,
  PROFILE_URL,
  COURSE_URL,
  STUDY_URL,
  CREATE_LESSON_URL,
} from "@/constants/routes";
import { BasePage, About, Profile, CoursesPage, AddLessonPage } from "@/pages";
import { withAuthorization } from "@/hocs/withAuthorization";
import { withTeacher } from "@/hocs/withTeacher";
import BaseLayout from "@/components/layouts/BaseLayout";

const PrivateRoutes = () => {
  return (
    <BaseLayout>
      <Route exact path={STUDY_URL} component={withAuthorization(BasePage)} />
      <Route exact path={ABOUT_URL} component={withAuthorization(About)} />
      <Route exact path={PROFILE_URL} component={withAuthorization(Profile)} />
      <Route
        exact
        path={COURSE_URL}
        component={withAuthorization(CoursesPage)}
      />
      <Route
        exact
        path={CREATE_LESSON_URL}
        component={withAuthorization(withTeacher(AddLessonPage))}
      />
    </BaseLayout>
  );
};

export default PrivateRoutes;

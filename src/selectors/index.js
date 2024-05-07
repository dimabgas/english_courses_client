import { createSelector } from "reselect";

const user = (state) => state.user;
export const courses = (state) => state.courses;
export const lessons = (state) => state.lessons;

export const userRegister = createSelector([user], (user) => user.userRegister);
export const userLogin = createSelector([user], (user) => user.userLogin);
export const getUserData = createSelector([user], (user) => user.userData);
export const getUserAuth = createSelector(
  [user],
  (user) => user.isAuthenticated
);

export const userRegisterErrors = createSelector(
  [userRegister],
  ({ errors }) => errors
);

export const userLoginErrors = createSelector(
  [userLogin],
  ({ errors }) => errors
);

export const getAllCourses = createSelector(
  [courses],
  (courses) => courses.courses.data.courses
);

export const getUsersCoursesSelector = createSelector(
  [user],
  (user) => user.usersCourses
);

export const getCourseData = createSelector(
  [courses],
  (courses) => courses.course.data
);

export const getLessonsListSelector = createSelector(
  [lessons],
  (lessons) => lessons.lessonsList.data
);

export const getLessonDetailsSelector = createSelector(
  [lessons],
  (lessons) => lessons.lessonDetails.data
);

export const getUsersCoursesLevels = createSelector([user], (user) => {
  console.log("🚀 ~ user.usersCourses", user.setLevel);
  return user.setLevel.filter.levels;
});

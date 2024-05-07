import { connect } from "react-redux";
import { getCourse } from "@/actions/courses";
import { getLessonDetails } from "@/actions/lesson/getDetails";
import { setLessonsInit } from "@/actions/lesson/setInit";
import { getUserData, getCourseData } from "@/selectors";

import CoursesPage from "./component";

const mapStateToProps = (state) => ({
  userData: getUserData(state),
  courseData: getCourseData(state),
  loading: state.courses.course.loading,
  isLessonEdited: state.lessons.editLesson.isLessonEdited,
  isLessonDeleted: state.lessons.deleteLesson.isLessonDeleted,
});

const mapDispatchToProps = (dispatch) => ({
  getCourse: (id) => dispatch(getCourse(id)),
  getLessonDetails: (id) => dispatch(getLessonDetails(id)),
  setLessonsInit: () => dispatch(setLessonsInit()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);

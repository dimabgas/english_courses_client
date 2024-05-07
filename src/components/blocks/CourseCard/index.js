import { connect } from "react-redux";
import { deleteCourse } from "@/actions/courses/index";
import { getCourseData } from "@/selectors";
// Вверху импортировал по образцу из pages/AddLessonPage

import CourseCard from "./component";

const mapStateToProps = (state) => ({
  CourseCard: getCourseData(state),
  loading: state.courses.deleteCourse.loading, // Тут я не уверен, если не будет работать(То нужно будет заменить на CourseCardloading)
});

const mapDispatchToProps = (dispatch) => ({
  deleteCourse: (_id) => dispatch(deleteCourse(_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseCard);

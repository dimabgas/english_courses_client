import { connect } from "react-redux";
import { createLesson } from "@/actions/lesson/create";
import { getCourseData } from "@/selectors";

import AddLessonPage from "./component";

const mapStateToProps = (state) => ({
  loading: state.lessons.createLesson.loading,
  courseData: getCourseData(state),
});

const mapDispatchToProps = (dispatch) => ({
  createLesson: (data) => dispatch(createLesson(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddLessonPage);

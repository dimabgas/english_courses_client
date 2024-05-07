import { connect } from "react-redux";
import { getLessonDetailsSelector } from "@/selectors";
import { deleteLesson } from "@/actions/lesson/delete";

import LessonDetails from "./component";

const mapStateToProps = (state) => ({
  lessonDetails: getLessonDetailsSelector(state),
  lessonDetailsLoading: state.lessons.lessonDetails.loading,
});

const mapDispatchToProps = (dispatch) => ({
  deleteLesson: (id) => dispatch(deleteLesson(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LessonDetails);

import { connect } from "react-redux";
import { editLesson } from "@/actions/lesson/edit";
import EditLessonForm from "./component";

const mapStateToProps = (state) => ({
  loading: state.lessons.editLesson.loading,
});

const mapDispatchToProps = (dispatch) => ({
  editLesson: (data) => dispatch(editLesson(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditLessonForm);

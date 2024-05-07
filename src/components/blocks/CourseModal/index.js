import { connect } from "react-redux";
import { getCourse } from "@/actions/courses";
import { setInitialCourse } from "@/actions/courses";

import Modal from "./component";

const mapStateToProps = (state) => ({
  courseLoading: state.courses.course.loading,
});

const mapDispatchToProps = (dispatch) => ({
  getCourse: (id) => dispatch(getCourse(id)),
  setInitialCourse: () => dispatch(setInitialCourse()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

import { connect } from "react-redux";
import { addCourse } from "@/actions/courses";

import AddCourseForm from "./component";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addCourse: (data) => dispatch(addCourse(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCourseForm);

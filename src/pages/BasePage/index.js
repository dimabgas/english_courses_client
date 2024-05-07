import { connect } from "react-redux";
import { getAllCourses } from "@/selectors";
import { getCourses, changePage, setLevel } from "@/actions/courses";
import BasePage from "./component";

const mapStateToProps = (state) => ({
  courses: getAllCourses(state),
  loading: state.courses.courses.loading,
  loaded: state.courses.courses.loaded,
  coursesCount: state.courses.courses.data.coursesCount,
  currentPage: state.courses.courses.page,
  size: state.courses.courses.size,
});

const mapDispatchToProps = (dispatch) => ({
  getCourses: () => dispatch(getCourses()),
  changePage: (pageNum) => dispatch(changePage(pageNum)),
  setLevel: (data) => dispatch(setLevel(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BasePage);

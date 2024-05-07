import { connect } from "react-redux";
import { getUsersCoursesSelector } from "@/selectors";
import { getUsersCourses } from "@/actions/user/courses";

import UserCourses from "./component";

const mapStateToProps = (state) => ({
  usersCourses: getUsersCoursesSelector(state),
  isLoaded: state.user.usersCourses.isLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  getUsersCourses: () => dispatch(getUsersCourses()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserCourses);

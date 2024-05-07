import { connect } from "react-redux";
import {
  getUserData,
  getUsersCoursesSelector,
  getUserAuth,
  getUsersCoursesLevels,
} from "@/selectors";
import { getUsersCourses } from "@/actions/user/courses";
import { getUser } from "@/actions/user/getData";
import { filterUsersCourses } from "@/actions/user/filter";

import Profile from "./component";

const mapStateToProps = (state) => ({
  userData: getUserData(state),
  usersCourses: getUsersCoursesSelector(state),
  isAuthenticated: getUserAuth(state),
  levels: getUsersCoursesLevels(state),
});

const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(getUser()),
  getUsersCourses: () => dispatch(getUsersCourses()),
  setLevels: (levels) => dispatch(filterUsersCourses(levels)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

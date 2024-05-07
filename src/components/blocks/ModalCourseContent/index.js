import { connect } from "react-redux";
import { subscribeUser } from "@/actions/user/subscribe";
import { getCourseData } from "@/selectors";

import ModalCourseContent from "./component";

const mapStateToProps = (state) => ({
  courseData: getCourseData(state),
  userRoles: state.user.userData.data.roles,
});

const mapDispatchToProps = (dispatch) => ({
  subscribeUser: (id) => dispatch(subscribeUser(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalCourseContent);

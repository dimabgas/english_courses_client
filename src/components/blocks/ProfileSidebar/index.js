import { connect } from "react-redux";
import { getUserData } from "@/selectors";
import { logoutUser } from "@/actions/user/logout";

import ProfileSidebar from "./component";

const mapStateToProps = (state) => ({
  userData: getUserData(state),
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSidebar);
